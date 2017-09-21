import hyFlash from "./flash.vue";

hyFlash.install = function (Vue) {
    Vue.component(hyFlash.name, hyFlash);
    Vue.prototype.$flash = function (message, type) {
        window.flashBus.$emit("show_flash", message, type);
    }
};

export default hyFlash;