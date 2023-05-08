import React, { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function AdmPekerjaan(props) {
    useLayoutEffect(() => {

        let root = am5.Root.new("admPekerjaanChart");

        root.setThemes([am5themes_Animated.new(root)]);

        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        var chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panX: false,
                panY: false,
                layout: root.verticalLayout
            })
        );

        // Use only absolute numbers
        chart.getNumberFormatter().set("numberFormat", "#.#s");

        // Add legend
        // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
        var legend = chart.children.push(
            am5.Legend.new(root, {
                centerX: am5.p50,
                x: am5.p50
            })
        );
        legend.data.setAll(chart.series.values);

        var data = [
            {
                pekerjaan: "Belum/Tidak Bekerja",
                Laki: -0,
                Perempuan: props.data.belum_tidak_bekerja.perempuan
            },
            {
                pekerjaan: "Mengurus Rumah Tangga",
                Laki: -0,
                Perempuan: props.data.mengurus_rumah_tangga.perempuan
            },
            {
                pekerjaan: "Pelajar/Mahasiswa",
                Laki: -0,
                Perempuan: props.data.pelajar_mahasiswa.perempuan
            },
            {
                pekerjaan: "Pensiunan",
                Laki: -0,
                Perempuan: props.data.pensiunan.perempuan
            },
            {
                pekerjaan: "Perdagangan",
                Laki: -0,
                Perempuan: props.data.perdagangan.perempuan
            },
            {
                pekerjaan: "Perawat",
                Laki: -0,
                Perempuan: props.data.perawat.perempuan
            },
            {
                pekerjaan: "Nelayan/Perikanan",
                Laki: -0,
                Perempuan: props.data.nelayan.perempuan
            },
            {
                pekerjaan: "Guru",
                Laki: -0,
                Perempuan: props.data.guru.perempuan
            },
            {
                pekerjaan: "Wiraswasta",
                Laki: -0,
                Perempuan: props.data.wiraswasta.perempuan
            },
            {
                pekerjaan: "Pengacara",
                Laki: -0,
                Perempuan: props.data.pengacara.perempuan
            },
            {
                pekerjaan: "Lainnya",
                Laki: -0,
                Perempuan: props.data.lainnya.perempuan
            },
        ];

        var yAxis = chart.yAxes.push(
            am5xy.CategoryAxis.new(root, {
                categoryField: "pekerjaan",
                renderer: am5xy.AxisRendererY.new(root, {
                    minGridDistance: 0,
                    inversed: true,
                    cellStartLocation: 0.1,
                    cellEndLocation: 0.9
                })
            })
        );

        yAxis.data.setAll(data);


        var xAxis = chart.xAxes.push(
            am5xy.ValueAxis.new(root, {
                renderer: am5xy.AxisRendererX.new(root, {
                    strokeOpacity: 0.1
                })
            })
        );

        // Add series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        function createSeries(field, labelCenterX, pointerOrientation, rangeValue) {
            var series = chart.series.push(
                am5xy.ColumnSeries.new(root, {
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueXField: field,
                    categoryYField: "pekerjaan",
                    sequencedInterpolation: true,
                    clustered: false,
                    tooltip: am5.Tooltip.new(root, {
                        pointerOrientation: pointerOrientation,
                        labelText: "{categoryY}: {valueX}"
                    })
                })
            );

            series.columns.template.setAll({
                height: am5.p100,
                strokeOpacity: 0,
                fillOpacity: 1,
            });

            series.bullets.push(function () {
                return am5.Bullet.new(root, {
                    locationX: 1,
                    locationY: 0.5,
                    sprite: am5.Label.new(root, {
                        centerY: am5.p50,
                        text: "{valueX}",
                        populateText: true,
                        centerX: labelCenterX
                    })
                });
            });

            series.data.setAll(data);
            series.appear();
            // series.set("fill", am5.color("#2CA454"));
            series.set("stroke", am5.color("#000"));

            var rangeDataItem = xAxis.makeDataItem({
                value: rangeValue
            });
            xAxis.createAxisRange(rangeDataItem);
            rangeDataItem.get("grid").setAll({
                strokeOpacity: 0,
                stroke: series.get("stroke")
            });

            var label = rangeDataItem.get("label");
            label.setAll({
                text: field,
                fontSize: "1em",
                fill: series.get("stroke"),
                paddingTop: -20,
                isMeasured: false,
                centerX: labelCenterX
            });
            label.adapters.add("dy", function () {
                return -chart.plotContainer.height();
            });

            return series;
        }

        createSeries("Laki", am5.p100, "right", -2);
        createSeries("Perempuan", 0, "left", 2);

        // chart.set("cursor", am5xy.XYCursor.new(root, {}));
        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
            // behavior: "zoomY"
        }));
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
        <div id="admPekerjaanChart" style={{ width: "100%", height: "400px" }}></div>
    );
}

export default AdmPekerjaan