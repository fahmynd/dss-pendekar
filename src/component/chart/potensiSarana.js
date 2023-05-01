import ReactEcharts from "echarts-for-react"



function PotensiSarana(props) {
    
    const {data} = props
    
    const options = {
        grid: { top: 20, right: 40, bottom: 20, left: 40 },
        xAxis: {
            type: "category",
            data: ["Ibadah", "Sekolah", "Umum"],
        },
        yAxis: {
            type: "value"
        },
        series: [
            {
                data: [
                    {
                        value: data?.ibadah,
                        itemStyle: { color: '#729FE8' },
                    },
                    {
                        value: data?.sekolah,
                        itemStyle: { color: '#FF7723' },
                    },
                    {
                        value: data?.umum,
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

    return (
        <ReactEcharts
            option={options}
            style={{ width: "auto", height: "300px" }}
        ></ReactEcharts>
    )
}

export default PotensiSarana
