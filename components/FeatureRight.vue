<template>
  <div class="flex flex-wrap">
    <div class="w-5/6 sm:w-1/2 p-3">
      <h3 class="text-3xl text-white-800 font-bold leading-none mb-3">
        {{ headline }}
      </h3>
      <p class="text-white-600 mb-2 content">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureRight',
  props: {
    headline: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
 .content {
   
 }
</style>
