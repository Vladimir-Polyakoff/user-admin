<script>
export default {
  name: 'ToggleValidButton',
  props: {
    buttonTitle: {
      type: String,
      required: true
    },
    background: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
<div>
  <button
    :style="'background: ' + background"
    @click="$emit('toggle')"
  >
    {{ buttonTitle }}
  </button>
</div>
</template>

<style scoped>
  button {
    width: 200px;
    padding: 10px;
    border: 2px solid black;
    border-radius:10px;
    color: white;
    font-size: 24px;
    font-weight: 530;
    letter-spacing: 2px;
    cursor: pointer;
    border: none;
  }
</style>
