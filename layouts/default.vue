<template>
  <div class="w-full text-white">
    <div id='home'>
      <banner
        @goAboutUs="goTo('AboutUs')"
        @goToHome="goTo('home')"
        @goToRacerClasses="goTo('RacerClasses')"
        @goToOverView="goTo('overview')"
        @goToRoadMap="goTo('roadmap')"
        @goToTechBlog="goTo('techblog')"
      />
      <AboutUs id="AboutUs" />
      <RacerClasses id="RacerClasses" />
    </div>
    <div id='overview'>
      <features />
    </div>
    <div>
      <tokenomic />
    </div>
    <div id='roadmap'>
      <roadmap />
    </div>
    <!-- <div id='team'>
      <advisors />
      <teams />
    </div> -->
    <div>
      <Backedby />
    </div>
    <div id='footer'>
      <Footer />
    </div>
    <nuxt />
  </div>
</template>

<script>
import AboutUs from '@/components/AboutUs'
import RacerClasses from '~/components/RacerClasses.vue'
import Features from '@/components/Features'
import Banner from '@/components/Banner'
import RoadMap from '~/components/RoadMap'
import Backedby from '~/components/Backedby.vue';
import Footer from '~/components/Footer.vue';
import Teams from '~/components/Teams.vue';
import Advisors from '~/components/Advisors.vue';
import Tokenomic from '~/components/Tokenomic.vue'
export default {
  name: 'LandingPage',
  components: {
    AboutUs,
    RacerClasses,
    features: Features,
    banner: Banner,
    roadmap: RoadMap,
    Backedby,
    Footer,
    teams: Teams,
    advisors: Advisors,
    tokenomic: Tokenomic
  },
  mounted() {
    
  },
  data() {
    return {
      windowTop: 0
    }
  },
  methods: {
    goTo(key) {
      document.getElementById(key).scrollIntoView({ behavior: 'smooth' });
    }
  },
}
</script>

<style>
html {
  /* font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif; */
  font-size: 16px;
  word-spacing: 1px;
}
body {
  width: 100%;
  font-family: 'Aquawax Pro' !important;
}

.gradient {
  background: linear-gradient(90deg, #FB2B6D 0%, #753A88 100%);
}

.gradient2 {
  background: linear-gradient(90deg, #DE31C2 0%, #6359E2 100%);
}

.rounded-full {
  border-radius: 10px;
  width: 206px;
  height: 62px;
  padding: 7px 14px;
  color: #FFFFFF;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;

}
.switch {
  position: relative;
  display: inline-block;
  margin: 0 5px;
}

.switch > span {
  position: absolute;
  top: 14px;
  pointer-events: none;
  font-family: 'Helvetica', Arial, sans-serif;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  width: 50%;
  text-align: center;
}

input.check-toggle-round-flat:checked ~ .off {
  color: #000000;
}

input.check-toggle-round-flat:checked ~ .on {
  color: #fff;
}

.switch > span.on {
  left: 0;
  padding-left: 2px;
  color: #000000;
  top: 7px;
  font-size: 11px;
}

.switch > span.off {
  right: 0;
  padding-right: 4px;
  color: #fff;
  top: 7px;
  font-size: 11px;
}

.check-toggle {
  position: absolute;
  margin-left: -9999px;
  visibility: hidden;
}
.check-toggle + label {
  display: block;
  position: relative;
  cursor: pointer;
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

input.check-toggle-round-flat + label {
  padding: 2px;
    width: 90px;
    height: 30px;
  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  -ms-border-radius: 60px;
  -o-border-radius: 60px;
  border-radius: 60px;
}
input.check-toggle-round-flat + label:before,
input.check-toggle-round-flat + label:after {
  display: block;
  position: absolute;
  content: '';
}

input.check-toggle-round-flat + label:before {
  top: 2px;
  left: 2px;
  bottom: 2px;
  right: 2px;
  background-color: rgba(39,251,130,.1);
  -webkit--moz-border-radius: 60px;
  -ms-border-radius: 60px;
  -o-border-radius: 60px;
  border-radius: 60px;
}
input.check-toggle-round-flat + label:after {
  top: 4px;
  left: 4px;
  bottom: 4px;
  width: 42px;
  background-color: #fff;
  -webkit-border-radius: 52px;
  -moz-border-radius: 52px;
  -ms-border-radius: 52px;
  -o-border-radius: 52px;
  border-radius: 52px;
  -webkit-transition: margin 0.2s;
  -moz-transition: margin 0.2s;
  -o-transition: margin 0.2s;
  transition: margin 0.2s;
}

input.check-toggle-round-flat:checked + label:after {
  margin-left: 44px;
}
</style>
