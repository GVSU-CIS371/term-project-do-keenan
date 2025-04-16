<template>
  <div id="app">
    <SiteNavigation />
    <main>
      <HomePage />
    </main>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import SiteNavigation from './components/SiteNavigation.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    SiteNavigation
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

button {
  cursor: pointer;
}

</style>