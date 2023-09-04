import React, { useMemo } from "react";
import ReactEcharts from "echarts-for-react";
import { rupiah } from "../../utils/helper.min";

const AnggaranDesa = (props) => {
  const { list_kecamatan } = props.resultData;

  const dataChart = useMemo(() => {
    const sortedData = list_kecamatan.map((desa) => ({
      nama_kec: desa.nama_kecamatan,
      anggaran: desa.anggaran_2021,
      anggaran2: desa.anggaran_2022,
      anggaran3: desa.anggaran_2023,
    }));

    sortedData.sort((a, b) => b.anggaran - a.anggaran);

    return sortedData;
  }, [list_kecamatan]);

  const options = useMemo(() => {
    const chart_kecamatan = dataChart.map((item) => item.nama_kec);
    const chart_anggaran = dataChart.map((item) => item.anggaran);
    const chart_anggaran2 = dataChart.map((item) => item.anggaran2);
    const chart_anggaran3 = dataChart.map((item) => item.anggaran3);

    return {
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
        bottom: "-5",
      },
      grid: {
        top: 40,
        right: 40,
        bottom: 60,
        left: 100,
      },
      xAxis: {
        type: "category",
        data: chart_kecamatan,
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
          },
        },
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
      series: [
        {
          name: "Data Tahun 2021",
          type: "bar",
          data: chart_anggaran,
          color: "#9AD295",
          tooltip: {
            valueFormatter: (value) => rupiah(value),
          },
          label: {
            show: false,
            position: "top",
          },
          itemStyle: {
            borderRadius: [5, 5, 0, 0],
          },
          cursor: "auto",
        },
        {
          name: "Data Tahun 2022",
          type: "bar",
          data: chart_anggaran2,
          color: "#499841",
          tooltip: {
            valueFormatter: (value) => rupiah(value),
          },
          label: {
            show: false,
            position: "top",
          },
          itemStyle: {
            borderRadius: [5, 5, 0, 0],
          },
          cursor: "auto",
        },
        {
          name: "Data Tahun 2023",
          type: "bar",
          data: chart_anggaran3,
          color: "#327A6D",
          tooltip: {
            valueFormatter: (value) => rupiah(value),
          },
          label: {
            show: false,
            position: "top",
          },
          itemStyle: {
            borderRadius: [5, 5, 0, 0],
          },
          cursor: "auto",
        },
      ],
      // tooltip: {
      //     trigger: "axis",
      // },
    };
  }, [dataChart]);

  return (
    <ReactEcharts option={options} style={{ width: "auto", height: "500px" }} />
  );
};

export default AnggaranDesa;
