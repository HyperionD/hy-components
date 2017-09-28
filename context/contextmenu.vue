<template>
    <div v-show="show" id="context" :style="style" @mousedown.stop>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "hy-contextmenu",
        data: function () {
            return {
                show: false,
                style: {}
            };
        },
        props: {
            el: null
        },
        mounted: function () {
            this.init();
        },
        watch: {
            el: function () {
                this.init();
            }
        },
        methods: {
            init: function () {
                if (this.el !== null) {
                    this.el.addEventListener("contextmenu", this.showMenu);
                    document.addEventListener("mousedown", this.hideMenu)
                }
            },
            showMenu: function (e) {
                this.show = true;
                this.style.left = `${e.clientX}px`;
                this.style.top = `${e.clientY}px`;
                e.preventDefault();
            },
            hideMenu: function () {
                this.show = false;
            },
            test: function () {
                console.log("click menu");
            }
        }
    }
</script>

<style>
    #context {
        position: absolute;
        cursor: pointer;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        background-color: #fff;
        padding: 10px 10px;
    }
</style>