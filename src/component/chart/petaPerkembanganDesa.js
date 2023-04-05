import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

export const data = {
    datasets: [
        {
            label: 'Sangat Tertinggal',
            data: [{
                x: 20,
                y: 15,
                r: 10
            }, {
                x: 6,
                y: 26,
                r: 30
            }, {
                x: 7,
                y: 37,
                r: 25
            }],
            backgroundColor: 'rgba(232, 76, 48, 0.4)',
        },
        {
            label: 'Tertinggal',
            data: [{
                x: 5,
                y: 7,
                r: 10
            }, {
                x: 6,
                y: 35,
                r: 20
            }, {
                x: 7,
                y: 10,
                r: 25
            }],
            backgroundColor: 'rgba(234, 149, 1, 0.4)',
        },
        {
            label: 'Berkembang',
            data: [{
                x: 10,
                y: 7,
                r: 10
            }, {
                x: 11,
                y: 35,
                r: 20
            }, {
                x: 12,
                y: 10,
                r: 25
            }],
            backgroundColor: 'rgba(75, 125, 184, 0.4)',
        },
        {
            label: 'Maju',
            data: [{
                x: 7,
                y: 7,
                r: 10
            }, {
                x: 8,
                y: 35,
                r: 20
            }, {
                x: 9,
                y: 10,
                r: 25
            }],
            backgroundColor: 'rgba(73, 152, 65, 0.4)',
        },
        {
            label: 'Mandiri',
            data: [{
                x: 15,
                y: 7,
                r: 10
            }, {
                x: 18,
                y: 35,
                r: 20
            }, {
                x: 20,
                y: 10,
                r: 25
            }],
            backgroundColor: 'rgba(50, 122, 109, 0.4)',
        },
    ],
};

export function PetaPerkembangan() {
    return <Bubble options={options} data={data} />;
}
