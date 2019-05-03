<template>
    <header id="header" class="page-topbar">
        <div class="navbar-fixed">
            <nav class="navbar-color">
                <div class="nav-wrapper">
                    <div class="header-search-wrapper hide-on-med-and-down sideNav-lock">
                        <i class="material-icons">search</i>
                        <form onSubmit={this.search}>
                            <input type="text" class="header-search-input z-depth-2" placeholder="Search anything"
                                   value=""/>
                        </form>
                    </div>
                    <ul class="right hide-on-med-and-down">
                        <li>
                            <a href="javascript:void(0);" class="dropdown-trigger" data-target="notifications-dropdown">
                                <i class="material-icons">notifications_none
                                    <small class="notification-badge">5</small>
                                </i>
                            </a>
                            <ul id="notifications-dropdown" class="dropdown-content">
                                <li>
                                    <h6>NOTIFICATIONS
                                        <span class="new badge">5</span>
                                    </h6>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a href="#!" class="grey-text text-darken-2">
                                        <span class="material-icons icon-bg-circle cyan small">add_shopping_cart</span> A new article has been posted!</a>
                                    <time class="media-meta" dateTime="2015-06-12T20:50:48+08:00">2 hours ago</time>
                                </li>
                                <li>
                                    <a href="#!" class="grey-text text-darken-2">
                                        <span class="material-icons icon-bg-circle red small">stars</span> Completed the task</a>
                                    <time class="media-meta" dateTime="2015-06-12T20:50:48+08:00">3 days ago</time>
                                </li>
                                <li>
                                    <a href="#!" class="grey-text text-darken-2">
                                        <span class="material-icons icon-bg-circle teal small">settings</span> Settings updated</a>
                                    <time class="media-meta" dateTime="2015-06-12T20:50:48+08:00">4 days ago</time>
                                </li>
                                <li>
                                    <a href="#!" class="grey-text text-darken-2">
                                        <span class="material-icons icon-bg-circle deep-orange small">today</span> Director meeting started</a>
                                    <time class="media-meta" dateTime="2015-06-12T20:50:48+08:00">6 days ago</time>
                                </li>
                                <li>
                                    <a href="#!" class="grey-text text-darken-2">
                                        <span class="material-icons icon-bg-circle amber small">trending_up</span> Generate monthly report</a>
                                    <time class="media-meta" dateTime="2015-06-12T20:50:48+08:00">1 week ago</time>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-trigger"
                               data-target="profile-dropdown">
                      <span class="avatar-status avatar-online">
                        <img src="/assets/admin-assets/img/default_user.png"
                             class="img center responsive"/>
                      </span>
                            </a>
                            <ul id="profile-dropdown" class="dropdown-content drop-down">
                                <li>
                                    <a href="#" class="grey-text text-darken-1">
                                        <i class="material-icons">face</i> Profile</a>
                                </li>
                                <li>
                                    <a href="#" class="grey-text text-darken-1">
                                        <i class="material-icons">settings</i> </a>
                                </li>
                                <li>
                                    <a href="#" class="grey-text text-darken-1">
                                        <i class="material-icons">live_help</i> Help</a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a href="#" class="grey-text text-darken-1">
                                        <i class="material-icons">lock_outline</i> Lock</a>
                                </li>
                                <li>
                                    <router-link class="grey-text text-darken-1" to="/login"><i
                                        class="material-icons">keyboard_tab</i>Logout</router-link>

                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0);" data-target="slide-out" class="sidenav-trigger chat-collapse">
                                <i class="material-icons">format_indent_increase</i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
import {Script} from "../../../_helpers/script";

export default {
    mounted() {
        Script.toggle();
    },
    computed: {

    },
    created () {

    }
};
</script>