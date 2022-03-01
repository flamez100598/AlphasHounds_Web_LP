<template>
  <transition name="dialog">
    <div v-if="active" class="dialog-backdrop" @click="handleBackdropClick">
      <div class="dialog-container" @click.stop>
        <slot/>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "BaseDialog",
  props: {
    active: {type: Boolean, default: false}
  },
  methods: {
    handleBackdropClick() {
      this.$emit("update:active", false);
      const el = document.body;
      el.classList.remove('hidden-scroll');
    }
  }
};
</script>

<style scoped>
.dialog-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
}

.dialog-container {
  max-width: 720px;;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  background: url("~assets/img/bg-dialog.png");;
  border-radius: 20px;
  position: relative;
  overflow-y: auto;
  max-height: 80vh;
}
@media (max-width: 1152px) {
  .dialog-container {
    max-width: 100vw;
  }
}

@media (min-width: 1152px) {
  .dialog-container {
    max-width: 1140px;
  }
}

.dialog-enter-active,
.dialog-leave-active {
  transition: opacity 0.2s;
}

.dialog-enter,
.dialog-leave-to {
  opacity: 0;
}

.dialog-enter-active .dialog-container,
.dialog-leave-active .dialog-container {
  transition: transform 0.4s;
}

.dialog-enter .dialog-container,
.dialog-leave-to .dialog-container {
  transform: scale(0.9);
}
</style>
