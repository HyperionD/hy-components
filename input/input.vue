<template>
    <div id="hy-input" :class="inputClass">
        <div></div><input
                        :type="type"
                        :placeholder="placeholder"
                        v-on:input="update($event.target.value)"/>
    </div>
</template>

<script>
    export default {
        name: "hyInput",
        data: function () {
            return {
                inputType: false
            }
        },
        props: {
            inputClass: {
                type: String,
                default: ""
            },
            placeholder: {
                type: String,
                defaulf: ""
            },
            type: {
                type: String,
                default: "text"
            }
        },
        mounted: function () {
            if (this.type === "password") {
                this.inputType = "password";
            }
        },
        methods: {
            update: function (value) {
                this.$emit("input", value)
            }
        }
    }
</script>

<style lang="less">
    @basecolor: #94c6e7;
    .pic-common {
        display: flex;

        div {
            width: 34px;
            height: 34px;
            background-repeat: no-repeat;
            background-color: @basecolor;
            background-position: center;
        }

        input {
            outline: none;
            border: 2px solid @basecolor;
            height: 30px;
            padding: 0;
        }
    }

    .account {
        .pic-common;

        div {
            background-image: url(./static/account.png);
        }
    }

    .password {
        .pic-common;

        div {
            background-image: url(./static/passwd.png);
        }
    }

    .line {
        input {
            outline: none;
            border: none;
            border-bottom: 1px solid @basecolor;
        }
    }

    .radius {
        input {
            outline: none;
            border: 1px solid @basecolor;
            border-radius: 10px;
            padding-left: 10px;
        }
    }
</style>