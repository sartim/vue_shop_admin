<template>
    <div>
        <top-header></top-header>
        <div id="main">
            <div class="wrapper">
                <left-side-nav></left-side-nav>
                <section id="content">
                    <div class="row">
                        <div class="col s12">
                            <table>
                                <table class="responsive-table striped highlight" v-if="products.items">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>CATEGORY</th>
                                        <th>QUANTITY</th>
                                        <th>CREATED DATE</th>
                                        <th>ACTION</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="product in products.items.results" :key="product.id">
                                        <td>{{product.id}}</td>
                                        <td>{{product.name}}</td>
                                        <td>{{product.category}}</td>
                                        <td>{{product.items}}</td>
                                        <td>{{product.created_date}}</td>
                                        <td>
                                            <button class="btn">Manage</button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </table>
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
        this.$store.dispatch('products/getAll');
    }
};
</script>