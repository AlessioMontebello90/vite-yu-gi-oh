<script>
import { store } from "./../store.js";
export default {
  name: "AppSearch",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <section>
    <form>
      <select name="archetype" id="searchType" v-model.trim="store.searchType">
        <option value="Alien">Alien</option>
        <option value="Alligator">Alligator</option>
        <option value="Barbaros">Barbaros</option>
      </select>

      <button type="submit" @click.prevent="$emit('searchType')">cerca</button>
    </form>
  </section>
</template>

<style lang="scss" scoped>
#searchType {
  margin: 5px 0;
  width: 100px;
  padding: 8px;
  background-color: #fff;
  border: 1px solid #d4d3cf;
  border-radius: 5px;
}
</style>
