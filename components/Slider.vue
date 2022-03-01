<template>
  <div style='padding-top: 10px'>
    <div class="slideshow-container w-full flex justify-center">
      <div v-for='(item, index) in images' class="mySlides fade w-10/12" :class="{ 'display-block': slideIndex === index }">
        <img :src="require(`~/assets/img/${item}`)">
      </div>

      <a class="prev" @click="prevImage"><img class='arrow' src='~/assets/img/slider/left_arrow.png'></a>
      <a class="next" @click="nextImage"><img class='arrow' src='~/assets/img/slider/right_arrow.png'></a>

    </div>
    <br>

    <div style="text-align:center">
      <span v-for='(item, index) in images' class="dot" :class="{'active': slideIndex === index}" @click="showImage(index)"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: ['images'],
  data () {
    return {
      slideIndex: 0,
    }
  },
  methods: {
    prevImage() {
      this.slideIndex = this.slideIndex === 0 ? this.images.length - 1 : this.slideIndex - 1
    },
    nextImage() {
      this.slideIndex = this.slideIndex === this.images.length - 1 ? 0 : this.slideIndex + 1
    },
    showImage(index) {
      this.slideIndex = index
    }
  },
}
</script>

<style scoped>
* {box-sizing: border-box}
.mySlides {display: none;}
img {vertical-align: middle; align-items: center;}

/* Slideshow container */
.slideshow-container {
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 20px;
  font-weight: lighter;
  margin-top: -22px;
  color: white;
  font-size: 25px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}
.prev {
  left: 0;
  border-radius: 3px 0 0 3px;
}
.arrow {
  height: 40px !important;
}
.arrow:hover {
  transform: scale(1.2);
  transition: transform 150ms ease-in-out;
}

.dot {
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 0 2px;
  background-color: #DEB1FF;
  border-radius: 50%;
  display: inline-block;
}
.dot:hover {
  transform: scale(1.2);
}
.active {
  width: 80px;
  border-radius: 16px;
  background: linear-gradient(90deg, #FB2B6D 0%, #753A88 100%);
}
.active:hover {
  transform: none;
}

.active:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next {font-size: 11px}
}
.slideshow-container img {
  width: 100%;
  height: 500px;
  border-radius: 10px;
  object-fit: scale-down;
}
.display-block {
  display: block !important;
}
</style>
