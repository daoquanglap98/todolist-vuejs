<template>
    <div>
        <AddItem @newItem="addNewItem" />
        <TodoItem
            v-for="(todo, index) in todos"
            :key="index"
            :todoItem="todo"
            @changeStatus="markCompleted"
            @getIdDel="delItem"
            @changeStatusEdit="changeStatusEdit"
            @itemChange="saveItem"
        />
    </div>
</template>

<script>
import TodoItem from "./TodoItem"
import AddItem from "./AddItem"
import firebaseServices from "../firebaseServices"

export default {
    name: "TodoList",
    components: {
        TodoItem,
        AddItem
    },
    data() {
        return {
            todos: []
        }
    },
    props: ["newItem"],
    mounted() {
        firebaseServices.getAll().on("value", this.getAllData)
    },
    methods: {
        getAllData(items) {
            let _todos = []

            items.forEach(item => {
                let key = item.key
                let data = item.val()
                _todos.push({
                    key: key,
                    content: data.content,
                    isDone: data.isDone,
                    isEdit: false
                })
            })
            this.todos = _todos;
        },
        markCompleted(item) {
            var obj = {
                content: item.content,
                isDone: item.isDone,
            };
            this.todos.map(element => {
                if(element.key == item.id){
                    element.isDone = item.isDone;
                }
                return element;
            })
            firebaseServices
                .update(item.id ,obj)
                .then(() => {
                    console.log("Updated successfully!")
                })
                .catch(e => {
                    console.log(e)
                })
        },
        delItem(id) {
            firebaseServices.delete(id).then(()=> {
                console.log("Deleted successfully");
            })
            .catch(e=>{
                console.log(e);
            })
            firebaseServices.getAll().on("value", this.getAllData);
        },
        changeStatusEdit(id) {
            this.todos.map(element => {
                if(element.key == id){
                    element.isEdit = true;
                }else{
                    element.isEdit = false;
                }
                return element;
            })
        },
        saveItem(item) {
            var obj = {
                content: item.content,
                isDone: item.isDone,
            };
            this.todos.map(element => {
                element.isEdit = false;
                return element;
            })
            firebaseServices
                .update(item.id ,obj)
                .then(() => {
                    console.log("Updated successfully!")
                })
                .catch(e => {
                    console.log("Error" + e);
                })
            firebaseServices.getAll().on("value", this.getAllData);
        },
        addNewItem(obj) {
            firebaseServices
                .create(obj)
                .then(() => {
                    console.log("Created successfully!")
                })
                .catch(e => {
                    console.log("Error" + e)
                })
        }
    }
}
</script>

<style lang="scss" scoped></style>
