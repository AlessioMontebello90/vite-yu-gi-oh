<script>
import SingleCard from "./SingleCard.vue";
import { store } from "./../store";
export default {
  name: "ListCard",
  components: {
    SingleCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container_cards">
    <SingleCard v-for="card in store.cardList" :key="card.id" :details="card" />
    <!-- details card -->
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: rgb(231, 227, 227);
}

.container_cards {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
