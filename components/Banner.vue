<template>
  <div class="banner-container w-full">
    <div class="shadow"></div>
    <transition name="slide">
      <div v-if="mobileSideBar" class="mobile-side-bar">
        <a
          href="javascript:void(0)"
          class="close-btn"
          @click="mobileSideBar = false"
          >&times;</a
        >
        <img
          class="py-4 pl-4"
          width="48"
          height="48"
          src="~/assets/img/logo/goen.svg"
        />
        <hr />
        <div class="pl-10 mt-6">
          <div class="py-4" @click="menuAction('goToHome')">
            <a href="javascript:void(0)"> {{ $t('banner.Home') }}</a>
          </div>
          <div class="py-4" @click="menuAction('goToOverView')">
            <a href="javascript:void(0)">{{ $t('banner.Overview') }}</a>
          </div>
          <div class="py-4 mb-8" @click="menuAction('goToRoadMap')">
            <a href="javascript:void(0)">{{ $t('banner.Roadmap') }}</a>
          </div>
          <div class="switch mt-14">
            <input
              id="language-toggle"
              class="check-toggle check-toggle-round-flat"
              type="checkbox"
              v-model="checked"
            />
            <label for="language-toggle"></label>
            <span class="on">EN</span>
            <span class="off">JP</span>
          </div>
        </div>
      </div>
    </transition>
    <div class="fixed mobile-header z-10 py-4 pl-4 w-full">
      <svg
        @click="mobileSideBar = true"
        class="inline-block"
        viewBox="0 0 100 80"
        width="35"
        height="35"
      >
        <rect style="fill: white" width="100" height="10"></rect>
        <rect style="fill: white" y="30" width="100" height="10"></rect>
        <rect style="fill: white" y="60" width="100" height="10"></rect>
      </svg>
      <img
        class="inline-block ml-2"
        width="48"
        height="48"
        src="~/assets/img/logo/goen.svg"
      />

      <div class="w-auto mr-3 float-right" style="position: relative">
        <button class="try-btn" @click="showing = true">
          {{ $t('banner.LaunchApp') }}
        </button>
        <modal :showing="showing" @closeModal="showing = false">
          <div
            class="
              content-modal
              w-full
              h-full
              flex flex-col
              text-center
              justify-center
            "
          >
            <div>
              <h3>Coming soon</h3>
            </div>
          </div>
        </modal>
      </div>
    </div>

    <div class="header-container" style="position: relative; width: 100%">
      <div class="w-full fixed z-10 set-header">
        <the-header
          @goToHome="$emit('goToHome')"
          @goToOverView="$emit('goToOverView')"
          @goToRoadMap="$emit('goToRoadMap')"
          @goToTeam="$emit('goToTeam')"
          @goToTechBlog="$emit('goToTechBlog')"
        />
      </div>
    </div>
    <div
      class="
        w-full
        h-full
        flex flex-col
        justify-center
        px-5
        sm:px-10
        lg:px-20
        xl:px-40
      "
    >
      <div class="w-full text-center">
        <div>
          <h1 class="title">SPLASH ART</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import Modal from '@/components/common/Modal.vue'
import { mapActions } from 'vuex'
export default {
  name: 'Banner',
  components: {
    theHeader: TheHeader,
    Modal,
  },
  data() {
    return {
      mobileSideBar: false,
      showing: false,
      checked: false,
    }
  },
  mounted() {},
  methods: {
    menuAction(key) {
      this.$emit(key)
      this.mobileSideBar = false
    },
    ...mapActions({
      setLang: 'i18n/setLang',
    }),
  },

  watch: {
    checked: function (val) {
      // console.log('object :>> ', val)
      let lang
      if (val) {
        lang = 'jp'
      } else {
        lang = 'en'
      }
      this.setLang(lang)
      this.$router.push({
        path: `${this.$router.currentRoute.path}?lang=${lang}`,
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.community-link {
  font-size: 24px;
  border: 1px solid white;
  border-radius: 5px;
  padding: 2px 7px;
}
.community-link:hover {
  background: linear-gradient(90deg, #fb2b6d 0%, #753a88 100%);
}
.banner-container {
  height: 100vh;
  background: #20024F;
}
.particles-container {
  width: 100%;
  height: 100vh;
  position: absolute;
}
// .shadow {
//   height: 200%;
//   width: 100%;
//   position: absolute;
//   top: 0;
//   background-image: url('~assets/img/introduce/left-1.svg'),
//     url('~assets/img/introduce/left-2.svg'),
//     url('~assets/img/introduce/right-1.svg'),
//     url('~assets/img/introduce/right-2.svg');
//   background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
//   background-position: left top, left top, right top, right top;
// }
.title {
  font-style: normal;
  font-size: 72px;
}
.sub-title {
  font-size: 42px;
  opacity: 0.75;
  padding-bottom: 48px;
}
.find-more-btn {
  padding: 13px 65px;
  background-color: #ffe925;
  color: #1f2424;
  font-weight: 700;
  font-size: 14px;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
}

.description {
  font-style: italic;
  font-weight: 300;
  font-size: 24px;
  line-height: 36px;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.75;
}
.mobile-header {
  display: none;
}
@media only screen and (max-width: 768px) {
  .shadow {
    background-image: url('~assets/img/introduce/left-1.svg'),
      url('~assets/img/introduce/left-2.svg');
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-position: left top, left top, right top, right top;
  }
  .title {
    font-size: 42px;
  }
  .sub-title {
    font-size: 28px;
  }
  .header-container {
    display: none;
  }
  button {
    outline: none;
  }
  .try-btn {
    padding: 13px 32px;
    background-color: #ffe925;
    color: #1f2424;
    font-weight: bold;
    font-size: 14px;
    border-radius: 50px;
  }

  .title {
    font-size: 40px;
  }
  .description {
    font-size: 16px;
  }
  .mobile-header {
    display: inline-block;
    background-color: rgb(31, 36, 36, 0.8);
  }
  .left-shadow {
    display: none;
  }
  .right-shadow {
    display: none;
  }

  .mobile-side-bar {
    width: 60%;
    height: 100vh;
    z-index: 20 !important;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #202526;

    a {
      font-weight: bold;
    }
    li {
      padding: 10px;
      margin-left: 25px;
      font-size: 14px;
      font-weight: normal;
    }
    .close-btn {
      position: absolute;
      top: 0;
      right: 25px;
      font-size: 36px;
      color: white;
      padding: 7px;
    }
  }
}
</style>
