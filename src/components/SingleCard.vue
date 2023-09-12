<script>
export default {
  name: "SingleCard",
  props: {
    details: Object,
  },
};
</script>

<template>
  <!-- SingleBox Immage -->
  <div class="card">
    <!-- v-for per singolo oggetto  card_images -->
    <img
      v-for="img in details.card_images"
      :src="img.image_url"
      alt="Card di Alessio "
    />

    <!-- name and type -->

    <div class="text_card">
      <h3>{{ details.name }}</h3>
      {{ details.archetype }}
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
