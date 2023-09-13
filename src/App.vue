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
      let newUrl = store.apiUrlCard;
      if (store.searchType.length > 0) {
        newUrl += `?${store.searchParameter}=${store.searchType}`;
        console.log(newUrl);
      } else {
        newUrl += `?num=20&offset=0`;
      }
      axios
        .get(newUrl)
        .then((ref) => {
          store.cardList = ref.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    createArrayOftype() {
      axios
        .get("https://db.ygoprodeck.com/api/v7/archetypes.php")
        .then((res) => {
          store.arrayOfType = res.data;
          console.log(store.arrayOfType);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  // created
  created() {
    this.getCards();
    this.createArrayOftype();
  },
  // close export defoult
};
</script>
<template>
  <AppHeader
    message="Yu-Gi-Oh APi"
    urlLogo="https://static.wikia.nocookie.net/logopedia/images/3/35/Yu-Gi-Oh%21_Logo.png"
  />
  <main>
    <AppSearch @searchType="getCards" />
    <div id="container">
      <div id="banner_found_cards">
        Found <span>{{ store.cardList.length }}</span> cards
      </div>
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
