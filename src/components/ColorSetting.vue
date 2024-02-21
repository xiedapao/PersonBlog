<script  lang="ts">
import {
  defineComponent,
  reactive,
  ref
} from "vue";
import  useUserStore  from '@/store'
export default defineComponent({
  name: "ColorSetting",
  components: {
    
  },
  computed: {
    
  },
  watch: {
    colorActive: {
        handler: function (newVal, oldVal) {
          this.changeGlobalColorByActive()
        },
    }
  },
  mounted() {
  },
  methods: {
    isShowMenu() {
      this.showMenu = !this.showMenu;
    },
    changeBackgroundColor(item: any,index: number) {
      if(this.activeIndex === index) return;
        this.activeIndex = index;
        if(item.background) {
          document.documentElement.style.setProperty(
            '--global-background-color',
            item.background
          );
          document.documentElement.style.setProperty(
            '--global-background-image',
            'none'
          );
        }else {
          document.documentElement.style.setProperty(
            '--global-background-image',
            'url(' + this.getImageUrl(item.img) + ')'
          );
        }
        
    },

    changeGlobalColor(item: any,index: number) {
      if(this.activeIndex2 === index) return;
        this.activeIndex2 = index;
        if(item.color) {
          document.documentElement.style.setProperty(
            '--theme-color',
            item.color
          );
      }
    },

    changeGlobalColorByActive() {
      if(this.activeIndex2 !== 5) return;
        if(this.colorActive) {
          document.documentElement.style.setProperty(
            '--theme-color',
            this.colorActive
          );
      }
    },

  },
  setup(props, context) {
    const userStore = useUserStore();
    const state = ref(true);
    let activeIndex = ref(0);
    let activeIndex2 = ref(2);
    let colorActive = ref("#128f45");
    let showMenu = ref(false);
    const backgroundList = reactive([
      {
        id: 1,
        background: "#c5dcdc",
      },
      {
        id: 2,
        background: "#151D26",
      },
      {
        id: 3,
        background: "#000",
      },
      {
        id: 4,
        img: 'background1.png',
      },
      {
        id: 5,
        img: 'background2.png',
      },
      {
        id: 6,
        img: 'background3.png',
      },
    ]);
    const colorList = reactive([
      {
        id: 1,
        color: "#563493",
      },
      {
        id: 2,
        color: "#1da1f2",
      },
      {
        id: 3,
        color: "#128f45",
      },
      {
        id: 4,
        color: '#ac1a41',
      },
      {
        id: 5,
        color: '#cf8b18',
      },
      {
        id: 6,
        color: colorActive,
      },
    ]);
    const getImageUrl = (name: String) => {
        return new URL(`../assets/static/${name}`, import.meta.url).href
    }
    return {
      state,
      activeIndex,
      activeIndex2,
      showMenu,
      backgroundList,
      colorList,
      colorActive,
      getImageUrl
    };
  },
});


</script>

<template>
    <div class="pos-rel setting-pos">
        <div class="setting-button" @click="isShowMenu">
          <i-ep-Tools v-if="!showMenu" class="vam font-size-icon" />
          <i-ep-CloseBold v-else class="vam font-size-icon" />
        </div>
        <div v-if="showMenu" class="pos-abs m-auto setting-box" style="transform: translateX(0px); transition: all 0.5s ease 0s;">
          <section class="tac m-t-xl">
            <h4 style="color: #fff" class="font-weight-normal r-m-p">背景</h4>
            <div class="bd-list m-l-sm">
              <div :class="['bd-item', activeIndex === index ? 'active' : '']" :style="{'backgroundImage': 'url(' + getImageUrl(item.img) + ')','background-color': item.background}"  @click="changeBackgroundColor(item,index)" v-for="(item, index) in backgroundList" :key="item.id">
                <i-ep-Check v-if="activeIndex === index" class="all-percent-h-w global-font-color"/>
              </div>
            </div>
             <h4 style="color: #fff" class="font-weight-normal r-m-p">颜色</h4>
            <div class="bd-list m-l-sm">
              <div :class="['bd-item','pos-re', activeIndex2 === index ? 'active' : '']" :style="{'background-color': item.color}"  @click="changeGlobalColor(item,index)" v-for="(item, index) in colorList" :key="item.id">
                <i-ep-Check v-if="activeIndex2 === index && activeIndex2 !== 5" class="all-percent-h-w color-white"/>
                <input class="all-percent-h-w pos-re" style="opacity: 0;z-index:10;cursor: pointer;" v-if="item.id == 6" type="color" v-model="colorActive" />
                <div  style="z-index:8" v-if="item.id == 6" class="all-percent-w pos-half color-white pos-ab font-size-normal">自定义</div>
              </div>
            </div>
          </section>
        </div>
    </div>
</template>

<style lang="less" scoped>
.setting-pos {
  z-index: 10;
  box-sizing: border-box;
  .setting-button {
    cursor: pointer;
    position: absolute;
    background-color: var(--theme-color);
    color: #fff;
    >svg {
      padding: 7px;
    }
  }
  .setting-box {
    >section {
      .bd-list {
        display: flex;
        justify-content: space-between;
        flex-flow: row nowrap;
        .bd-item {
          width:42px;
          height:32px;
          margin: 0 2px;
          padding: 1px;
          cursor: pointer;
          .pos-half {
            top: 50%;
            transform: translateY(-50%);
          }
        }
        .active {
             border: 1px solid var(--theme-color);
        }
      }
      
    }
  }
}
</style>
