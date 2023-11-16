import React,{ useEffect, useRef, useMemo } from "react";
import * as SVG from "@svgdotjs/svg.js";
import {createNoise2D} from "simplex-noise";
import {
  random,
  randomSnap,
  map,
  createVoronoiTessellation,
} from "@georgedoescode/generative-utils";
import gsap from "gsap";
import "../login.css";

export const LoginPatternAnimate = React.memo(() => {
  const width = 1080;
  const height = 1080;

  let numShapes = 24;
  const colors = ["#1A91D0", "#FCBF02", "#EBF5FE"];

  const svgRef = useRef<SVG.Svg | null>(null);
  const noise2D = createNoise2D();

  const createVoronoi = useMemo(() => createVoronoiTessellation, []);
  const snap = useMemo(() => randomSnap, []);

  useEffect(() => {
    const svg = SVG.SVG('#canvas')
    .viewbox(0, 0, width, height)
    .addTo('body')
    .attr('preserveAspectRatio', 'xMidYMid slice')
    .attr('id', 'canvas') as SVG.Svg;

    svgRef.current = svg;

    class Point {
      x: number;
      y: number;
      canvasWidth: number;
      canvasHeight: number;
      xOff: number;
      yOff: number;
      noiseIncrement: number;

      constructor(
        x: number,
        y: number,
        canvasWidth: number,
        canvasHeight: number
      ) {
        this.x = x;
        this.y = y;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.xOff = random(0, 10000);
        this.yOff = random(0, 10000);
        this.noiseIncrement = 0.000375;
      }

      update() {
        const x = Math.floor(
          map(noise2D(this.xOff, this.xOff), -1, 1, 0, this.canvasWidth)
        );
        const y = Math.floor(
          map(
            noise2D(this.yOff, this.yOff),
            -1,
            1,
            0,
            this.canvasHeight
          )
        );

        gsap.set(this, { x, y });

        this.xOff += this.noiseIncrement;
        this.yOff += this.noiseIncrement;
      }
    }

    class Layout {
      maxSize: number;
      points: Point[];
      cells: { x: number; y: number; rad: number }[];

      constructor() {
        this.maxSize = numShapes;
        this.points = Array.from(
          { length: this.maxSize },
          () => new Point(random(0, width), random(0, height), width, height)
        );
        this.cells = [];

        const { cells } = createVoronoi({
          width,
          height,
          points: this.points,
          relaxIterations: 0,
        });

        for (let i = 0; i < cells.length; i++) {
          this.cells.push({
            x: cells[i].centroid.x,
            y: cells[i].centroid.y,
            rad: cells[i].innerCircleRadius,
          });
        }
      }

      update() {
        const { cells } = createVoronoi({
          width,
          height,
          points: this.points,
          relaxIterations: 0,
        });

        if (cells.length === this.maxSize) {
          for (let i = 0; i < this.maxSize; i++) {
            gsap.to(this.cells[i], {
              x: cells[i].centroid.x,
              y: cells[i].centroid.y,
              rad: cells[i].innerCircleRadius,
              duration: 0.4,
            });
          }
        }

        for (let index = 0; index < this.points.length; index++) {
          const point = this.points[index];

          point.update();

          for (let i = 0; i < this.points.length; i++) {
            if (
              i !== index &&
              this.points[i].x === point.x &&
              this.points[i].y === point.y
            ) {
              point.x += snap(-100, 100, 100);
              point.y += snap(-100, 100, 100);
              point.xOff += 0.001;
              point.yOff += 0.001;
            }
          }
        }
      }
    }

    const layout = new Layout();
    const shapes: SVG.Element[] = [];
    const lines = svg.group();

    function addShape() {
      if (random(0, 1) > 0.5) {
        shapes.push(svg.rect().fill(random(colors)));
      } else {
        shapes.push(svg.circle().fill(random(colors)));
      }
    }

    /*function addShape() {
      const randomShape = Math.round(random(0, 2));
      if (randomShape === 0) {
        shapes.push(svg.rect().fill(random(colors)));
      } else if (randomShape === 1) {
        shapes.push(svg.circle().fill(random(colors)));
      } else {
        shapes.push(svg.polygon().fill(random(colors)).plot("0,0 100,0 50,100"));
      }
    }*/

    for (let i = 0; i < numShapes; i++) {
      addShape();
    }

    function update() {
      lines.clear();

      for (let i = 0; i < shapes.length; i++) {
        const cell = layout.cells[i];
        const point = layout.points[i];
        const rotation = map(
          noise2D(point.xOff, point.yOff),
          -1,
          1,
          0,
          360
        );

        gsap.set(shapes[i].node, {
          x: cell.x,
          y: cell.y,
          rotate: rotation,
          attr: {
            r: cell.rad * 0.625,
            width: cell.rad * 0.625,
            height: cell.rad * 0.625,
          },
          overwrite: true,
        });
      }

      layout.update();
      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);

    // Limpieza al desmontar el componente
    return () => {
      // Liberar recursos, limpiar temporizadores, etc.
      if (svgRef.current) {
        svgRef.current.clear();
        svgRef.current.remove();
      }
    };
  }, []); // Asegúrate de proporcionar las dependencias adecuadas si es necesario

  // Funciones y lógica específicas de tu componente aquí...

  return (
    <svg
      className="absolute top-0 left-0 w-full h-full bg-white"
      id="canvas"
    ></svg>
  );
});