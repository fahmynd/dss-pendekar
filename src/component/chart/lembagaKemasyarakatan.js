import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    r: {
      angleLines: {
        display: true,
      },
    },
  },
};

export function LembagaKemasyarakatan(props) {
  const data = {
    labels: ["BPD", "Karang Taruna", "LPMD", "PKK", "Posyandu"],
    datasets: [
      {
        // label: '# of Votes',
        data: [
          props?.data.bpd,
          props?.data.karang_taruna,
          props?.data.lpmd,
          props?.data.pkk,
          props?.data.posyandu,
        ],
        backgroundColor: "rgba(232, 193, 160, 0.25)",
        borderColor: "#E8C1A0",
        borderWidth: 1,
      },
    ],
  };
  return <Radar data={data} options={options} />;
}
