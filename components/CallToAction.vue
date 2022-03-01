<template>
  <div class="background">
    <call-to-action-content />
  </div>
</template>

<script>
import CallToActionContent from '@/components/CallToActionContent'

export default {
  name: 'CallToAction',
  components: {
    'call-to-action-content': CallToActionContent
  }
}
</script>

<style scoped>
  .background {
    background: linear-gradient(0deg, rgba(54, 8, 82, 0.6), rgba(54, 8, 82, 0.6));
    height: 805px;
  }
</style>
