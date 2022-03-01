<template>
  <BaseDialog v-bind="$attrs" v-on="$listeners">
    <div v-if="item" class="dialog-body d-flex">
      <div class="flex justify-around">
        <div class="item-info">
          <img v-if='item.image' :src="item.image" class="mr-5 m-auto" width="120" height="160" />
          <div class="mb-4 text-center">
            <p class="person-name mb-1">{{item.name}}</p>
             <p>
              <span>{{item.position.name}}</span>
            </p>
          </div>
        </div>
        <div class="info-member">
          <div class="description" v-html="item.description" v-if="item.description">
          </div>
          <div v-if="item.skill">
            <span class="title">Skill</span>
            <span v-html="item.skill" />
          </div>
        </div>
      </div>
    </div>
    <button class="but-close">
      <img src="../assets/img/close-icon.png" alt="close" @click="closeDialog" />
    </button>

  </BaseDialog>
</template>

<script>
import BaseDialog from "./BaseDialog.vue";

export default {
  name: "PersonDialog",
  components: {
    BaseDialog
  },
  props: {
    item: {
      type: Object,
    },
    confirmText: {
      type: String,
      default: "Ok"
    }
  },
  methods:{
    closeDialog: function (){
      this.$emit('update:active', false);
      const el = document.body;
      el.classList.remove('hidden-scroll');
    }
  }
};
</script>

<style lang="scss" scoped>

.dialog-body{
  padding: 50px 42px 29px 54px;
  color: #cccccc;
}

.dialog-body .person-name {
  font-weight: 600;
  color: #FCFCFC;
  font-size: 18px;
  line-height: 20px;
  text-transform: uppercase;
}
.dialog-body .person-title {
  color: #FCFCFC;
  font-size: 18px;
  line-height: 20px;
}
.dialog-body .description, .dialog-body {
  font-size: 14px;
  line-height: 20px;
  color: #EFF0F7;
}
.dialog-body .title {
  font-size: 14px;
  line-height: 20px;
  color: #DF0176;
}
.dialog-footer button {
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
}
.but-close {
  position: absolute;
  top: 21px;
  right: 21px;
  z-index: 10;
  padding: 0;
  color: rgba(0,0,0,.45);
  font-weight: 700;
  line-height: 1;
  text-decoration: none;
  background: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  -webkit-transition: color .3s;
  transition: color .3s;
}

.info-member {
  flex: 6;
  .description {
    padding: 0 20px;
    line-height: 36px;
  }
}

.info-member::-webkit-scrollbar {
  width: 3px;
}

.info-member::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px #A0A3BD;
}

.info-member::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.item-info {
  flex: 1;

  img {
    border: 4px solid #753A88;
    border-radius: 10px;
    margin-bottom: 15px !important;
  }
}
</style>
