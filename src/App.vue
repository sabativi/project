
<template>
  <div id="app">
    <img src="http://vuejs.org/images/logo.png">
    <h1>Que voulez vous faire ?</h1>
    <button>
      <router-link to="/suppliers">Consulter la liste des fournisseurs</router-link>
    </button>
    <button>
      <router-link to="/map">Voir la carte</router-link>
    </button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "app"
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  background-color: #42b983;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

img {
  width: 200px;
  height: 200px;
}

h1 {
  font-weight: normal;
}
</style>
