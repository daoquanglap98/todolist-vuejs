<template>
    <div class="todo-item">
        <div>
            <input
                type="checkbox"
                :id="todoItem.key"
                @change="markItemCompleted"
                :checked="todoItem.isDone"
                v-model="item.isDone"
            />
            <input
                class="input-edit"
                type="text"
                v-if="todoItem.isEdit"
                v-model="item.content"
            />
            <label
                v-if="!todoItem.isEdit"
                :for="todoItem.key"
                :class="{ isDone: todoItem.isDone }"
                >{{ todoItem.content }}</label
            >
        </div>
        <div class="action">
            <button
                class="btn btn-edit"
                v-if="!todoItem.isEdit"
                @click="changeStatusEdit"
            >
                Edit
            </button>
            <button
                class="btn btn-del"
                v-if="!todoItem.isEdit"
                @click="getIdDel"
            >
                Delete
            </button>
            <button
                class="btn btn-del"
                v-if="todoItem.isEdit"
                :disabled="item.content.trim().length == 0"
                @click="sendData"
            >
                Save
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "TodoItem",
    props: ["todoItem", "id"],
    data() {
        return {
            item: {
                id: this.todoItem.key,
                content: this.todoItem.content,
                isDone: this.todoItem.isDone,
                isEdit: false
            }
        }
    },
    watch: {
        todoItem: function(newVal) {
            this.item.content = newVal.content;
            this.item.id = newVal.key;
        }
    },
    methods: {
        markItemCompleted() {
            this.$emit("changeStatus", this.item)
        },
        getIdDel() {
            this.$emit("getIdDel", this.item.id)
        },
        changeStatusEdit() {
            this.$emit("changeStatusEdit", this.item.id)
        },
        sendData() {
            this.$emit("itemChange", this.item)
        }
    }
}
</script>

<style lang="scss" scoped>
.todo-item {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    .input-edit {
        padding: 10px 10px;
        outline: none;
        border-radius: 4px;
        border-width: 1px;
        font-size: 17px;
        &:focus {
            border-color: #7952b3;
            box-shadow: 0 0 0 3px rgba(121, 82, 179, 0.25);
        }
    }
    input {
        margin-right: 10px;
    }
    label {
        cursor: pointer;
        &.isDone {
            text-decoration: line-through;
            color: red;
        }
    }
    &:hover {
        background-color: rgb(196, 191, 191);
    }
    .action {
        .btn {
            float: right;
            padding: 10px 20px;
            border-radius: 5px;
            border: 1px solid #333;
            cursor: pointer;
            font-weight: bold;
            margin: 0 0 0 8px;
            &.btn-del {
                background-color: #f8d7da;
            }
            &:hover {
                background-color: lightblue;
            }
        }
    }
}
.todo-item + .todo-item {
    border-top: 1px dashed gray;
    .todo-item {
        width: 100%;
    }
}
</style>
