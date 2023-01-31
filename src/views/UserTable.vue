<script>
import DialogForm from '@/components/DialogForm'
import Table from '@/components/TableCustom'
import DialogDelete from '@/components/DialogDelete'
import Dropdawn from '@/components/Dropdawn'
import InputCount from '@/components/InputCount'
import ChangeAll from '@/components/ChangeAll'

export default {
  name: 'UserTable',
  components: {
    DialogForm,
    Table,
    DialogDelete,
    Dropdawn,
    InputCount,
    ChangeAll
  },
  data () {
    return {
      userList: [],
      selectedFilter: 'all',
      changeAllList: [
        {
          id: 1,
          title: 'Name'
        },
        {
          id: 2,
          title: 'Username'
        },
        {
          id: 3,
          title: 'Email'
        }
      ]
    }
  },
  computed: {
    dropdawnList () {
      return this.userList.map(({ id, name }) => ({ id, title: name }))
    },
    filteredUserList () {
      return this.selectedFilter === 'all'
        ? this.userList
        : this.userList.filter(({ name }) => name === this.selectedFilter)
    }
  },
  created () {
    this.getUsersList(5)
  },
  methods: {
    getUsersList (count) {
      fetch('https://jsonplaceholder.typicode.com/users?_limit=' + count)
        .then(response => response.json())
        .then(json => {
          this.userList = json
          this.$refs.InputCount.reset()
        })
    },
    addUser (newUser) {
      this.userList.unshift(newUser)
    },
    checkUser (id) {
      this.userList.forEach(user => {
        if (user.id === id) {
          this.$refs.DialogDelete.openDialog({ id: user.id, name: user.name, username: user.username })
        }
      })
    },
    deleteUser (id) {
      this.userList = this.userList.filter(user => user.id !== id)
    },
    updateUser (editedUser) {
      this.userList = this.userList.map(user => {
        if (user.id === editedUser.id) {
          user = editedUser
        }
        return user
      })
    },
    changeValueByKey ({ key, value }) {
      if (key === 'all') {
        this.userList = this.userList.map(user => {
          for (const userKey in user) {
            if (userKey !== 'id') {
              user[userKey] = value
            }
          }
          return user
        })
      } else {
        this.userList = this.userList.map(user => ({ ...user, [key.toLowerCase()]: value })
        )
      }
    },
    resetFilters () {
      // window.location.reload()
      this.$refs.InputCount.reset()

      this.selectedFilter = 'all'
      this.$refs.Dropdawn.reset()

      this.$refs.ChangeAll.reset()

      this.getUsersList(5)
    }
  }
}
</script>

<template>
  <v-app>
    <div class="header">
      <InputCount
        ref="InputCount"
        type="number"
        @setUserCount="count => getUsersList(count)"
      />
      <Dropdawn
        ref="Dropdawn"
        :list="dropdawnList"
        @filterUserList="selected => selectedFilter = selected"
      />
    </div>

    <Table
      @edit="(user) => $refs.DialogForm.openEditForm(user)"
      @delete="checkUser"
      :data="filteredUserList"
      style="margin-block:40px"
    ></Table>
    <div class="d-flex justify-space-between">
      <ChangeAll
        ref="ChangeAll"
        :list="changeAllList"
        @changeValueByKey="changeValueByKey"
      />
      <button @click="resetFilters" style="color: green">Сбросить фильтры</button>
    </div>

    <DialogForm
      ref="DialogForm"
      @saveUser="addUser"
      @editUser="updateUser"
    />

    <DialogDelete ref="DialogDelete" @delete="deleteUser"/>

    <router-view/>
  </v-app>
</template>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
  }
</style>
