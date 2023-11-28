import { defaults } from "chart.js/auto";
import { Bar, Doughnut, Line, Radar, Scatter, Pie } from "react-chartjs-2";
import lineData from "../data/revenueData.json";
import sourceData from "../data/sourceData.json";
import scatterData from "../data/scatterData.json";
import radarData from "../data/radarData.json";
import "./graphics.css";

const ChartComponent = () => {

  const titleColor = "#FFFFFF";
  const primaryColor = "#5CF4F4";
  const secondaryColor = "#CCFC04";
  const tertiaryColor = "#FFEC44";
  const quaternaryColor = "#FF2F54";

  defaults.maintainAspectRatio = false;
  defaults.responsive = true;
  defaults.plugins.title.display = true;
  defaults.plugins.title.align = "start";
  defaults.plugins.title.color = titleColor;

  return (
    <div className="graphics-container bg-background">
      <div className="dataCard revenueCard bg-background shadow-none border">
        <Line
          data={{
            labels: lineData.map((data) => data.label),
            datasets: [
              {
                label: "dato1",
                data: lineData.map((data) => data.data1),
                backgroundColor: primaryColor,
                borderColor: primaryColor
              },
              {
                label: "dato2",
                data: lineData.map((data) => data.data2),
                backgroundColor: secondaryColor,
                borderColor: secondaryColor,
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


      <div className="dataCard customerCard bg-background shadow-none border">
        <Bar
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Cantidad",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  primaryColor,
                  secondaryColor,
                  tertiaryColor,
                  quaternaryColor,
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


      <div className="dataCard categoryCard bg-background shadow-none border">
        <Doughnut
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Cantidad",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  primaryColor,
                  secondaryColor,
                  tertiaryColor,
                  quaternaryColor,
                ],
                borderColor: [
                  primaryColor,
                  secondaryColor,
                  tertiaryColor,
                  quaternaryColor,

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


      <div className="dataCard scatterCard bg-background shadow-none border">
        <Scatter
          data={{
            datasets: [
              {
                label: "Datos de dispersión",
                data: scatterData,
                backgroundColor: primaryColor,
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


      <div className="dataCard doubleBarCard bg-background shadow-none border">
        <Bar
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Cantidad 1",
                data: sourceData.map((data) => data.value),
                backgroundColor: primaryColor
              },
              {
                label: "Cantidad 2",
                data: sourceData.map((data) => data.value * 2),
                backgroundColor: secondaryColor,
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


      <div className="dataCard pieCard bg-background shadow-none border">
        <Pie
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  primaryColor,
                  secondaryColor,
                  tertiaryColor,
                  quaternaryColor,
                ],
                borderColor: [
                  primaryColor,
                  secondaryColor,
                  tertiaryColor,
                  quaternaryColor,
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


      <div className="dataCard radarCard bg-background shadow-none border">
        <Radar
          data={{
            labels: radarData.map((data) => data.label),
            datasets: [
              {
                label: "Datos del radar",
                data: radarData.map((data) => data.value),
                backgroundColor: "rgba(204, 252, 4, 0.2)",
                borderColor: secondaryColor,
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
