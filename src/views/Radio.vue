<script>
export default {
  name: 'TheRadio',
  data () {
    return {
      to: '',
      from: '',
      radio: null
    }
  },
  methods: {
    submit () {
      if (!this.to || !this.radio) {
        this.from = 'заполните поля'
      } else {
        this.from = this.to * this.radio
      }
    }
  }
}
</script>

<template>
  <div>
    <div>
      <div>
        <input
          type="radio"
          id="contactChoice1"
          name="contact"
          @click="radio = 1"
        >
        <label for="contactChoice1">1</label>

        <input
          type="radio"
          id="contactChoice2"
          name="contact"
          @click="radio = 6"
        >
        <label for="contactChoice2">6</label>

        <input
          type="radio"
          id="contactChoice3"
          name="contact"
          @click="radio = 9"
        >
        <label for="contactChoice3">9</label>
      </div>
      <div>
        <button @click="submit">Submit</button>
      </div>
    </div>
    <input type="number" v-model="to">
    <div>From {{ from }}</div>
  </div>
</template>

<style scoped>
  input {
    margin:40px ;
    margin-left:20px;
  }
  label {
    margin-left: -30px;
  }
  input[type="number"] {
    border: 1px solid #262626;
  }
  button {
    padding: 4px 8px ;
    background: rgba(206, 26, 26, 0.536);
    border-radius: 20px;
    cursor: pointer;
  }
</style>
