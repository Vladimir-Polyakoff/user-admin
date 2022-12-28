<template>
  <div>
    <NavBar></NavBar>
    <router-view style="padding: 32px; position: relative; min-height: 30vh;
    background: white;"/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
