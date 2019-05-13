<template>
    <div>
        <top-header></top-header>
        <div id="main">
            <div class="wrapper">
                <left-side-nav></left-side-nav>
                <section id="content">
                    <div class="container">
                        <div id="card-stats">
                            <div class="row">
                                <div class="col s12 m6 l2">
                                    <div class="card">
                                        <div class="card-content light-blue white-text">
                                            <p class="card-stats-title" style="font-size: 12px">Orders Today</p>
                                            <h4 class="card-stats-number">0</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col s12 m6 l2">
                                    <div class="card">
                                        <div class="card-content light-blue lighten-1 white-text">
                                            <p class="card-stats-title" style="font-size: 12px">Orders Yesterday</p>
                                            <h4 class="card-stats-number">0</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col s12 m6 l2">
                                    <div class="card">
                                        <div class="card-content light-blue white-text">
                                            <p class="card-stats-title" style="font-size: 12px">Orders This Month</p>
                                            <h4 class="card-stats-number">0</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col s12 m6 l2">
                                    <div class="card">
                                        <div class="card-content light-blue white-text">
                                            <p class="card-stats-title" style="font-size: 12px">Orders Last Month</p>
                                            <h4 class="card-stats-number">0</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col s12 m6 l2">
                                    <div class="card">
                                        <div class="card-content light-blue white-text">
                                            <p class="card-stats-title" style="fontSize: 12px">Orders This Year</p>
                                            <h4 class="card-stats-number">0</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col s12 m6 l2">
                                    <div class="card">
                                        <div class="card-content light-blue white-text">
                                            <p class="card-stats-title" style="font-size: 12px">Orders Last Year</p>
                                            <h4 class="card-stats-number">0</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="padding: 13px">
                            <div class="card-panel">
                                <div class="card-title"><h5>Daily Orders</h5></div>
                                <div class="card-content">
                                    <div class="chart" ref="chartdiv"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import LeftSideNav from '../../layouts/nav/LeftSideNav';
import TopHeader from '../../layouts/header/TopHeader';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {
    name: 'Dashboard',
    components: {
        TopHeader,
        LeftSideNav
    },
    beforeCreate() {
        document.body.style.display = "block";
        document.documentElement.style.display = "block";
        document.body.style.backgroundColor = "#f9f9f9";
    },
    mounted() {
        let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);

        chart.paddingRight = 20;

        let data = [];
        let visits = 10;
        for (let i = 1; i < 366; i++) {
            visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
            data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
        }

        chart.data = data;

        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 35;

        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "value";

        series.tooltipText = "{valueY.value}";
        chart.cursor = new am4charts.XYCursor();

        let scrollbarX = new am4charts.XYChartScrollbar();
        scrollbarX.series.push(series);
        chart.scrollbarX = scrollbarX;

        this.chart = chart;
    },
    beforeDestroy() {
        if (this.chart) {
            this.chart.dispose();
        }
    }
};
</script>

<style scoped>
    .chart {
        width: 100%;
        height: 500px;
    }
</style>