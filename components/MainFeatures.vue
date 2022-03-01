<template>
<div class="feature-container w-full h-full flex flex-col justify-center px-5 sm:px-10 lg:px-15 xl:px-40 py-10">
    <div class="grid grid-cols-1 md:grid-cols-5 mb-12 mt-16 main-feature-sub">
        <div data-aos="fade-up" class="col-span-2">
            <img src='~/assets/img/features/main-feature.png'>
        </div>
        <div data-aos="fade-up" class="ml-3 col-span-3 content-feature" v-if="locate === 'en'">
          <div class='title mb-4'>{{$t('mainFeature.title')}}</div>
          <p class="mb-4 text-feature"><span class="highlight-text font-bold">“GOEN”</span>, from a Japanese word meaning<span class="font-bold color-whiter"> lucky money</span>, is a protocol that enables users to <span class="highlight-text">stake naked tokens to farm <span class="font-bold">any desired token</span> at the <span class="font-bold">highest APR for free</span> and without spending any money of the initial funds.</span></p>
          <p class="mb-4 text-feature">Goen Finance will enable users to<span class="font-bold color-whiter"> make full use of their money</span> and receive <span class="font-bold color-whiter">incredible profit</span> with all-rounded services, using<span class="font-bold color-whiter"> simple procedure and friendly UI/UX.</span></p>
          <p class="mb-10 text-feature">Goen Finance will be operated and governed by<span class="font-bold color-whiter"> Goen DAO</span> that decides on critical improvements of the protocol, from strategy implementation, ecosystem fee distribution and future direction.</p>
       </div>
      <div data-aos="fade-up" class="ml-3 col-span-3 content-feature " v-else>
          <div class='title mb-4'> {{$t('mainFeature.title')}}</div>
          <p class="mb-4 text-feature">{{$t('mainFeature.descripton-1')}}</p>
          <p class="mb-4 text-feature">{{$t('mainFeature.descripton-2')}}</p>
          <p class="mb-10 text-feature">{{$t('mainFeature.descripton-3')}}</p>
       </div>
    </div>
    <div data-aos="fade-up" class="grid grid-cols-1 md:grid-cols-3">
      <div class="entity block-1">
        <img class="inline-block icon mr-3" src="~/assets/img/features/investment.svg" alt="" />
        <div class="sub-title inline-block">{{$t('mainFeature.stakingService')}}</div>
        <div class="sub-content mt-3">{{$t('mainFeature.stakingSerivce-content')}}</div>
      </div>
      <div class="entity block-2">
        <img class="inline-block icon mr-3" src="~/assets/img/features/growth.svg" alt="" />
        <div class="sub-title inline-block">{{$t('mainFeature.LendingService')}}</div>
        <div class="sub-content mt-3">{{$t('mainFeature.LendingService-content')}} </div>
      </div>
      <div class="entity block-3">
        <img class="inline-block icon mr-3" src="~/assets/img/features/cash-flow.svg" alt="" />
        <div class="sub-title inline-block set-position"><span class="block">{{$t('mainFeature.Portfolio')}}</span> <span class="block">{{$t('mainFeature.Management')}}</span></div>
        <div class="sub-content mt-3">{{$t('mainFeature.Portfolio-content')}}</div>
      </div>
    </div>
</div>
</template>

<script>
import FeatureRight from '@/components/FeatureRight'
import FeatureLeft from '@/components/FeatureLeft'

export default {
  name: 'Features',
  components: {
    'feature-right': FeatureRight,
    'feature-left': FeatureLeft
  },
  computed: {
    locate () {
      return this.$store.state.i18n.locale
    }
  },
}
</script>
<style scoped>
p {
    size: 18px;
    line-height: 28px;
}
.feature-container {
  background:#1A1E1F;
  min-height: 100vh;
}
.title {
  font-style: normal;
  font-size: 32px;
  line-height: 50px;
}

.sub-title {
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
}
.sub-content {
  size: 18px;
  line-height: 28px;
  color: #F6FEFF;
  opacity: 0.75;
  max-width: 300px;
}
.entity{
  margin-right: 13px;
  margin-top: 20px;
}
.content-feature {
  max-width: 527px;
}
.text-feature {
  size: 18px;
  line-height: 28px;
  color: #F6FEFF;
  opacity: 0.75;
}
.highlight-text {
  color: #FFE924;
}
.font-bold {
  font-weight: normal;
  font-size: 16px;
}
.color-whiter {
  color: #F7FEFF;
}
.set-position {
  position: relative;
  top: 20px;
}
@media screen and (max-width: 640px) {
  .sub-content {
    max-width: 100%;
  }
  .entity{
    margin-right: 10px;
    text-align: left;
  }
  .title {
    text-align: center;
    padding-top: 15PX;
  }
}

@media screen and (max-width: 850px) { 
  .set-position {
      top: 0px;
  }
}
@media screen and (min-width: 1720px) {
  .main-feature-sub {
    margin-top: 140px;
  }
  .feature-container {
    padding-left: 15rem;
    padding-right: 15rem;
  }
  .block-1 {
    margin-left: 140px;
  }
  .block-2 {
    margin-left: 95px;
  }
  .block-3 {
    margin-left: 50px;
  }
}
@media screen and (max-width: 1440px) {
  .main-feature-sub {
    margin-top: 80px;
  }
}
</style>
