<script>
export default {
  name: "AppSearch",
};
</script>

<template>
  <section>
    <select name="archetype" id="searchType">
      <option value="Alien">Alien</option>
      <option value="Alien">Dragons</option>
      <option value="Alien">Monster</option>
    </select>
  </section>
</template>

<style lang="scss" scoped>
#searchType {
  margin: 5px 0;
  width: 100px;
  padding: 5px 8px;
  background-color: #fff;
  border: 1px solid #d4d3cf;
  border-radius: 5px;
}
</style>
