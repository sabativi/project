<template>
  <div style="border-style: groove; margin-top: 10px">
    <h2>Fournisseur {{name }}</h2>
    <h3 v-bind:style="{ color: status ? 'green' : 'red'}">Status {{ status ? 'OK' : 'KO' }}</h3>
    <h5>Last time checked : {{ checkedAt.toLocaleString() }}</h5>
  </div>
</template>

<script>
export default {
  name: "supplier",
  props: ["name", "status", "checkedAt"]
};
</script>
