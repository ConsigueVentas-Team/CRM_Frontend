import { defaults } from "chart.js/auto";
import { Bar, Doughnut, Line, Radar, Scatter, Pie } from "react-chartjs-2";
import lineData from "./data/revenueData.json";
import sourceData from "./data/sourceData.json";
import scatterData from "./data/scatterData.json";
import radarData from "./data/radarData.json";
import "./graphics.css";

const ChartComponent = () => {

  defaults.maintainAspectRatio = false;
  defaults.responsive = true;
  defaults.plugins.title.display = true;
  defaults.plugins.title.align = "start";
  defaults.plugins.title.color = "black";

  return (
    <div className="graphics-container">
      <div className="dataCard revenueCard">
        <Line
          data={{
            labels: lineData.map((data) => data.label),
            datasets: [
              {
                label: "dato1",
                data: lineData.map((data) => data.data1),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
              {
                label: "dato2",
                data: lineData.map((data) => data.data2),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Gráfico de líneas",
              },
            },
          }}
        />
      </div>


      <div className="dataCard customerCard">
        <Bar
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Cantidad",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                    "rgb(72, 226, 170)"
                  ],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Gráfico de barras",
              },
            },
          }}
        />
      </div>


      <div className="dataCard categoryCard">
        <Doughnut
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Cantidad",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                  "rgb(72, 226, 170)"
                ],
                borderColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                  "rgb(72, 226, 170)"
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Gráfico dona",
              },
            },
          }}
        />
      </div>


      <div className="dataCard scatterCard">
        <Scatter
          data={{
            datasets: [
              {
                label: "Datos de dispersión",
                data: scatterData,
                backgroundColor: "rgba(250, 192, 19, 0.8)",
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Gráfico de dispersión",
              },
            },
          }}
        />
      </div>


      <div className="dataCard doubleBarCard">
        <Bar
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Cantidad 1",
                data: sourceData.map((data) => data.value),
                backgroundColor: "rgba(43, 63, 229, 0.8)",
              },
              {
                label: "Cantidad 2",
                data: sourceData.map((data) => data.value * 2), 
                backgroundColor: "rgba(253, 135, 135, 0.8)",
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Gráfico de doble barras",
              },
            },
          }}
        />
      </div>


      <div className="dataCard pieCard">
        <Pie
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                  "rgb(72, 226, 170)"
                ],
                borderColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                  "rgb(72, 226, 170)"
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Gráfico circular",
              },
            },
          }}
        />
      </div>


      <div className="dataCard radarCard">
        <Radar
          data={{
            labels: radarData.map((data) => data.label),
            datasets: [
              {
                label: "Datos del radar",
                data: radarData.map((data) => data.value),
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Gráfico radar",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default ChartComponent;
