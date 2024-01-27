<template>
    <div class="hello">
        <ul>
            <li v-for="user in users4">{{user}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            users4: []
        }
    }
</script>