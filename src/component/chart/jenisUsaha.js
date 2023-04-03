import ReactEcharts from "echarts-for-react"

const options = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['Usaha 1', 'Usaha 2', 'Usaha 3', 'Usaha 4', 'Usaha 5', 'Usaha 6']
    },
    series: [{
        type: 'bar',
        data: [18203, 23489, 29034, 104970, 131744, 630230],
        color: '#EA9501'
    }
    ]
}

function JenisUsaha() {
    return (
        <ReactEcharts
            option={options}
            style={{ width: "auto", height: "400px" }}
        ></ReactEcharts>
    )
}

export default JenisUsaha