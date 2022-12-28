<template>
  <div>
    <Dropdawn
    :list="list"
    ref="Dropdawn"
    />
    <Input
    ref="Input"
    />
    <button @click="replace">Заменить</button>
  </div>
</template>

<script>
import Dropdawn from '@/components/Dropdawn'
import Input from '@/components/Input'

export default {
  name: 'ChangeAll',
  components: {
    Dropdawn,
    Input
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    replace () {
      const key = this.$refs.Dropdawn.getValue()
      const value = this.$refs.Input.getValue()

      key && value &&
        this.$emit('changeValueByKey', { key, value })
    },
    reset () {
      this.$refs.Dropdawn.reset()
      this.$refs.Input.reset()
    }
  }
}
</script>

<style scoped>
  button {
    padding: 4px 10px;
    height: 34px;
    border: 1px solid black;
    margin-top: 8px;
  }
</style>
