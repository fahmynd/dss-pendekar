import React, { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_indonesiaLow from "@amcharts/amcharts5-geodata/indonesiaLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function MapChart() {

    useLayoutEffect(() => {

        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        const root = am5.Root.new("mapChart");


        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        // Create the map chart
        // https://www.amcharts.com/docs/v5/charts/map-chart/
        const chart = root.container.children.push(am5map.MapChart.new(root, {
            panX: "translateX",
            panY: "translateY",
            wheelY: "none",
            projection: am5map.geoMercator()
        }));


        // Create main polygon series for countries
        // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
        const polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
            geoJSON: am5geodata_indonesiaLow
        }));

        polygonSeries.mapPolygons.template.setAll({
            tooltipText: "{name}",
            toggleKey: "active",
            interactive: true
        });

        polygonSeries.mapPolygons.template.states.create("hover", {
            fill: root.interfaceColors.get("primaryButtonHover"),
            fill: am5.color(0x2EA256)
        });

        polygonSeries.mapPolygons.template.states.create("active", {
            fill: root.interfaceColors.get("primaryButtonHover"),
            fill: am5.color(0x2EA256)
        });

        let previousPolygon;

        polygonSeries.mapPolygons.template.on("active", (active, target) => {
            if (previousPolygon && previousPolygon != target) {
                previousPolygon.set("active", false);
            }
            if (target.get("active")) {
                polygonSeries.zoomToDataItem(target.dataItem);
            }
            else {
                chart.goHome();
            }
            previousPolygon = target;
        });


        // Add zoom control
        // https://www.amcharts.com/docs/v5/charts/map-chart/map-pan-zoom/#Zoom_control
        chart.set("zoomControl", am5map.ZoomControl.new(root, {}));


        // Set clicking on "water" to zoom out
        chart.chartContainer.get("background").events.on("click", () => {
            chart.goHome();
        })


        // Make stuff animate on load
        chart.appear(1000, 100);

        return () => {
            root.dispose();
        };
    }, []);

    return (
        <div id="mapChart" style={{ height: '500px' }}></div>
    );
}

export default MapChart