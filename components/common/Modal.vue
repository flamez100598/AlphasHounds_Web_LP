<template>
  <transition name="fade">
    <div
      v-if="showing"
      class="transform-position fixed inset-0 h-screen flex items-center justify-center z-50"
      style='background: rgba(0, 0, 0, 0.5)'
    >
      <div
        class="transform-top relative w-10/12 lg:w-4/5 xl:w-4/5 2xl:w-3/5 shadow-lg rounded-lg border-radius-30  object-center modal-container"
        :class='classes'
         v-click-outside="closeModal"
        style='overflow-y: auto'
      >
        <div class='p-8 border-radius-30 modal-background relative'>
          <button
            aria-label="close"
            class="close-btn absolute top-0 right-0 text-xl text-gray-500 my-4 mx-8 z-10"
            @click.prevent="closeModal"
          >
            ×
          </button>
          <slot />
          <div class='absolute bottom-0 left-0 w-full'>
            <slot name='footer'></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'Modal',
  props: ['showing', 'classes'],
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
  },
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.border-radius-30 {
  border-radius: 30px;
}
.modal-background {
  height: 90%;
  width: 90%;
  overflow-y: auto;
  background-color: #202526;
  background-size: cover;
  margin-left: 5%;
}

.close-btn {
  font-size: 35px;
  cursor: pointer;
}
.close-btn:focus {
  outline: none;
}
@media only screen and (min-width: 730px){
  .modal-container {
    max-width: 350px ;
    height: 300px;
  }
}
@media only screen and (max-width: 729px){
  .modal-container {
    max-width: 80vw ;
    height: 200px;
  }
}
</style>
