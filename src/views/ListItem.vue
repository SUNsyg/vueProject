<template>
  <div>
    <div
      v-for="item in list"
      :key="item.id"
      class="item"
    >
      <div v-if="item.status === 0">
        <p>
          <input
              type="text"
              v-model="text"
          />
        </p>
        <button  @click="save(item)">保存</button>
        <button  @click="cancel(item)">取消</button>
      </div>
      <div v-else>
        <p>{{item.text}}</p>
        <button @click="edit(item)">编辑</button>
        <button @click="del(item)">删除</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ListItem.vue",
    props: {
      listData: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    data() {
      return {
        list: [],
        text: ''
      }
    },
    watch: {
      listData: {
        handler(n) {
          console.log(n)
          this.list = n;
        },
        deep: true,
        immediate: true
      }
    },
    methods: {
      edit(data) {
        console.log(data)
        this.text = data.text;
        this.$emit('changeText', data)
      },
      del(data) {
        this.$emit('delText', data)
      },
      save(data) {
        const obj = {}
        Object.assign(obj, data, {
          val: this.text
        })
        this.$emit('saveText', obj)
      },
      cancel(data) {
        console.log(data)
        data.status = 1;
      }
    }
  }
</script>

<style scoped>
  input,
  input:focus
  {
    border: 1px solid black;
  }
  .item {
    margin-bottom: 10px;
  }
</style>
