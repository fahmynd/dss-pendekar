import ReactEcharts from "echarts-for-react";
import React from "react";

class PotensiSDA extends React.Component {
  getOptions = (props) => {
    let chart_desa = [];
    props.resultData.list_desa.forEach((item, index) => {
      chart_desa[index] = item.nama_deskel;
    });
    let chart_pria = [];
    props.resultData.list_desa.forEach((item, index) => {
      chart_pria[index] = item.pria;
    });
    let chart_wanita = [];
    props.resultData.list_desa.forEach((item, index) => {
      chart_wanita[index] = item.wanita;
    });

    return {
      grid: { top: 20, right: 40, bottom: 20, left: 40 },
      xAxis: {
        type: "category",
        data: ["Kopi", "Peternakan", "Sawah"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [
            {
              value: 120,
              itemStyle: { color: "#729FE8" },
            },
            {
              value: 200,
              itemStyle: { color: "#FF7723" },
            },
            {
              value: 150,
              itemStyle: { color: "#67C587" },
            },
          ],
          type: "bar",
          smooth: true,
          barWidth: "30%",
        },
      ],
      tooltip: {
        trigger: "axis",
      },
    };
  };

  render() {
    return (
      <ReactEcharts
        option={this.getOptions(this.props)}
        style={{ width: "auto", height: "300px" }}
      ></ReactEcharts>
    );
  }
}

export default PotensiSDA;
