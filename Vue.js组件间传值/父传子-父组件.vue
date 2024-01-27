<template>
    <div id="app">
        <users2 v-bind:users4="users3"></users2>
    </div>
</template>

<script>
    import Users1 from "./components/Users"

    export default {
        data() {
            return {
                users3: ["Henry", "Bucky", "Emily"]
            }
        },
        components: {
            "users2": Users1
        }
    }
</script>