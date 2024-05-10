import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

const BarChart = () => {
  const labels = ["MO", "TU", "WE", "TH", "FR", "SA", "SU", "MO", "TU"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "vgf",
        backgroundColor: "#C704FE",
        data: [50, 70, 100, 120, 180, 250, 300, 320, 380],
        fill: false,
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        color: "white",
        labels: {
          title: {
            font: {
              weight: "bold",
            },
          },
        },
        anchor: "start",
        align: "-90",
      },
      legend: {
        position: "left",
        labels: {
          boxHeight: 10,
          boxWidth: 0,
        },
      },
    },
  };

  return (
    <div>
      <Bar data={data} plugins={[ChartDataLabels]} options={options} />
    </div>
  );
};

export default BarChart;
