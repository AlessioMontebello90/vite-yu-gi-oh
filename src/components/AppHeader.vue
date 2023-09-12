<script>
export default {
  name: "AppHeader",
  props: ["message", "urlLogo"],
};
</script>

<template>
  <header>
    <div id="logo"><img :src="urlLogo" alt="Yu-Gi-Oh Card Game" /></div>
    <h1>{{ message }}</h1>
  </header>
</template>

<style lang="scss" scoped>
@use "./../styles/generals.scss" as *;
@use "./../styles/partials/variables.scss" as *;
header {
  background-color: #fff;
  height: 80px;
  display: flex;
  align-items: center;
  img {
    scale: 0.5;
  }
}
</style>
