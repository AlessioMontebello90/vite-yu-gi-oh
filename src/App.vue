<script>
import AppHeader from "./components/AppHeader.vue";
import ListCard from "./components/ListCard.vue";
import AppSearch from "./components/AppSearch.vue";
export default {
  components: {
    AppHeader,
    ListCard,
    AppSearch,
  },
};
</script>

<template>
  <AppHeader
    message="Yu-Gi-Oh APi"
    urlLogo="https://static.wikia.nocookie.net/logopedia/images/3/35/Yu-Gi-Oh%21_Logo.png"
  />
  <main>
    <AppSearch />
    <ListCard />
  </main>
</template>

<style lang="scss">
@use "./styles/generals.scss" as *;
@use "./styles/partials/variables.scss" as *;
main {
  width: 70%;
  margin: 5px auto;
}
</style>
