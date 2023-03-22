<script>
export default {
  name: 'ToggleValidField',
  props: {
    value: {
      type: String,
      required: true
    },
    error: {
      type: String,
      required: false
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (v) {
        this.$emit('input', v)
      }
    }
  }
}
</script>

<template>
  <div :class="error && 'error'">
    <input v-model="model">
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<style scoped>
  input {
    width: 200px;
    padding: 10px;
    border: 1px solid black
  }
  .error input{
    margin-bottom: 4px;
    border: 3px solid red;
    border-radius: 10px;
  }
  .error div {
    font-size: 12px;
    color: red;
  }
</style>
