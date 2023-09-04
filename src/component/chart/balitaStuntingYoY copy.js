import React from "react";
import ReactEcharts from "echarts-for-react";

const BalitaYoY = (props) => {
  const options = () => {
    let chart_tahun = [];
    props.resultData.data.stunting.forEach((item, index) => {
      chart_tahun[index] = item.tahun;
    });
    let chart_jumlah = [];
    props.resultData.data.stunting.forEach((item, index) => {
      chart_jumlah[index] = item.jml_stunting;
    });
    let chart_persen = [];
    props.resultData.data.stunting.forEach((item, index) => {
      chart_persen[index] = item.persen_stunting;
    });

    return {
      title: {
        text: "Keterangan:",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "none",
          crossStyle: {
            color: "#999",
          },
        },
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
        right: 60,
      },
      legend: {
        orient: "horizontal",
        left: 150,
        top: 2,
        textStyle: {
          fontSize: 13,
          fontWeight: "bold",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
        // tooltip: {
        //     trigger: "item"
        // }
      },
      xAxis: [
        {
          type: "category",
          data: chart_tahun,
          axisPointer: {
            type: "shadow",
          },
          axisTick: {
            show: false,
          },
          axisLine: {
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
      ],
      yAxis: [
        {
          type: "value",
          name: "JUMLAH BALITA STUNTING",
          nameLocation: "center",
          nameGap: 40,
          nameTextStyle: {
            fontWeight: "bold",
          },
          boundaryGap: [0, 5],
          // min: 0,
          // max: 500,
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
            },
          },
        },
        {
          type: "value",
          name: "PERSENTASE BALITA STUNTING",
          nameLocation: "center",
          nameGap: 40,
          nameTextStyle: {
            fontWeight: "bold",
          },
          boundaryGap: [0, 3],
          // min: 0,
          // max: 5,
          axisLabel: {
            formatter: "{value}%",
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
            },
          },
        },
      ],
      series: [
        {
          name: "Jumlah Balita Stunting",
          type: "bar",
          data: chart_jumlah,
          color: "#2CA454",
          itemStyle: {
            borderRadius: [5, 5, 0, 0],
          },
          cursor: "auto",
        },
        {
          name: "Persentase",
          type: "line",
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value) {
              return value + "%";
            },
          },
          symbolSize: 10,
          data: chart_persen,
          color: "#E58B20",
          cursor: "auto",
        },
      ],
    };
  };

  return (
    <ReactEcharts
      option={options(props)}
      style={{ width: "auto", height: "100%" }}
    ></ReactEcharts>
  );
};

export default BalitaYoY;
