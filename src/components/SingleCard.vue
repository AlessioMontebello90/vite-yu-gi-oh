<script>
export default {
  name: "SingleCard",
};
</script>

<template>
  <div class="card">
    <img src="UlrCardditizio" alt="Card di Alessio" />
    <div class="text_card">
      <h3>"Alessio"</h3>
      Monster
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "./../styles/generals.scss" as *;
@use "./../styles/partials/variables" as *;
.card {
  background-color: $primaryColor;
  width: calc((100% / 5) - 12px);
  img {
    width: 100%;
  }
  .text_card {
    text-align: center;
    padding: 10px;
    h3 {
      color: #fff;
      margin-bottom: 10px;
    }
  }
}
</style>
