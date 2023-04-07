import React, { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function AdmUmur() {
    useLayoutEffect(() => {

        let root = am5.Root.new("admUmurChart");

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
                age: "85+",
                Laki: -0.1,
                Perempuan: 0.3
            },
            {
                age: "80-54",
                Laki: -0.2,
                Perempuan: 0.3
            },
            {
                age: "75-79",
                Laki: -0.3,
                Perempuan: 0.6
            },
            {
                age: "70-74",
                Laki: -0.5,
                Perempuan: 0.8
            },
            {
                age: "65-69",
                Laki: -0.8,
                Perempuan: 1.0
            },
            {
                age: "60-64",
                Laki: -1.1,
                Perempuan: 1.3
            },
            {
                age: "55-59",
                Laki: -1.7,
                Perempuan: 1.9
            },
            {
                age: "50-54",
                Laki: -2.2,
                Perempuan: 2.5
            },
            {
                age: "45-49",
                Laki: -2.8,
                Perempuan: 3.0
            },
            {
                age: "40-44",
                Laki: -3.4,
                Perempuan: 3.6
            },
            {
                age: "35-39",
                Laki: -4.2,
                Perempuan: 4.1
            },
            {
                age: "30-34",
                Laki: -5.2,
                Perempuan: 4.8
            },
            {
                age: "25-29",
                Laki: -5.6,
                Perempuan: 5.1
            },
            {
                age: "20-24",
                Laki: -5.1,
                Perempuan: 5.1
            },
            {
                age: "15-19",
                Laki: -3.8,
                Perempuan: 3.8
            },
            {
                age: "10-14",
                Laki: -3.2,
                Perempuan: 3.4
            },
            {
                age: "5-9",
                Laki: -4.4,
                Perempuan: 4.1
            },
            {
                age: "0-4",
                Laki: -5.0,
                Perempuan: 4.8
            }
        ];

        var yAxis = chart.yAxes.push(
            am5xy.CategoryAxis.new(root, {
                categoryField: "age",
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
                    categoryYField: "age",
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
    }, []);

    return (
        <div id="admUmurChart" style={{ width: "100%", height: "400px" }}></div>
    );
}

export default AdmUmur