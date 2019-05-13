import * as M from "../../assets/admin-assets/js/materialize.min";

export const Script = {
    autocomplete,
    fab,
    collapse,
    toggle,
    modal,
    select,
    toggleLeftSideNav,
    maximizeSideNav,
    tabs
};



function autocomplete() {
    let elems = document.querySelectorAll('.autocomplete');
    let options = {
        data: {
            "Apple": null,
            "Microsoft": null,
            "Google": 'https://placehold.it/250x250'
        }
    };
    let instances = M.Autocomplete.init(elems, options);
}

function fab () {
    let elems = document.querySelectorAll('.fixed-action-btn');
    let options = {};
    let instances = M.FloatingActionButton.init(elems, options);
}

function collapse() {
    let elems = document.querySelectorAll('.collapsible');
    let options = {};
    let instances = M.Collapsible.init(elems, options);
}

function toggle() {
    let elems = document.querySelectorAll('.dropdown-trigger');
    let options = {};
    let instances = M.Dropdown.init(elems, options);
}

function modal() {
    let elems = document.querySelectorAll('.modal');
    let options = {};
    let instances = M.Modal.init(elems, options);
}

function select() {
    let elems = document.querySelectorAll('select');
    let options = {};
    let instances = M.FormSelect.init(elems, options);
}

function toggleLeftSideNav () {
    let elems = document.querySelectorAll('.side-nav');
    let options = {};
    let instances = M.Sidenav.init(elems, options);
}

function toggRightSideNav () {
    console.log("toggRightSideNav")
    let elems = document.querySelectorAll('.sidenav');

    let options = {
        edge: 'right'
    };
    let instances = M.Sidenav.init(elems, options);
}

function maximizeSideNav(e) {
    // e.preventDefault();
    // document.getElementById('left-sidebar-nav').classList.toggle('nav-expanded');
}

function minimizeSideNav(e) {
    e.preventDefault();
    document.getElementById('left-sidebar-nav').classList.toggle('nav-collapsed');
    document.getElementById('main').classList.toggle('main-full');
}

function tabs() {
    let elems = document.querySelectorAll('.tabs');
    let options = {};
    let instance = M.Tabs.init(elems, options);
}
