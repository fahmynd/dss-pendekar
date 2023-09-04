import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PotensiManusia(props) {
  const data = {
    labels: ["Laki-Laki", "Perempuan"],
    datasets: [
      {
        // label: '# of Votes',
        data: [props.data.maleCount, props.data.femaleCount],
        backgroundColor: ["#327A6D", "#EA9501"],
        borderColor: ["#FFFFFF", "#FFFFFF"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1 | 1,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
        },
      },
    },
  };

  return (
    <Pie
      data={data}
      options={options}
      // style={{ width: "450px", height: "450px" }}
    />
  );
}
