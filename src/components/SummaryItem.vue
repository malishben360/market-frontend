<template>
  <!-- Container -->
  <div class="flex space-x-4 my-2">
    <!-- Image -->
    <img :src="image" :alt="item.title" class="w-20 h-16" />
    <div class="mt-2">
      <p class="text-lg capitalize">
        {{ item.name }} recipe ({{ item.quantity }})
      </p>
      <h3 class="font-bold text-md">NGN{{ item.quantity * item.price }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "SummaryItem",
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
  computed: {
    image() {
      return `img/${this.item.name}.svg`;
    },
  },
};
</script>

<style></style>
