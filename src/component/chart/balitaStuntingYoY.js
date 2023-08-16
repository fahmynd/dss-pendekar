import React from "react";
import ReactECharts from "echarts-for-react";
import { formatAngka } from "../../utils/helper.min";

const BalitaYoY = (props) => {
    const { stunting } = props.resultData.data;

    const legendData = stunting.map((item) => `Data Tahun ${item.tahun}`);

    const chartOptions = {
        title: {
            show: false,
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
        },
        legend: {
            data: legendData,
            bottom: "-5",
        },
        grid: {
            top: 40,
            right: 20,
            bottom: 60,
            left: 45,
        },
        xAxis: {
            type: "category",
            // data: ["Keluarga Sasaran", "Berisiko", "Baduta", "Balita", "Pasangan Usia Subur (PUS)", "PUS Hamil"],
            data: [
                {
                    value: "Keluarga Sasaran",
                    textStyle: {
                        fontSize: 9,
                        fontWeight: "bold",
                    }
                },
                {
                    value: "Berisiko",
                    textStyle: {
                        fontSize: 9,
                        fontWeight: "bold",
                    }
                },
                {
                    value: "Baduta",
                    textStyle: {
                        fontSize: 9,
                        fontWeight: "bold",
                    }
                },
                {
                    value: "Balita",
                    textStyle: {
                        fontSize: 9,
                        fontWeight: "bold",
                    }
                },
                {
                    value: "PUS",
                    textStyle: {
                        fontSize: 9,
                        fontWeight: "bold",
                    }
                },
                {
                    value: "PUS Hamil",
                    textStyle: {
                        fontSize: 9,
                        fontWeight: "bold",
                    }
                },
            ],
            splitLine: {
                show: true,
                lineStyle: {
                    type: "dashed",
                },
            },
            boundaryGap: true
        },
        yAxis: {
            type: "value",
            min: 0,
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 0,
                    type: "dashed",
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: "dashed",
                },
            },
        },
        series: stunting.map((item) => ({
            name: `Data Tahun ${item.tahun}`,
            type: "bar",
            data: [
                item.keluarga_sasaran,
                item.berisiko,
                item.kk_memiliki_baduta,
                item.kk_memiliki_balita,
                item.kk_memiliki_pus,
                item.kk_memiliki_pushamil
            ],
            label: {
                show: true,
                formatter: function (params) {
                    return formatAngka(params.value);
                },
                position: "top",
            },
            itemStyle: {
                borderRadius: [5, 5, 0, 0],
            },
            cursor: "auto",
        })),
        // dataZoom: [
        //     {
        //         type: "inside", // Use a slider dataZoom component
        //         show: false,
        //         xAxisIndex: [0], // Link to the first xAxis
        //         start: 0, // Initial zoom start position (percentage)
        //         end: 100, // Initial zoom end position (percentage)
        //     },
        // ],
    };

    return (
        <ReactECharts
            option={chartOptions}
            style={{ width: "100%", height: "500px" }}
        />
    );
};

export default BalitaYoY;
