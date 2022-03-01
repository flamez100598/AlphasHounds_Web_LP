<template>
  <div class="w-full flex flex-wrap flex-col lg:flex-row nav lg:space-x-0">
    <div
      class="w-full lg:w-1/4 xl:w-1/4 flex items-center justify-center divide-x"
    >
      <div style="margin-bottom: -9px">
        <img class="logo mr-2" src="~/assets/img/logo/goen.svg" />
        <span class="logo-text">LOGO</span>
      </div>

    </div>
    <div
      class="w-full lg:w-3/4 xl:w-3/4 flex items-center justify-start"
      style="margin-top: 0"
    >
      <div class="flex flex-wrap h-full set-border">
        <button
          class="menu-btn"
          @click="goToHome"
          v-bind:class="{ active: openMenu === 1 }"
        >
          Home
        </button>
        <button
          class="menu-btn"
          @click="goToOverView"
          v-bind:class="{ active: openMenu === 2 }"
        >
          About us
        </button>
        <button
          class="menu-btn"
          @click="goToRoadMap"
          v-bind:class="{ active: openMenu === 3 }"
        >
          Features
        </button>
                <button
          class="menu-btn"
          @click="goToRoadMap"
          v-bind:class="{ active: openMenu === 3 }"
        >
          Tokenomics
        </button>
                <button
          class="menu-btn"
          @click="goToRoadMap"
          v-bind:class="{ active: openMenu === 3 }"
        >
          Roadmap
        </button>
                <button
          class="menu-btn"
          @click="goToRoadMap"
          v-bind:class="{ active: openMenu === 3 }"
        >
          Our Team
        </button>
                <button
          class="menu-btn"
          @click="goToRoadMap"
          v-bind:class="{ active: openMenu === 3 }"
        >
          Support
        </button>
                <button
          class="menu-btn"
          @click="goToRoadMap"
          v-bind:class="{ active: openMenu === 3 }"
        >
          Docs
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/common/Modal.vue'
import {  mapActions } from 'vuex'
export default {
  name: 'TheHeader',
  components: {
    modal: Modal,
  },
  // created() {
  //   window.addEventListener('scroll', this.handleScrollActiveMenu);
  // },
  // destroyed() {
  //   window.removeEventListener('scroll', this.handleScrollActiveMenu);
  // },
  data() {
    return {
      scrollY: 0,
      showing: false,
      openMenu: 1,
      windowWidth: 0,
      showResourceOptions: false,
      checked: false
    }
  },
  computed: {
    isSticky() {
      return this.scrollY > 10
    },
    headerClassList() {
      return this.isSticky ? 'on-sticky' : ''
    },
  },
  methods: {
    ...mapActions({
      setLang: 'i18n/setLang',
    }),
    onScroll() {
      this.scrollY = window.scrollY
      if (this.scrollY < document.getElementById('overview').offsetTop - 200) {
        this.openMenu = 1
      } else if (
        this.scrollY <
        document.getElementById('roadmap').offsetTop - 200
      ) {
        this.openMenu = 2
      } else {
        this.openMenu = 3
      }
    },
    goToHome() {
      this.$emit('goToHome')
      this.openMenu = 1
    },
    goToOverView() {
      this.$emit('goToOverView')
      this.openMenu = 2
    },
    goToRoadMap() {
      this.$emit('goToRoadMap')
      this.openMenu = 3
    },
    goToTeam() {
      this.$emit('goToTeam')
      this.openMenu = 4
    },
    goToTechBlog() {
      this.$emit('goToTechBlog')
    },
    gotoApp() {
      window.location.href = 'https://beta.app.goen.finance/?tab=staking';
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth
    window.addEventListener('scroll', this.onScroll)
  },
  watch: {
    checked: function (val) {
      // console.log('object :>> ', val);
      let lang;
      if (val) {
        lang = 'jp';
      }
      else {
        lang = 'en';
      }
      this.setLang(lang)
      this.$router.push({ path: `${this.$router.currentRoute.path}?lang=${lang}` })
    },
  },
}
</script>

<style lang="scss" scoped>
.logo {
  width: 48px;
  height: 48px;
  display: inline-block;
}
.nav {
  padding: 17px 24px 20px 70px;
  background-color: #060010;
}
.dropdown-menu-btn {
  font-weight: 800;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  transition: all 0.3s ease 0s;
  text-align: center;
}

.menu-btn {
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  padding: 0 25px;
  opacity: 0.8;
  margin-bottom: -10px;
  &.active {
    color: #ffe925;
    opacity: 1;
    font-weight: bolder;
  }
}
.menu-btn:hover {
  transform: scale(1.05);
  transition: transform 200ms ease-in-out;
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
  line-height: 16px;
  border-radius: 50px;
}
.logo-text {
  font-size: 24px;
  padding-right: 25px;
}
.go-app {
  display: block;
  margin-top: 24px;
  color: #ffe925;
  border: solid 1px #ffe925;
  padding: 10px;
  border-radius: 20px;
  margin-bottom: 20px;
}

</style>
