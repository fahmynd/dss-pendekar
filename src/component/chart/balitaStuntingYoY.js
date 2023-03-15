import React, { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function BalitaYoY() {
    useLayoutEffect(() => {

        let root = am5.Root.new("balitaYoYChart");

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

        // Add scrollbar
        // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
        // chart.set(
        //   "scrollbarX",
        //   am5.Scrollbar.new(root, {
        //     orientation: "horizontal"
        //   })
        // );

        var data = [
            {
                year: "2013",
                income: 19.5,
                expenses: 22.1
            },
            {
                year: "2014",
                income: 20.5,
                expenses: 23.1
            },
            {
                year: "2015",
                income: 21.5,
                expenses: 24.1
            },
            {
                year: "2016",
                income: 22.5,
                expenses: 21.1
            },
            {
                year: "2017",
                income: 26.2,
                expenses: 30.5
            },
            {
                year: "2018",
                income: 30.1,
                expenses: 34.9
            },
            {
                year: "2019",
                income: 29.5,
                expenses: 31.1
            },
            {
                year: "2020",
                income: 30.6,
                expenses: 28.2,
                strokeSettings: {
                    stroke: chart.get("colors").getIndex(1),
                    strokeWidth: 3,
                    strokeDasharray: [5, 5]
                }
            }
        ];

        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        var xRenderer = am5xy.AxisRendererX.new(root, {});
        var xAxis = chart.xAxes.push(
            am5xy.CategoryAxis.new(root, {
                categoryField: "year",
                renderer: xRenderer,
                tooltip: am5.Tooltip.new(root, {})
            })
        );
        xRenderer.grid.template.setAll({
            location: 1
        })

        xAxis.data.setAll(data);

        var yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                min: 0,
                extraMax: 0.1,
                renderer: am5xy.AxisRendererY.new(root, {
                    strokeOpacity: 0.1
                })
            })
        );


        // Add series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/

        var series1 = chart.series.push(
            am5xy.ColumnSeries.new(root, {
                name: "Income",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "income",
                categoryXField: "year",
                tooltip: am5.Tooltip.new(root, {
                    pointerOrientation: "horizontal",
                    labelText: "{name} in {categoryX}: {valueY} {info}"
                })
            })
        );

        series1.columns.template.setAll({
            tooltipY: am5.percent(10),
            templateField: "columnSettings",
            width: 50,
            cornerRadiusTL: 5,
            cornerRadiusTR: 5
        });

        series1.data.setAll(data);
        series1.set("fill", am5.color("#2CA454"));
        series1.set("stroke", am5.color("#2CA454"));

        var series2 = chart.series.push(
            am5xy.LineSeries.new(root, {
                name: "Expenses",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "expenses",
                categoryXField: "year",
                tooltip: am5.Tooltip.new(root, {
                    pointerOrientation: "horizontal",
                    labelText: "{name} in {categoryX}: {valueY} {info}"
                })
            })
        );

        series2.strokes.template.setAll({
            strokeWidth: 3,
            templateField: "strokeSettings"
        });


        series2.data.setAll(data);
        series2.set("fill", am5.color("#E58B20"));
        series2.set("stroke", am5.color("#E58B20"));

        series2.bullets.push(function () {
            return am5.Bullet.new(root, {
                sprite: am5.Circle.new(root, {
                    strokeWidth: 3,
                    stroke: series2.get("stroke"),
                    radius: 5,
                    fill: root.interfaceColors.get("background")
                })
            });
        });

        chart.set("cursor", am5xy.XYCursor.new(root, {}));

        // Add legend
        // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
        var legend = chart.children.push(
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

        return () => {
            root.dispose();
        };
    }, []);

    return (
        <div id="balitaYoYChart" style={{ width: "100%", height: "500px" }}></div>
    );
}

export default BalitaYoY