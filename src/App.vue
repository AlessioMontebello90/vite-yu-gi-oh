<script>
import axios from "axios";
import { store } from "./store.js";
import AppHeader from "./components/AppHeader.vue";
import ListCard from "./components/ListCard.vue";
import AppSearch from "./components/AppSearch.vue";

// export file
export default {
  components: {
    AppHeader,
    ListCard,
    AppSearch,
  },
  // data
  data() {
    return {
      store,
    };
  },
  // methods
  methods: {
    getCards() {
      axios
        .get(store.apiUrlCard)
        .then((ref) => {
          store.cardList = ref.data.data;
          console.log(store.cardList);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  // created
  created() {
    this.getCards();
  },
  // close export
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
      <div id="banner_found_cards"><span>Select your cards</span></div>
      <ListCard />
    </div>
  </main>
</template>

<style lang="scss">
@use "./styles/generals.scss" as *;
@use "./styles/partials/variables.scss" as *;
main {
  width: 80%;
  margin: 5px auto;
  #container {
    margin: 5px 0;
    padding: 50px;
    background-color: #fff;
    // debug
    // min-height: 500px;
    #banner_found_cards {
      background-color: #2d2e2f;
      color: #fff;
      height: 50px;
      padding: 15px;
      font-weight: 600;
      text-align: center;
    }
  }
}
</style>
