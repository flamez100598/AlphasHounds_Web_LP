<template>
  <div class='fixed right-0 bottom-0 z-20 flex'>
    <div v-if='dropdown' class='icon-container px-2'>
      <div class='flex justify-center py-2' style='cursor: pointer' @click='dropdown = false'>
        <img class='transform rotate-90 ' width='18px' src='~/assets/img/roadmap/right_double_arrow.png'>
      </div>
      <a v-for="(item, index) in links" :key="index" :href="item.link" target="_blank">
        <img class='py-2' :src="item.icon"/>
      </a>
    </div>
    <div v-else class='py-2 px-6' :class="{'hidden': dropdown}" style='background-color: rgba(0,0,0,0.4); cursor: pointer' @click='dropdown = true'>
      <img class='transform -rotate-90 ' width='18px' src='~/assets/img/roadmap/right_double_arrow.png'>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StickyIcon',
  data() {
    return {
      dropdown: true,
      links: [
        {
          icon: require('../assets/img/community/Twitter.png'),
          link: 'https://twitter.com/CreatorCTR'
        },
        {
          icon: require('../assets/img/community/medium.png'),
          link: 'https://creatorplatfor1.medium.com/'
        },
        {
          icon: require('../assets/img/community/telegram.png'),
          link: 'https://t.me/creatorplatform'
        },
        {
          icon: require('../assets/img/community/github.png'),
          link: 'https://github.com/creator-blockchains'
        },
        {
          icon: require('../assets/img/community/linkedin.png'),
          link: 'https://www.linkedin.com/company/creator-chain/'
        },
      ],
    }
  },
}
</script>

<style scoped>
.icon-container {
  border-radius: 10px;
}
</style>
