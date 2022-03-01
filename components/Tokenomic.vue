<template>
<div class='feature-container w-full px-5 sm:px-10 lg:px-15 xl:px-40 py-10 over-view'>
    <div class='w-full text-center mb-20 mt-18'>
        <div data-aos="fade-up" class='title'>{{$t('Tokenomic.title')}}</div>
        <br/>
        <div data-aos="fade-up" class='normal-text mt-6'>
          {{$t('Tokenomic.Description-1')}}<span class="font-bold">{{$t('Tokenomic.Description-2')}}</span>
        </div>
    </div>
    <div class='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xs:ml-10 mb-20 bg-table' data-aos="fade-up">
        <div class="title-table table-left">
          <span class="block-logo">
            <img class="logo mr-2"  src="~/assets/img/logo/goen.svg">
            <span class="logo-text">GOEN</span>
          </span>
        </div>
        <div class="content-table table-right">
          <span class="block-total">
            <span class="pr-4">{{$t('Tokenomic.totalSupply')}}</span> <span class="highlight-text">555,555,555</span>
          </span>
        </div>
    </div>
  <div class='mt-12 grid grid-cols-1 lg:grid-cols-1 space-y-2 md:space-y-0' data-aos="fade-up" >
      <img v-if="locate === 'en'"
        class="inline-block ml-2"
        src="~/assets/img/tokenomic/tokenomic.png"
      />         
      <img v-else
        class="inline-block ml-2"
        src="~/assets/img/tokenomic/tokenomic-jp.png"
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
.logo {
  padding-bottom: 10px;
}
.block-logo {
  padding-top: 15px;
  padding-left: 25px;
  display: block;
}
.block-total {
  padding-top: 15px;
  padding-right: 25px;
  display: block;
}
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
  top : -40px;
}

img {
  display: inline-block;
}
.feature-container {
 background: #1a1e1f;
}
.title {
  font-style: normal;
  font-size: 32px;
  line-height: 48px;
  color: #F7FEFF;
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
  padding-left: 400px;
  padding-right: 400px;
  padding-top: 100px;
  padding-bottom: 150px;
}
.pool-div {
  padding-right: 40px;
}
.description-box-lg {
  width: 145px; 
  position: absolute
}
.description-box-md {
  width: 155px; 
  position: absolute
}
.mt-12-impt {
  margin-top: 3rem !important;
}
.title-table {
  font-weight: normal;
  font-size: 28px;
  color: #F7FEFF;
  padding: 10px;
  background: #2E3233;
  border-radius: 62.5px;
}
.bg-table {
  background: #2E3233;
  border-radius: 62.5px;
}
.content-table {
    font-size: 24px;
    color: rgba(247, 254, 255, 0.75);;
    padding: 10px;
    background: #2E3233;
    border-radius: 62.5px;
}
.font-bold {
  font-weight: bolder;
  font-size: 17px;
}
.highlight-text {
  font-weight: bolder;
  font-size: 32px;
  color: #FFE925;
}
@media screen and (max-width: 1660px) {
  .feature-container {
    padding-left: 290px;
    padding-right: 290px;
    padding-top: 90px;
    padding-bottom: 130px;
  }
}
@media screen and (max-width: 1568px) {
  .feature-container {
    padding-left: 250px;
    padding-right: 250px;
  }
}
@media screen and (min-width: 1800px) {
  .feature-container {
    padding-left: 350px;
    padding-right: 350px;
  }
}
@media screen and (min-width: 1900px) {
  .feature-container {
    padding-left: 400px;
    padding-right: 400px;
  }
}
@media screen and (max-width: 1280px) {
  .feature-container {
    padding-left: 270px;
    padding-right: 270px;
    padding-top: 60px;
    padding-bottom: 50px;
  }
  .pool-div {
    padding-right: 0px;
  }

}
@media screen and (max-width: 1024px) {
  .feature-container {
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 60px;
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
  .bg-table {
    text-align: center;
  }
  .block-logo {
    padding-left: 0px;
    padding-right: 15px;
  }
  .block-total {
    padding-top: 0px;
    padding-right: 0px;
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
