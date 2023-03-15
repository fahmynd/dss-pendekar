import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Variable 1', 'Variable 2', 'Variable 3'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
                '#67C587',
                '#EAF6ED',
                '#C9EAD4',
            ],
            borderColor: [
                '#FFFFFF',
                '#FFFFFF',
                '#FFFFFF',
            ],
            borderWidth: 1,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: "bottom",
            labels: {
                usePointStyle: true
            }
        },
    },
};

export function PotensiManusia() {
    return <Pie data={data} options={options} />;
}
