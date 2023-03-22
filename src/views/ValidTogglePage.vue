<script>
import Field from '@/components/ToggleValidField'
import ValidButton from '@/components/ToggleValidButton'

export default {
  name: 'ValidTogglePage',
  components: {
    Field,
    ValidButton
  },
  data () {
    return {
      buttonTitle: 'on',
      inputValue: '',
      inputError: ''
    }
  },
  computed: {
    buttonBackground () {
      return this.buttonTitle === 'on' ? 'green' : 'red'
    }
  },
  watch: {
    inputValue (v) {
      this.buttonTitle === 'on' && this.validInputValue(5, 3)
    }
  },
  methods: {
    toggleButton () {
      if (this.buttonTitle === 'off') {
        this.buttonTitle = 'on'
        this.validInputValue(5, 3)
      } else {
        this.buttonTitle = 'off'
        this.inputError = ''
      }
    },
    validInputValue (max, min) {
      if (this.inputValue.length > max) {
        this.inputError = 'максимальня длина: ' + max
      } else if (this.inputValue.length < min) {
        this.inputError = 'минимальная длина: ' + min
      } else {
        this.inputError = ''
      }
    }
  }
}
</script>

<template>
  <div>
    <field v-model="inputValue" :error="inputError"></field>
    <valid-button
      :buttonTitle="buttonTitle"
      :background="buttonBackground"
      @toggle="toggleButton"
    ></valid-button>
  </div>
</template>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
</style>
