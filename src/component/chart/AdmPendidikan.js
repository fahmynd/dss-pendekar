import React, { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function AdmPendidikan(props) {
  useLayoutEffect(() => {
    let root = am5.Root.new("admPendidikanChart");

    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        layout: root.verticalLayout,
      })
    );

    // Use only absolute numbers
    chart.getNumberFormatter().set("numberFormat", "#.#s");

    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
      })
    );
    legend.data.setAll(chart.series.values);

    var data = [
      {
        pendidikan: "Tidak/Belum Sekolah",
        "Laki-Laki": -0,
        Perempuan: props.data.tidak_blm_sekolah.perempuan,
      },
      {
        pendidikan: "Belum Tamat SD/Sederajat",
        "Laki-Laki": -0,
        Perempuan: props.data.belum_tamat_sd.perempuan,
      },
      {
        pendidikan: "Tamat SD/Sederajat",
        "Laki-Laki": -0,
        Perempuan: props.data.tamat_sd.perempuan,
      },
      {
        pendidikan: "SLTP/Sederajat",
        "Laki-Laki": -0,
        Perempuan: props.data.sltp.perempuan,
      },
      {
        pendidikan: "SLTA/Sederajat",
        "Laki-Laki": -0,
        Perempuan: props.data.slta.perempuan,
      },
      {
        pendidikan: "Diploma I/II",
        "Laki-Laki": -0,
        Perempuan: props.data.d1_dan_d2.perempuan,
      },
      {
        pendidikan: "Diploma III/Sarjana Muda",
        "Laki-Laki": -0,
        Perempuan: props.data.d3.perempuan,
      },
      {
        pendidikan: "Diploma IV/Strata I",
        "Laki-Laki": -0,
        Perempuan: props.data.s1.perempuan,
      },
      {
        pendidikan: "Strata II",
        "Laki-Laki": -0,
        Perempuan: props.data.s2.perempuan,
      },
      {
        pendidikan: "Strata III",
        "Laki-Laki": -0,
        Perempuan: props.data.s3.perempuan,
      },
    ];

    var yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "pendidikan",
        renderer: am5xy.AxisRendererY.new(root, {
          minGridDistance: 0,
          inversed: true,
          cellStartLocation: 0.1,
          cellEndLocation: 0.9,
        }),
      })
    );

    yAxis.get("renderer").labels.template.set("fontSize", "12px");
    yAxis.data.setAll(data);

    var xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {
          strokeOpacity: 0.1,
        }),
      })
    );

    xAxis.get("renderer").labels.template.set("fontSize", "12px");

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function createSeries(
      field,
      labelCenterX,
      pointerOrientation,
      rangeValue,
      fill
    ) {
      var series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          xAxis: xAxis,
          yAxis: yAxis,
          valueXField: field,
          categoryYField: "pendidikan",
          sequencedInterpolation: true,
          clustered: false,
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: pointerOrientation,
            labelText:
              "{categoryY}: {valueX} " +
              (field === "Laki-Laki" ? "Laki-Laki " : " "),
          }),
          fill: fill,
        })
      );

      series.columns.template.setAll({
        height: am5.p100,
        strokeOpacity: 0,
        fillOpacity: 1,
        fontSize: "5px",
      });

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          locationX: 1,
          locationY: 0.5,
          sprite: am5.Label.new(root, {
            centerY: am5.p50,
            text: "{valueX}",
            populateText: true,
            centerX: labelCenterX,
            fontSize: "12px",
          }),
        });
      });

      series.data.setAll(data);
      series.appear();

      var rangeDataItem = xAxis.makeDataItem({
        value: rangeValue,
      });
      xAxis.createAxisRange(rangeDataItem);
      rangeDataItem.get("grid").setAll({
        strokeOpacity: 0,
        stroke: series.get("stroke"),
      });

      var label = rangeDataItem.get("label");
      label.setAll({
        text: field,
        fontSize: "14px",
        fill: series.get("stroke"),
        paddingTop: -18,
        isMeasured: false,
        centerX: labelCenterX,
        fontWeight: "bold",
      });
      label.adapters.add("dy", function () {
        return -chart.plotContainer.height();
      });

      return series;
    }

    // createSeries("Laki-Laki", am5.p100, "right", -2, am5.color("#25A68D"));
    createSeries("Perempuan", 0, "left", -20, am5.color("#E77624"));

    // chart.set("cursor", am5xy.XYCursor.new(root, {}));
    var cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        // behavior: "zoomY"
      })
    );
    cursor.lineY.set("forceHidden", true);
    cursor.lineX.set("forceHidden", true);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [props.data]);

  return (
    <div
      id="admPendidikanChart"
      style={{ width: "100%", height: "400px" }}
    ></div>
  );
}

export default AdmPendidikan;
