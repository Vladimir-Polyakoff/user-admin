<script>
export default {
  name: 'TheInput',
  data () {
    return {
      value: '',
      error: ''
    }
  },
  methods: {
    getValue () {
      if (this.isValidValue()) {
        return this.value
      }
    },
    isValidValue () {
      this.error = ''

      if (!this.value) {
        this.error = 'Небходимо заполнить поле'
        return false
      }
      return true
    },
    reset () {
      this.value = ''
      this.error = ''
    }
  }
}
</script>

<template>
  <div>
    <input type="text" v-model.trim="value">
    <div class="error-input" v-if="error.length"> {{ error }}</div>
  </div>
</template>

<style scoped>
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
  .error-input {
    color: red;
    font-size: 12px;
    /* text-decoration: 1px dashed red !important; */
    border-bottom: 1px dashed red;
    display: inline-block;
  }
</style>
