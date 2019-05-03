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
                        <div class="row" style="background: #FFFFFF; padding: 0px">
                        <div id="chartdiv" style="width: 100%; height: 500px"></div>
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

export default {
    beforeCreate() {
        document.body.style.display = "block";
        document.documentElement.style.display = "block";
        document.body.style.backgroundColor = "#f9f9f9";
    },
    components: {
        TopHeader,
        LeftSideNav
    }
};
</script>