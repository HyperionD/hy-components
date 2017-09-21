import hyInput from "./input/input";
import hyFlash from "./flash/flash";

let hyVueComponents = {hyInput, hyFlash};

hyVueComponents.install = function (Vue) {
    Vue.component("hy-components", hyVueComponents);
};

export default hyVueComponents;