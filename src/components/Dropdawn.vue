<script>

export default {
  name: 'TheDropdawn',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      selected: {
        id: 0,
        title: 'all'
      },
      defaultItem: {
        id: 0,
        title: 'all'
      },
      showList: false
    }
  },
  mounted () {
    document.addEventListener('click', this.bodyClick)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.bodyClick)
  },
  computed: {
    filteredList () {
      return [...this.list, this.defaultItem].filter(({ title }) => title !== this.selected.title)
    }
  },
  methods: {
    setFilter (selected) {
      this.showList = false
      this.selected = selected
      this.$emit('filterUserList', selected.title)
    },
    bodyClick () {
      this.showList = false
    },
    getValue () {
      return this.selected.title
    },
    reset () {
      this.selected = {
        id: 0,
        title: 'all'
      }
    }
  }
}
</script>

<template>
  <div class="dropdawn">
    <div class="dropdawn__title" @click.stop="showList = !showList">{{ selected.title }}</div>
    <div class="dropdawn__list" v-show="showList">
      <div
        class="dropdawn__item"
        v-for="item in filteredList"
        :key="item.id"
        @click="setFilter(item)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .dropdawn {
    min-width: 150px;
    display: inline-block;
    &__list, &__title {
      border: 1px solid black;
      border-top:none;
      width: 100%;
      text-align: start;
    }
    &__list {
      height: 100px;
      overflow: hidden;
      overflow-y: auto;
    }
    &__item {
      padding: 4px 20px;
      cursor: pointer;
      &:hover {
        color: blue;
      }
    }
    &__title {
      border-top: 1px solid black;
      padding: 4px 20px;
      cursor: pointer;
    }
  }
</style>
