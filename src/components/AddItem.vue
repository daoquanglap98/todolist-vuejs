<template>
    <div class="add-item">
        <input type="text" name="" id="" v-model="contentNewItem" />
        <button
            class="btn-add"
            :disabled="contentNewItem.trim().length == 0"
            @click="addItem"
        >
            Add Item
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contentNewItem: ""
        }
    },
    methods: {
        addItem() {
            var newItem = {
                content: this.contentNewItem,
                isDone: false,
            }
            this.$emit("newItem", newItem)
            this.contentNewItem = ""
        }
    }
}
</script>

<style lang="scss">
.add-item {
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    border: 1px solid gray;
    input {
        flex: 1;
        border: none;
        outline: none;
        padding-left: 20px;
        font-size: 17px;
    }
    .btn-add {
        padding: 15px 20px;
        border: none;
        outline: none;
        cursor: pointer;
        border-left: 1px solid gray;
        &:hover {
            background-color: rgb(23, 168, 221);
        }
    }
}
</style>
