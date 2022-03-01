<template>
<div class="feature-container w-full h-full flex flex-col justify-center px-5 sm:px-10 lg:px-15 xl:px-40 pt-10">
    <div class='w-full text-center'>
        <div class='title'>
            About Us
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-5 mt-10 mb-6 md:mb-2">
        <div class="col-span-3 md:relative block" data-aos="fade-up">
          <!-- <div class="mb-3 img-block"> -->
            <img src='~/assets/img/features/goen-app2.png' class="md:absolute block pos-img">
          <!-- </div> -->
            
        </div>
        <div data-aos="fade-up"  class="ml-3 content-introduce mt-10 col-span-2 xs:mb-8 md:mb-6 mb-2">
            <p class="mb-4">{{$t('introduction.descripton-1')}}</p>
            <p class="mb-4">{{$t('introduction.descripton-2')}}</p>
            <p>{{$t('introduction.descripton-3')}}</p>
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
    methods: {
    changeLang (lang) {
      // console.log("lang", lang)
      this.$store.commit('SET_LANG', lang)
      this.$router.push({ path: `${this.$router.currentRoute.path}?lang=${lang}` })
    }
  }
}
</script>
<style lang="scss" scoped>
p {
    size: 18px;
    line-height: 28px;
}
img {
  border-radius: 36px;
}
.feature-container {
  background: #240254;
  min-height: 65vh;
}
.title {
  font-style: normal;
  font-size: 32px;
  line-height: 50px;
  max-width: 425px;
  margin:0 auto;
}

.content-introduce {
  max-width: 450px;
  size: 18px;
  line-height: 28px;
  color: #F6FEFF;
  p {
    font-size: 16px;
    opacity: 0.75;
  }
}
.pos-img {
    top: -5px;
}

@media only screen and (max-width: 1920px) {
  .pos-img {
    top: -55px;
  }
}
@media only screen and (max-width: 1680px) {
  .pos-img {
    top: -40px;
  }
}
@media only screen and (max-width: 1440px) {
  .pos-img {
    top: 0px;
  }
}
@media only screen and (max-width: 640px) {
  .title {
    font-size: 28px;
  }
  .img-block {
    width: 419px;
    height: 326px;
    margin-top: 10px;
  }
}
</style>
