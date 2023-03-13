import React, { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function IdmChart() {
    useLayoutEffect(() => {

        let root = am5.Root.new("idmChart");

        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panX: false,
                panY: false,
                // wheelX: "panX",
                // wheelY: "zoomX",
                layout: root.verticalLayout
            })
        );

        // chart.set(
        //     "scrollbarX",
        //     am5.Scrollbar.new(root, {
        //         orientation: "horizontal"
        //     })
        // );

        // Define data
        let data = [
            {
                year: "2020",
                skor: 0.6925,
                info: "(Berkembang)"
            },
            {
                year: "2021",
                skor: 0.7281,
                info: "(Maju)"
            },
            {
                year: "2022",
                skor: 0.7300,
                strokeSettings: {
                    stroke: chart.get("colors").getIndex(1),
                    strokeWidth: 3,
                    strokeDasharray: [5, 5]
                },
                info: "(Maju)"
            }
        ];

        let xAxis = chart.xAxes.push(
            am5xy.CategoryAxis.new(root, {
                categoryField: "year",
                renderer: am5xy.AxisRendererX.new(root, {}),
                tooltip: am5.Tooltip.new(root, {})
            })
        );

        xAxis.data.setAll(data);

        let yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                min: 0.27,
                max: 0.92,
                strictMinMax: true,
                renderer: am5xy.AxisRendererY.new(root, {})
            })
        );

        let series1 = chart.series.push(
            am5xy.LineSeries.new(root, {
                name: "Skor IDM",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "skor",
                categoryXField: "year",
                tooltip: am5.Tooltip.new(root, {
                    pointerOrientation: "horizontal",
                    labelText: "{name} Tahun {categoryX}: {valueY} {info}"
                })
            })
        );

        series1.strokes.template.setAll({
            strokeWidth: 3,
            templateField: "strokeSettings"
        });


        series1.data.setAll(data);

        series1.bullets.push(function () {
            return am5.Bullet.new(root, {
                sprite: am5.Circle.new(root, {
                    strokeWidth: 3,
                    stroke: series1.get("stroke"),
                    radius: 5,
                    fill: root.interfaceColors.get("background")
                })
            });
        });

        series1.set("fill", am5.color("#E58B20"));
        series1.set("stroke", am5.color("#E58B20"));

        series1.appear(1000);
        chart.set("cursor", am5xy.XYCursor.new(root, {}));

        // let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        // cursor.lineY.set("visible", false);

        // Add legend
        // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
        let legend = chart.children.push(
            am5.Legend.new(root, {
                centerX: am5.p50,
                x: am5.p50
            })
        );
        legend.data.setAll(chart.series.values);

        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        chart.appear(1000, 100);
        series1.appear();

        // end am5.ready()

        return () => {
            root.dispose();
        };
    }, []);

    return (
        <div id="idmChart"></div>
    );
}

export default IdmChart