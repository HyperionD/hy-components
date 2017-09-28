import hyInput from "./input/input";
import hyFlash from "./flash/flash";
import hyContextMenu from "./context/contextmenu";

const hyVueComponents = {hyInput, hyFlash, hyContextMenu};

hyVueComponents.install = function (Vue) {};

export default hyVueComponents;