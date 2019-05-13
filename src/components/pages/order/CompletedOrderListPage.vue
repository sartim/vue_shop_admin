<template>
    <div>
        <top-header></top-header>
        <div id="main">
            <div class="wrapper">
                <left-side-nav></left-side-nav>
                <section id="content">
                    <div class="row">
                        <div class="col s12">

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
    components: {
        TopHeader,
        LeftSideNav
    },
    computed: {
        products () {
            return this.$store.state.products.all;
        }
    },
    beforeCreate() {
        document.body.style.display = "block";
        document.documentElement.style.display = "block";
        document.body.style.backgroundColor = "#f9f9f9";
    },
    created () {
        this.$store.dispatch('orders/getAll');
    }
};
</script>