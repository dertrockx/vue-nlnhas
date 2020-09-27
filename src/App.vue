
<template>
  <div id="app">
    <header>      
      dasdsadsa
    </header>
    <div class="content">
      <router-view />
    </div>
    <ToolbarBottom />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ToolbarBottom from "./components/ToolbarBottom.vue";

export default {
  name: 'App',
  components: {
    HelloWorld,
    ToolbarBottom
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-shadow: border-box;
}

header {
  grid-area: header;  
  background: #ddd;
}

.content {
  grid-area: content;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: grid;
  grid-template-rows: 10vh 80vh 10vh;
  grid-template-areas:
  "header"
  "content"
  "footer"
}
</style>
