<script>
import AppHeader from "./components/AppHeader.vue";
import ListCard from "./components/ListCard.vue";
export default {
  components: {
    AppHeader,
    ListCard,
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <ListCard />
  </main>
</template>

<style lang="scss">
@use "./styles/generals.scss" as *;
@use "./styles/partials/variables.scss" as *;
body {
  background-color: #d48f38;
}
</style>
