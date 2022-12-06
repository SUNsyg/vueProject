<template>
  <div>
    <div class="inputBox">
      <input
              v-model="text"
              type="text"
      />
      <button
              @click="add"
      >新建</button>
    </div>
    <div class="listItem">
      <list-item :listData="list" @changeText="edit" @delText="delText" @saveText="save"></list-item>
    </div>
  </div>
</template>

<script>
  import ListItem from './ListItem'
  export default {
    name: "TodoList.vue",
    components: {
      ListItem
    },
    data() {
      return {
        text: '',
        list: [
          {
            id: 1,
            text: 'dqwdqwd',
            status: 1, // 0编辑，1其他
          }
        ]
      }
    },
    methods: {
      add() {
        if (!this.text) {
          return;
        }
        let obj = {
          id: parseInt(Math.random()*10000+1),
          text: this.text,
          status: 1
        };
        this.list.push(obj);
        this.text = "";
      },
      edit(data) {
        this.list.forEach((item) => {
          if (item.id === data.id) {
            item.status = 0;
          }
        });
      },
      delText(data) {
        const index = this.list.findIndex((item) => {
          return item.id === data.id
        });
        this.list.splice(index, 1);
      },
      save(data) {
        this.list.forEach((item) => {
          if (item.id === data.id) {
            item.text = data.val;
            item.status = 1;
          }
        });
      }
    }
  }
</script>

<style scoped>
  .inputBox {
    border: 1px solid black;
    padding: 10px;
    box-sizing: border-box;
  }
  input,
  input:focus
  {
    border: 1px solid black;
  }
  .listItem {
    border: 1px solid black;
    padding: 10px 10px 0 10px;
    box-sizing: border-box;
  }
</style>
