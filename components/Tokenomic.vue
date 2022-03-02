<template>
  <div
    class="
      feature-container
      w-full
      px-5
      sm:px-10
      lg:px-15
      xl:px-40
      py-10
      over-view
    "
  >
    <div class="w-full text-center mb-12 mt-16">
      <div data-aos="fade-up" class="title text-left">
        <img src="~/assets/img/tokenomic/title.png" alt="">
      </div>
    </div>
    <div
      data-aos="fade-up"
      class="
        mt-8
        grid grid-cols-1
        lg:grid-cols-1
        space-y-2
        md:space-y-0
        2xl:ml-20
      "
    >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tokenomic',
  computed: {
    locate () {
      return this.$store.state.i18n.locale
    }
  },
}
</script>
<style lang="scss" scoped>

img {
  display: inline-block;
}
.over-view {
  background: #240254;
  height: 110vh;
}

@media screen and (max-width: 1660px) {
  .over-view {
    padding-left: 270px;
    padding-right: 270px;
    padding-top: 50px;
    padding-bottom: 130px;
  }
}

@media screen and (max-width: 768px) {
  .over-view {
    padding-left: 20px;
    padding-right: 20px;
  }
}
@media screen and (max-width: 443px) {
  .over-view {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 50px;
    padding-bottom: 40px;
  }
  .md-item-div {
    padding: 0px 0px 60px 60px;
  }
  .md-pb-0 {
    padding-bottom: 0px;
  }
}
</style>
