import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export const data = {
    labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5'],
    datasets: [
        {
            label: '# of Votes',
            data: [2, 9, 3, 5, 2],
            backgroundColor: 'rgba(232, 193, 160, 0.25)',
            borderColor: '#E8C1A0',
            borderWidth: 1,
        },
        {
            label: '# of Votes 2',
            data: [7, 2, 5, 6, 3],
            backgroundColor: 'rgba(103, 197, 135, 0.25)',
            borderColor: '#67C587',
            borderWidth: 1,
        },
    ],
};

export function LembagaKemasyarakatan() {
    return <Radar data={data} />;
}
