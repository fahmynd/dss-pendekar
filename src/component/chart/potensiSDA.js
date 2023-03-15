import ReactEcharts from "echarts-for-react"

const options = {
    grid: { top: 20, right: 40, bottom: 20, left: 40 },
    xAxis: {
        type: "category",
        data: ["Kopi", "Peternakan", "Sawah"],
    },
    yAxis: {
        type: "value"
    },
    series: [
        {
            data: [
                {
                    value: 120,
                    itemStyle: { color: '#729FE8' },
                },
                {
                    value: 200,
                    itemStyle: { color: '#FF7723' },
                },
                {
                    value: 150,
                    itemStyle: { color: '#67C587' },
                }
            ],
            type: "bar",
            smooth: true,
            barWidth: '30%'
        }
    ],
    tooltip: {
        trigger: "axis"
    }
}

function PotensiSDA() {
    return (
        <ReactEcharts
            option={options}
            style={{ width: "auto", height: "300px" }}
        ></ReactEcharts>
    )
}

export default PotensiSDA
