<template>
  <div>
    <h1>Liste des fournisseurs</h1>
    <supplier
      v-for="supplier in suppliers"
      v-bind:key="supplier.id"
      v-bind:name="supplier.name"
      v-bind:status="supplier.status"
      v-bind:checked-at="supplier.checkedAt"
    ></supplier>
  </div>
</template>

<script>
import Supplier from "./Supplier.vue";
import axios from "axios";

export default {
  name: "suppliers-list",
  components: { Supplier },
  created: async function() {
    this.loading = true;
    try {
      const { data } = await axios.get(
        "https://api-suppliers.herokuapp.com/api/suppliers/"
      );
      this.suppliers = data;
      this.loading = false;
    } catch (e) {
      this.loading = false;
      this.error = e;
    }
  },
  data: function() {
    return {
      suppliers: [],
      loading: false,
      error: null
    };
  }
};
</script>
