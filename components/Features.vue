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
      <div data-aos="fade-up" class="title">{{$t('EcoSystem.title')}}</div>
      <br />
      <div data-aos="fade-up" class="normal-text">
        {{$t('EcoSystem.title')}}
        <span data-aos="fade-up" class="block"
          >{{$t('EcoSystem.More')}}</span
        >
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
      <img
        v-if="locate === 'en'"
        class="inline-block ml-2"
        src="~/assets/img/ecosystem/ecosystem-img.png"
      />
      <img
        v-else
        class="inline-block ml-2"
        src="~/assets/img/ecosystem/ecosystem-img-jp.png"
      />
    </div>
  </div>
</template>

<script>
export default {
    computed: {
    locate () {
      return this.$store.state.i18n.locale
    }
  },
}
</script>
<style scoped>
.fix-top-arrow {
  position: relative;
  top: 17px;
}
.sub-des {
  width: 50px;
}
.over-view {
  color: rgba(247, 254, 255, 0.75);
}
.content-between {
  position: relative;
  top: -40px;
}

img {
  display: inline-block;
}
.feature-container {
  background: #202526;
}
.title {
  font-style: normal;
  font-size: 32px;
  line-height: 48px;
  color: #f7feff;
}
.normal-text {
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  color: rgba(247, 254, 255, 0.75);
  font-weight: normal;
}
.sub-title {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  width: 105px;
}
.text-description {
  height: 32px;
  font-size: 14px;
}
.feature-container {
  padding-left: 415px;
  padding-right: 415px;
  padding-top: 70px;
  padding-bottom: 150px;
}
.pool-div {
  padding-right: 40px;
}
.description-box-lg {
  width: 145px;
  position: absolute;
}
.description-box-md {
  width: 155px;
  position: absolute;
}
.mt-12-impt {
  margin-top: 3rem !important;
}
@media screen and (max-width: 1660px) {
  .feature-container {
    padding-left: 270px;
    padding-right: 270px;
    padding-top: 50px;
    padding-bottom: 130px;
  }
}
@media screen and (max-width: 1679px) {
  .feature-container {
    padding-left: 295px;
    padding-right: 295px;
    padding-top: 50px;
    padding-bottom: 130px;
  }
}
@media screen and (max-width: 1620px) {
  .feature-container {
    padding-left: 280px;
    padding-right: 280px;
  }
}
@media screen and (max-width: 1590px) {
  .feature-container {
    padding-left: 230px;
    padding-right: 230px;
  }
}
@media screen and (max-width: 1539px) {
  .feature-container {
    padding-left: 220px;
    padding-right: 220px;
  }
}
@media screen and (min-width: 1680px) {
  .feature-container {
    padding-left: 295px;
    padding-right: 295px;
  }
}
@media screen and (min-width: 1720px) {
  .feature-container {
    padding-left: 320px;
    padding-right: 320px;
  }
}
@media screen and (min-width: 1760px) {
  .feature-container {
    padding-left: 340px;
    padding-right: 340px;
  }
}
@media screen and (min-width: 1800px) {
  .feature-container {
    padding-left: 375px;
    padding-right: 375px;
  }
}
@media screen and (min-width: 1900px) {
  .feature-container {
    padding-left: 415px;
    padding-right: 415px;
  }
}
@media screen and (max-width: 1280px) {
  .feature-container {
    padding-left: 230px;
    padding-right: 230px;
    padding-top: 40px;
    padding-bottom: 50px;
  }
  .pool-div {
    padding-right: 0px;
  }
}
@media screen and (max-width: 1480px) {
  .feature-container {
    padding-left: 255px;
    padding-right: 255px;
  }
}
@media screen and (max-width: 1024px) {
  .feature-container {
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 30px;
    padding-bottom: 50px;
  }
}
@media screen and (max-width: 768px) {
  .feature-container {
    padding-left: 20px;
    padding-right: 20px;
  }
  .md-screen {
    margin-top: 25px;
  }
  .md-item-div {
    padding: 0px 0px 80px 140px;
  }
  .md-pb-0 {
    padding-bottom: 0px;
  }
  .pool-div {
    padding-left: 150px;
    padding-top: 20px;
    padding-bottom: 10px;
  }
}
@media screen and (max-width: 443px) {
  .feature-container {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 50px;
    padding-bottom: 40px;
  }
  .pool-div {
    padding-left: 90px;
    padding-top: 20px;
  }
  .md-screen {
    margin-top: 25px;
  }
  .md-item-div {
    padding: 0px 0px 60px 60px;
  }
  .md-pb-0 {
    padding-bottom: 0px;
  }
}
</style>
