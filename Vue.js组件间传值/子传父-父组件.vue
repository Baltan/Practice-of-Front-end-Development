<template>
    <div id="app">
        <app-header v-on:event1="updateTitle"></app-header>
        <h2>{{title}}</h2>
    </div>
</template>

<script>
    import Header from "./components/Header"
    export default {
        data() {
            return {
                title: "传递的是一个值"
            }
        },
        methods: {
            updateTitle(obj) {
                { arg1, arg2, arg3 } = JSON.parse(obj)
                this.title = arg1;
            }
        },
        components: {
            "app-header": Header,
        }
    }
</script>