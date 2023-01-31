<script>
export default {
  name: 'InputChat',
  data () {
    return {
      value: ''
    }
  }
}
</script>

<template>
  <div>
    <input type="text" v-model.trim="value">
    <button :disabled="!value" @click="$emit('send', value), value = ''">send</button>
  </div>
</template>

<style scoped>
  div {
    border: 1px solid black;
    width: 200px;
    height: 20px;
    display: flex;
    gap: 14px;
  }
</style>
