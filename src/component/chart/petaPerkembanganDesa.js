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

export function PetaPerkembangan(props) {
    let points = {
        'SANGAT TERTINGGAL': [],
        'TERTINGGAL': [],
        'BERKEMBANG': [],
        'MAJU': [],
        'MANDIRI': [],
    };

    props.resultData.data.list_desa.map((item, index) => {
        points[item.current_status].push({
            x: item.capaian.idm,
            y: item.capaian.sdgs,
            r: 10,
        })
    })

    const data = {
        datasets: [
            {
                label: 'SANGAT TERTINGGAL',
                data: points['SANGAT TERTINGGAL'],
                backgroundColor: 'rgba(232, 76, 48, 0.4)',
            },
            {
                label: 'TERTINGGAL',
                data: points['TERTINGGAL'],
                backgroundColor: 'rgba(234, 149, 1, 0.4)',
            },
            {
                label: 'BERKEMBANG',
                data: points['BERKEMBANG'],
                backgroundColor: 'rgba(75, 125, 184, 0.4)',
            },
            {
                label: 'MAJU',
                data: points['MAJU'],
                backgroundColor: 'rgba(73, 152, 65, 0.4)',
            },
            {
                label: 'MANDIRI',
                data: points['MANDIRI'],
                backgroundColor: 'rgba(50, 122, 109, 0.4)',
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                display: true,
                position: "top",
                labels: {
                    usePointStyle: true
                }
            },
        },
    };

    return <Bubble data={data} options={options} />;
}
