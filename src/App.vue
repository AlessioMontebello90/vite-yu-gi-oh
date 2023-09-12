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
    <div id="container">
      <div id="banner_found_cards">Found <span>39</span> cards</div>
      <ListCard />
    </div>
  </main>
</template>

<style lang="scss">
@use "./styles/generals.scss" as *;
@use "./styles/partials/variables.scss" as *;
main {
  width: 70%;
  margin: 5px auto;
  #container {
    margin: 5px 0;
    padding: 25px;
    background-color: #fff;
    // debug
    min-height: 500px;
    #banner_found_cards {
      background-color: #212529;
      color: #fff;
      height: 50px;
      padding: 15px;
      font-weight: 600;
    }
  }
}
</style>
