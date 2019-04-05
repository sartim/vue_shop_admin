<template>
    <div>
        <h1>Hi {{user.firstName}}!</h1>
    </div>
</template>

<script>
export default {
    computed: {
        user () {
            return this.$store.state.authentication.user;
        }
    },
    created () {

    }
};
</script>