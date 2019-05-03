<template>
    <div>
        <top-header></top-header>
        <div id="main">
            <div class="wrapper">
                <left-side-nav></left-side-nav>
                <section id="content">
                    <div class="container">
                        <h1>Dashboard</h1>
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