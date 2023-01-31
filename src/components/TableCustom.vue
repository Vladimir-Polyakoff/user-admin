<script>
export default {
  name: 'TheTable',

  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
    <table>
      <tr>
        <th style="width:27%">Name</th>
        <th style="width:27%">Username</th>
        <th style="width:27%">Email</th>
        <th style="width:19%">Actions</th>
      </tr>
      <tr v-for="item in data" :key="item.id">
        <td style="width:27%">{{ item.name }}</td>
        <td style="width:27%">{{ item.username }}</td>
        <td style="width:27%">{{ item.email }}</td>
        <td style="width:19%">
          <span @click="$emit('edit', item)" style="margin-right: 8px;">Редактировать</span>
          <span @click="$emit('delete', item.id)">Удалить</span>
        </td>
      </tr>
    </table>
</template>

<style scoped>
  table, tr {
    width: 100%;
  }

  td, th {
    text-align: start;
    height: 40px;
    border-bottom: 1px solid #262626;
    padding-left: 8px;
  }
  td:not(:last-child), th:not(:last-child) {
    border-right: 1px solid rgba(0,0,0,05);
  }
</style>
