<template>
    <aside id="left-sidebar-nav" class="nav-expanded nav-lock nav-collapsible">
        <div class="brand-sidebar">
            <h1 class="logo-wrapper">
                <a href="#" class="brand-logo darken-1">
                    <img src="/assets/img/shop.png" alt="ADMIN"/>
                    <span class="logo-text hide-on-med-and-down">ADMIN</span>
                </a>
                <a href="#" class="navbar-toggler">
                    <i class="material-icons">radio_button_checked</i>
                </a>
            </h1>
        </div>
        <ul id="slide-out" class="side-nav fixed leftside-navigation">
            <li class="side-user-info">
                <a to="/profile">
                <img src="/assets/admin-assets/img/default_user.png"
                     class="side-user-img responsive" />
                <span class="side-user-name">{{user.user.full_name}}</span>
                </a>
            </li>
            <li class="no-padding">
                <ul class="collapsible" data-collapsible="accordion">
                    <li class="bold">
                        <a class="collapsible-header waves-effect waves-cyan">
                            <i class="material-icons">dashboard</i>
                            <span class="nav-text">Dashboard</span>
                        </a>
                        <div class="collapsible-body">
                            <ul>
                                <li class="active">
                                    <a to="/">
                                    <i class="material-icons">keyboard_arrow_right</i>
                                    <span>Orders</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="bold">
                        <a class="collapsible-header  waves-effect waves-cyan">
                            <i class="material-icons">view_comfy</i>
                            <span class="nav-text">Orders</span>
                        </a>
                        <div class="collapsible-body">
                            <ul>
                                <li>
                                    <router-link to="/order/pending">
                                    <i class="material-icons">keyboard_arrow_right</i>
                                    <span>Pending</span>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/order/in-progress">
                                    <i class="material-icons">keyboard_arrow_right</i>
                                    <span>In progress</span>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/order/delivered">
                                    <i class="material-icons">keyboard_arrow_right</i>
                                    <span>Delivered</span>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/order/all">
                                    <i class="material-icons">keyboard_arrow_right</i>
                                    <span>All</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="bold">
                        <a class="collapsible-header  waves-effect waves-cyan">
                            <i class="material-icons">view_comfy</i>
                            <span class="nav-text">Products</span>
                        </a>
                        <div class="collapsible-body">
                            <ul>
                                <li>
                                    <router-link to="/product/list">
                                    <i class="material-icons">keyboard_arrow_right</i>
                                    <span>List</span>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/product/report">
                                    <i class="material-icons">keyboard_arrow_right</i>
                                    <span>Report</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="bold">
                        <a class="collapsible-header  waves-effect waves-cyan">
                            <i class="material-icons">account_box</i>
                            <span class="nav-text">User</span>
                        </a>
                        <div class="collapsible-body">
                            <ul>
                                <li>
                                    <router-link to="/user/list">
                                    <i class="material-icons">keyboard_arrow_right</i>
                                    <span>User List</span>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/user/role">
                                    <i class="material-icons">keyboard_arrow_right</i>
                                    <span>User Roles</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </li>
            <li class="li-hover">
                <p class="ultra-small margin more-text">MORE</p>
            </li>
            <li>
                <router-link to="/profile">
                <i class="material-icons">account_circle</i>
                <span class="nav-text">Profile</span>
                </router-link>
            </li>
            <li>
                <router-link to="/settings">
                <i class="material-icons">settings</i>
                <span class="nav-text">Settings</span>
                </router-link>
            </li>
        </ul>
        <a href="#" data-target="slide-out" class="sidenav-trigger sidebar-collapse btn-floating btn-medium hide-on-large-only gradient-45deg-light-blue-cyan gradient-shadow"><i class="material-icons">menu</i></a>
    </aside>
</template>

<script>
import {Script} from "../../../_helpers/script";

export default {
    mounted() {
        Script.collapse();
    },
    computed: {
        user () {
            return this.$store.state.authentication.user;
        }
    },
    created () {

    }
};
</script>