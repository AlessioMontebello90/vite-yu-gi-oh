<script>
import SingleCard from "./SingleCard.vue";
export default {
  name: "ListCard",
  components: {
    SingleCard,
  },
};
</script>

<template>
  <div class="container_cards">
    <SingleCard />
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: #fff;
}

.container_cards {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
