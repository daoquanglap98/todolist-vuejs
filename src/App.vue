<template>
    <div>
        <Header />
        <TodoList @newItem="newItem = $event" />
    </div>
</template>

<script>
import Header from "./components/Header"
import TodoList from "./components/TodoList"

export default {
    name: "App",
    components: {
        Header,
        TodoList
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
* {
    font-family: "Fira Code", sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    transition: all ease 0.3s;
    box-sizing: border-box;
}
</style>
