<template>
  <div
    class="transition flex flex-col w-1/6 h-30 py-4 items-center space-y-4 bg-white drop-shadow-2xl cursor-pointer hover:scale-110"
  >
    <img :src="img" class="w-14 h-14" :alt="category" />
    <h3 class="text-xl capitalize font-bold">{{ category }}</h3>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",

  props: {
    category: {
      type: String,
      required: true,
    },
  },
  computed: {
    img() {
      return "img/" + this.category + ".svg";
    },
  },
};
</script>

<style></style>
