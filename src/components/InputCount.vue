<script>
export default {
  name: 'InputCount',
  props: {
    buttonTitle: {
      type: String,
      required: false,
      default: 'Обновить'
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    }
  },
  data () {
    return {
      number: null
    }
  },
  methods: {
    emitCount (event) {
      this.$emit('setUserCount', event.target.value.trim())
    },
    reset () {
      this.number = null
    }
  }
}
</script>

<template>
  <div>
    <!-- <input type="number" @blur="emitCount($event)"> -->
    <input :type="type" v-model="number">
    <button @click="$emit('setUserCount', number)">{{ buttonTitle }}</button>
  </div>
</template>

<style scoped>
  div {
    display: flex;
    gap: 10px;
  }
  input {
    display: flex;
    align-items: center;
    padding-left: 20px;
    width: 150px;
    height: 34px;
    border: 1px solid black;
  }
  button {
    padding: 4px 10px;
    height: 34px;
    border: 1px solid black;
  }
</style>
