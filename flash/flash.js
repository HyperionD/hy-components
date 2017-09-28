import hyFlash from "./flash.vue";

hyFlash.install = function (Vue) {
    Vue.component(hyFlash.name, hyFlash);
    Vue.mixin({
        methods: {
            $flash: function (message, type) {
                this.$bus.$emit("flash_message", message, type);
            }
        }
    })
};

export default hyFlash;