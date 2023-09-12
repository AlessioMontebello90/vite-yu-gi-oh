<script>
export default {
  name: "SingleCard",
};
</script>

<template>
  <div class="card">
    <img src="UlrCardditizio" alt="Card di Alessio" />
    <div class="text_card">
      <h3>name Alessio</h3>
      Type
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "./../styles/generals.scss" as *;
@use "./../styles/partials/variables" as *;
.card {
  background-color: $primaryColor;
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
