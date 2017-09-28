<template>
    <div v-if="isDatalistInput" class="line">
        <input
                list="datalist-input"
                :placeholder="placeholder"
                v-bind:value="value"
                v-on:input="update($event.target.value)"
                @keyup.enter="onEnter"
                @click="onClick"
        />
        <datalist id="datalist-input" >
            <option v-for="item in datalist">{{ item }}</option>
        </datalist>
    </div>
    <div v-else :class="inputClass">
        <div></div><input
                        :type="type"
                        :placeholder="placeholder"
                        v-bind:value="value"
                        v-on:input="update($event.target.value)"
                        @keyup.enter="onEnter"
                        @click="onClick"
                    />
    </div>
</template>

<script>
    export default {
        name: "hy-input",
        data: function () {
            return {
                isDatalistInput: false
            }
        },
        props: {
            value: {
                type: [String, Number],
                default: ""
            },
            inputType: {
                type: String,
                default: ""
            },
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
            },
            datalist: {
                type: Array,
                default: function () {
                    return [];
                }
            }
        },
        mounted: function () {
            if (this.inputType === "datalist") {
                this.isDatalistInput = true;
            }
        },
        methods: {
            update: function (value) {
                this.$emit("input", value);
            },
            onEnter: function () {
                this.$emit("enter");
            },
            onClick: function () {
                this.$emit("click");
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

    .none {
        input {
            outline: none;
            border: none;
            border-radius: 10px;
            padding-left: 10px;
        }
    }
</style>