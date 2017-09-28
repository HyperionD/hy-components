import hyContextMenu from "./contextmenu.vue";

hyContextMenu.install = function (Vue) {
    Vue.component(hyContextMenu.name, hyContextMenu);
};

export default hyContextMenu;