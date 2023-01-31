<script>
export default {
  name: 'FindSumIndex',
  data () {
    return {
      showResult: false,
      nums: '',
      numsRules: [
        v => !!v || 'Введите цифры через запятую',
        v => {
          let flag = true

          for (const el of v) {
            flag = !!(el === ',' || !isNaN(parseInt(el)))

            if (!flag) {
              return 'Введите валидное значение'
            }
          }
          return flag
        }
      ],
      sum: '',
      sumRules: [
        v => !!v || 'Введите сумму',
        v => {
          let flag = true

          for (const el of v) {
            flag = !isNaN(parseInt(el))

            if (!flag) {
              return 'Введите валидное значение'
            }
          }
          return flag
        }
      ],
      result: ''
    }
  },

  methods: {
    findIndexSum () {
      this.result = ''
      const arrNums = this.nums.split(',').map(num => Number(num))

      for (let i = 1; i < arrNums.length; i++) {
        for (let j = 0; j < i; j++) {
          if (arrNums[i] + arrNums[j] === Number(this.sum)) {
            this.result = [j, i]
            return
          }
        }
      }
    },
    reset () {
      this.nums = ''
      this.sum = ''
      this.result = ''
    }
  }
}
</script>

<template>
  <div>
    <v-form
      style="display:flex; gap: 20px"
    >
      <v-text-field
        style="max-width:250px; height: 70px;"
        v-model="nums"
        :rules="numsRules"
        @input="showResult = false"
        label="Введите числа через запятую"
        required
      ></v-text-field>

      <v-text-field
        style="max-width:250px; height: 70px;"
        v-model="sum"
        :rules="sumRules"
        @input="showResult = false"
        label="Сумма"
        required
      ></v-text-field>

      <div style="display:flex; flex-direction:column; gap:10px">
        <v-btn
          style="color:green;"
          class="mr-4"
          @click="findIndexSum(), showResult = true"
          >
          Посчитать
        </v-btn>

        <v-btn
          style="color:red;"
          @click="reset"
        >
          Сбросить
        </v-btn>
      </div>
    </v-form>
    <!-- <div class="result">{{ result }}</div> -->
    <span
      class="result"
      v-show="showResult && result.length"
      v-for="(num, index) in nums.split(',').join('')"
      :key="index"
      :style="result.includes(index) && 'color:red; font-size:28px'"
    >
      {{ num }}
    </span>
    <div v-show="showResult && !result.length">Не найдена сумма</div>
  </div>
</template>

<style scoped>
  .result {
    font-size: 20px;
    letter-spacing: .5rem;
  }
  .result:not(last-child)::after {
    content: ',';
    color: black;
    font-size: 20px;
  }
</style>
