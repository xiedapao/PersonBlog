<script  lang="ts">
import {
  defineComponent,
  defineAsyncComponent,
  reactive,
  ref
} from "vue";
import  useUserStore  from '@/store'
export default defineComponent({
  name: "Nav",
  components: {
    
  },
  computed: {
    
  },
  watch: {
    
  },
  mounted() {
  },
  methods: {
    changeTab(item: any, index: any) {
      this.activeIndex = index;
      this.$router.push({
        path: item.path
      })
    }
  },
  setup(props, context) {
    const userStore = useUserStore();
    const state = reactive({
      visible: false,
      handleFlag: "",
      title: "首页",
      navBackGroundColor: userStore.navBackGroundColor,
      list: [
        {
          index: "1",
          path: "/me",
          name: "关于",
          eng: "Me"
        },
        {
          index: "2",
          path: "/articles",
          name: "文章",
          eng: "Articles"
        },
        {
          index: "3",
          path: "/project",
          name: "作品",
          eng: "Work"
        },
        {
          index: "4",
          path: "/timeline",
          name: "历程",
          eng: "Timeline"
        },
        {
          index: "5",
          path: "/message",
          name: "留言",
          eng: "Message"
        },
        {
          index: "6",
          path: "/contact",
          name: "联系",
          eng: "Contact"
        },
      ],
    });
    let activeIndex = ref(0);
    return {
      state,
      activeIndex
    };
  },
});


</script>

<template>
    <section  class="nav global-background-image-color" >
        <a class="head-sculpture">
          <div class="round bdr-half global-font-color">
            <i class="icon-circle pos-ab t-0"></i>
          </div>
          <h2 class="pos-ab r-m-p color-white bg-color-primary"><span class="vam">前端<br>一枚</span></h2>
          <img class="pos-ab" src="../assets/static/pic1.png" />
        </a>
        <ul class="nav-content">
          <li :class="{'active': activeIndex == index}" class="global-default-font-color" @click="changeTab(item,index)" v-for="(item, index) in state.list" :key="index">
            <div class="a-tag" :href="item.path" >
              <i-ep-UserFilled class="vam" v-if="item.index === '1'"/>
              <i-ep-GoodsFilled class="vam" v-if="item.index === '2'"/>
              <i-ep-Document class="vam" v-if="item.index === '3'"/>
              <i-ep-Promotion class="vam" v-if="item.index === '4'"/>
              <i-ep-Tools class="vam" v-if="item.index === '5'"/>
              <i-ep-Phone class="vam" v-if="item.index === '6'"/>
              <span>
                <span>{{item.name}} </span>
                <span class="m-l-r-xxs">/</span>
                <span class="eng">{{item.eng}}</span>
              </span>
            </div>
          </li>
        </ul>
    </section>
</template>

<style lang="less" scoped>
.nav {
  height: 100%;
  width: 300px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  position: relative;
  border-right: 1px solid #d2d2d2;
  .head-sculpture {
    width: 150px;
    display: block;
    margin: 1rem auto;
    position: relative;
    text-align: center;
    cursor: pointer;
    >h2 {
      top: 10px;
      left: 10px;
      width: 130px;
      height: 130px;
      border-radius: 50%;
      text-align: center;
      display: table;
      transform: rotateY(180deg);
      >span {
          display: table-cell;
          text-align: center;
      }
    }
    &:hover {
      >h2 {
        transition: 2s;
        transform: rotateY(0);
      }
      >img {
        display: table;
        transition: 2s;
        transform: rotateY(180deg);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }
    }
    
    .round {
      animation: menus_ani-udp1o62__clw 10s linear infinite;
      width: 150px;
      height: 150px;
      border: 1px solid var(--theme-color);
      border-radius: 50%;
      .icon-circle {
          left: 40px;
          border: 6px solid var(--theme-color);
          border-radius: 50%;
          top: 0;
      }
      >i {
        display: inline-block;
        vertical-align: middle;
      }
    }
    @keyframes menus_ani-udp1o62__clw {
        0% {
            transform: rotate(0deg);
            left: 10px;
        }
        100% {
            transform: rotate(1turn);
            left: 100px;
        }
    }
    >img {
      width: 130px;
      height: 130px;
      top: 10px;
      left: 10px;
      border-radius: 50%;
    }
  }
  ul li {
    list-style: none;
  }
  .nav-content {
    width: 98.5%;
    padding-left: 0;
    >li {
      width: 100%;
      color: var(--color-light-gray);
      cursor: pointer;
      .a-tag {
        width: 100%;
        padding: 10px 0;
        display: flex;
        .eng {
          font-family: Niconne-Regular;
          font-size: 18px;
        }
        >svg {
          margin: 3px 3px 0 95px;
        }
      }
      &:hover {
        border-right: 3px solid var(--theme-color);
        background-color: var(--color-light-gray);
        color: var(--theme-color);
        .a-tag {
          >svg {
            animation: li-hover 800ms;
	          animation-fill-mode:forwards;
          }
        }
      }
    }

    @keyframes li-hover {
        0% {
            margin: 3px 3px 0 95px;
        }
        100% {
           margin: 3px 3px 0 75px;
        }
    }

    .active {
        border-right: 3px solid var(--theme-color);
        background-color: var(--color-light-gray);
        color: var(--theme-color);
    }
  }
}
</style>
