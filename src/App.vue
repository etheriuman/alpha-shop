<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'App',
  created() {
    const storageData = JSON.parse(localStorage.getItem('userData'))
    this.$store.commit('getStorageData', storageData)
  }
}
</script>