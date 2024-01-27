<template>
    <header>
        <h1 @click="changeTitle">{{title}}</h1>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                title: "Vue.js Demo"
            }
        },
        methods: {
            changeTitle() {
                this.$emit("event1", JSON.stringify({ arg1: "arg1", arg2: "arg2", arg3: "arg3" }));
            }
        }
    }
</script>