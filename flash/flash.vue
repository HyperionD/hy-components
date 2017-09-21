<template>
    <div id="flash" v-if="visible">
        <p :class="msgStyle" v-for="msg in message">{{ msg }}</p>
    </div>
</template>

<script>
    export default {
        name: "hy-flash",
        data: function () {
            return {
                visible: false,
                message: [],
                msgStyle: ""
            }
        },
        mounted: function () {
            this.$bus.$on("show_flash", (message, type) => {
                this.visible = true;
                if (message !== "") {
                    this.message.push(message);
                }
                this.msgStyle = type || "normal";
                setTimeout(() => {
                    this.message = [];
                    this.visible = false;
                    this.msgStyle = "";
                }, 3000);
            })
        }
    }
</script>

<style lang="less">
    #flash {
        position: absolute;
        z-index: 1000;

        p {
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            border-radius: 2px;
            background-color: #86c5f9;
            color: #fff;
            padding: 5px 10px;
            margin: 5px 10px;
        }
    }
</style>