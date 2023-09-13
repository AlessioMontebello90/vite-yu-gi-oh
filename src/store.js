// STATE GLOBALE

import { reactive } from "vue";

export const store = reactive({
  // apiUrlCard: "https://db.ygoprodeck.com/api/v7/cardinfo.php",

  apiUrlCard: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
  cardList: [],
  searchType: "",
  searchParameter: "archetype",
});
