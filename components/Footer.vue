<template>
  <div class='creator-footer creator-platform'>
    <div class="flex flex-wrap">
      <div class='w-full md:w-1/3 py-4 md:py-1 xs-hide leading-10'>
        <div>
          <img class='inline-block w-1/12' src="../assets/img/footer/mail.png"  />&nbsp;
          <a class='inline-block' href="mailto:info@goen.finance">
            info@goen.finance
          </a>
        </div>
      </div>
      <div class='w-full md:w-1/3 flex justify-center space-x-4 xl:space-x-6 py-4 md:py-1'>
          <a class='inline-block leading-10'>
            © 2021 GOEN
          </a>
      </div>
      <div class='w-full md:w-1/3 flex justify-center space-x-4 xl:space-x-6 py-4'>
        <a v-for="(item, index) in links" :key="index" :href="item.link" target="_blank">
          <img :src="item.icon" />
        </a>
      </div>
    </div>
  </div>

</template>
<script>
    export default {
      data() {
        return {
          links: [
                {
                icon: require('../assets/img/community/Twitter.png'),
                link: 'https://twitter.com/GOENfinance'
                },
                {
                    icon: require('../assets/img/community/medium.png'),
                    link: 'https://medium.com/@Goen_Finance'
                },
                {
                    icon: require('../assets/img/community/telegram.png'),
                    link: 'https://t.me/goen_global'
                },
                {
                    icon: require('../assets/img/community/github.png'),
                    link: ''
                },
                // {
                //     icon: require('../assets/img/community/linkedin.png'),
                //     link: ''
                // },
                // {
                //     icon: require('../assets/img/community/facebook.png'),
                //     link: ''
                // },
              ],
        }
      },
    }
</script>
<style lang="scss">
  .creator-footer {
    background-color:#202526;
    color: rgba(247, 254, 255, 0.75);
    @media only screen and (max-width: 768px) {
      padding-left: 30px;
      padding-right: 30px;
    }
    a {
      cursor: pointer;
    }
  }
.contact-text {
  font-size: 24px;
  font-style: normal;
  font-weight: 500;

  }
  @media only screen and (min-width: 1024px) {
    .creator-platform {
      padding: 2rem 5rem 1rem 5rem;
    }
  }
</style>
