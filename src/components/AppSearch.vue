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
      <select
        name="archetype"
        id="searchType"
        v-model.trim="store.searchType"
        @change="$emit('searchType')"
      >
        <option
          v-for="archetype in store.arrayOfType"
          :value="archetype.archetype_name"
        >
          {{ archetype.archetype_name }}
        </option>
      </select>

      <!-- <button type="submit" @click.prevent="$emit('searchType')">cerca</button> -->
    </form>
  </section>
</template>

<style lang="scss" scoped>
@use "./../styles/partials/variables.scss" as *;
#searchType {
  margin: 5px 0;
  width: 100px;
  padding: 8px;
  background-color: #fff;
  border: 1px solid #d4d3cf;
  border-radius: 5px;
}
button {
  cursor: pointer;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 10px;
  color: $primaryColor;
  background-color: #fff;
}
</style>
