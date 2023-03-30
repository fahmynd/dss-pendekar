import ReactEcharts from "echarts-for-react"

const options = {
    title: {
        text: 'Keterangan'
    },
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
        data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
    },
    series: [{
        name: 'Laki-Laki',
        type: 'bar',
        data: [18203, 23489, 29034, 104970, 131744, 630230],
        color: '#327A6D'
    },
    {
        name: 'Perempuan',
        type: 'bar',
        data: [19325, 23438, 31000, 121594, 134141, 681807],
        color: '#EA9501'
    }
    ]
}

function BalitaStuntingJumlah() {
    return (
        <ReactEcharts
            option={options}
            style={{ width: "auto", height: "500px" }}
        ></ReactEcharts>
    )
}

export default BalitaStuntingJumlah
