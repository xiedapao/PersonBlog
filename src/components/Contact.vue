<script  lang="ts">
import {
  defineComponent,
  reactive,
  ref
} from "vue";
import  useUserStore  from '@/store'
export default defineComponent({
  name: "Me",
  components: {
    
  },
  computed: {
    
  },
  watch: {
    
  },
  mounted() {
  },
  methods: {
    
  },
  setup(props, context) {
    const userStore = useUserStore();
    let wordArr = reactive(['欢','迎','来','到','我','的','个','人','主','页','！']);
    const meInfo = [
      {
        icon: "UserFilled",
        word: "男/28岁/(1995.05)",
      },
      {
        icon: "Briefcase",
        word: "通信工程/本科",
      },
      {
        icon: "Stamp",
        word: "中南大学",
      },
      {
        icon: "position",
        word: "长沙市岳麓区",
      },
      {
        icon: "UserFilled",
        word: "xiedapao.github.io",
        url: "https://github.com/xiedapao"
      },
      {
        icon: "UserFilled",
        word: "CISAW认证(安全软件)",
        url: "https://ryrzcisaw.isccc.gov.cn/Home/Login?ReturnURL=/Home/Default/"
      },
    ];
    const introduceInfo = [
      {
          text: "具有PC端、移动端、h5、前后端分离及微信公众号、小程序的开发经验。了解webGL，具有对接地图开发经验，开源社交分享组件、后台管理设计方案至GitHub。熟练使 用HTML、CSS、JavaScript构建高性能的Web应用程序。"
      },
      {
          text: "熟悉JavaScript、ES6、预编译TypeScript、jQuery类库，原生BOM、DOM对象。熟练运用Ajax、Json进行数据交互，常用Axios。"
      },
      {
          text: "熟练Flex布局，预处理器Sass、Less，熟悉AntDesign、ElementUI、BootStrap等常用前端UI框架。"
      },
      {
          text: "熟悉React、Vue框架进行模块化开发单页应用，状态管理库Redux、Vuex、Pinia，了解Angular、SeaJs、React-Native。"
      },
      {
          text: "能快速进行跨多尺寸、多平台设备开发，了解PhotoShop、CorelDraw。"
      },
      {
          text: "能使用WebPack搭建开发环境，并使用过Express和NodeJs开发过数据接口，Postman工具进行接口测试。"
      },
      {
          text: "熟悉使用Git版本控制，Charles抓包，掌握Linux Shell基本命令。了解Http协议、Jenkins、Docker、MySQL。"
      },
      {
          text: "拥有良好的代码编程习惯，较强的学习能力和解决问题的能力，能保证项目在周期内完成的同时也兼顾了质量。"
      },
    ]
    return {
      wordArr,
      meInfo,
      introduceInfo
    };
  },
});


</script>

<template>
    <div class="me" >
        <header style="height: 730px;" class="me-header">
          <div class="pos-re tac all-percent-h-w">
            <div class="banner pos-re z-1 all-percent-h-w">
              <div class="banner-content color-white">
                <h2 class="font-weight-normal">
                  <span :style="`animation-delay: ${index*0.2}s;`" class="beat" v-for="(item,index) of wordArr" :key="index">{{item}}</span>
                </h2>
              </div>
            </div>
            <div class="banner-background pos-ab t-0 all-percent-h-w"></div>
            <button class="btn-down pos-re z-1"><span></span></button>
          </div>
        </header>
        <section class="pos-re" style="top: 730px;margin-bottom: -12px; padding-bottom: 12px; background: rgb(21, 29, 38);">
          <div class="jsx-4071316007 tac">
            <h1 class="jsx-4071316007 color-white pos-re font-weight-small inline-block">谢宇航－WEB前端</h1>
            <h2 class="jsx-4071316007 color-white font-weight-small font-family-niconne font-size-xl">Xieyuhang WEB front-end</h2>
          </div>
          <div class="layout-container">
            <h3 class="global-font-color r-m-p tac-l">
              <i-ep-UserFilled class="vam"/><span class="vam m-l-sm">关于我</span>
            </h3>
            <ul class="row-content color-white">
              <li class="row">
                <el-row :gutter="5" justify="space-between">
                  <el-col class="row-item" v-for="(item,index) in meInfo" :key="item.icon" :xs="24" :sm="12" :md="8" :lg="8" :xl="1">
                    <i-ep-UserFilled class="vam" v-if="index === 0"/>
                    <i-ep-Briefcase class="vam" v-if="index === 1"/>
                    <svg class="vam font-size-md" v-if="index === 2" viewBox="0 0 1280 1024" width="1.2em" height="1.2em"><defs></defs>
                      <path d="M1244.68 306.4L686.8 135c-30.4-9.34-63.2-9.34-93.58 0L35.32 306.4c-47.08 14.46-47.08 76.72 0 91.18l97.26 29.88c-21.34 26.38-34.46 58.56-35.76 93.8C77.56 532.3 64 552.22 64 576c0 21.56 11.36 39.7 27.72 51.3L40.66 857.06C36.22 877.04 51.42 896 71.88 896H184.1c20.48 0 35.68-18.96 31.24-38.94L164.28 627.3C180.64 615.7 192 597.56 192 576c0-23.14-12.94-42.5-31.32-53.74 1.52-30.04 16.88-56.6 41.38-73.44L593.2 569c18.12 5.56 52.88 12.5 93.58 0l557.9-171.4c47.1-14.48 47.1-76.72 0-91.2zm-539.1 323.78c-57.06 17.52-105.68 7.84-131.18 0l-290.04-89.1L256 768c0 70.7 171.92 128 384 128s384-57.3 384-128l-28.36-226.94-290.06 89.12z" fill="currentColor">
                      </path>
                    </svg>
                    <i-ep-Position class="vam" v-if="index === 3"/>
                    <svg v-if="index === 4" class="vam" viewBox="0 0 1024 1024" width="1.2em" height="1.2em"><defs></defs>
                      <path d="M0 520.886c0-69.368 13.51-135.697 40.498-199.02 26.987-63.323 63.322-117.826 109.006-163.51 45.65-45.65 100.154-81.985 163.51-109.006A502.289 502.289 0 01512 8.92c69.335 0 135.663 13.477 198.986 40.497 63.356 26.988 117.86 63.323 163.51 109.007 45.684 45.65 82.02 100.154 109.006 163.51A502.289 502.289 0 011024 520.852c0 111.318-32.504 211.472-97.511 300.494-64.975 88.989-148.48 150.825-250.484 185.476-5.351 0-9.348-.99-11.99-2.973-2.676-1.982-4.196-3.997-4.526-6.012a59.458 59.458 0 01-.495-8.984 7.663 7.663 0 01-.991-3.006v-128.99c0-40.63-14.336-75.314-43.008-103.986 76.667-13.345 134.011-41.819 171.999-85.487 37.987-43.669 57.013-96.52 57.013-158.522 0-58.005-18.663-108.346-56.022-150.99 13.345-42.678 11-87.668-6.97-135.003-18.697-1.322-39.011 1.85-61.01 9.513-22 7.663-38.318 14.831-49.02 21.47-10.637 6.673-20.316 13.016-28.97 19.027-38.68-10.669-81.854-16.02-129.486-16.02-47.7 0-90.509 5.351-128.529 16.02-7.333-5.35-15.855-11.164-25.5-17.507-9.68-6.342-26.493-14.005-50.507-22.99-23.982-9.018-45.65-12.85-65.008-11.495-18.663 47.996-20.645 93.646-5.979 136.984-36.665 42.678-54.998 92.986-54.998 150.99 0 62.002 18.663 114.689 55.99 157.994 37.326 43.339 94.67 72.01 171.998 86.016a142.303 142.303 0 00-39.969 70.029c-56.683 13.972-96.355 3.963-119.015-30.06-42.017-61.308-79.674-83.307-113.003-65.965-4.69 4.657-3.997 9.48 1.982 14.501 6.012 4.988 14.996 11.66 27.02 19.985 11.99 8.357 20.976 17.507 26.987 27.515.661 1.322 2.51 6.177 5.517 14.502a831.917 831.917 0 008.985 23.981c2.973 7.663 8.654 16.186 17.011 25.5 8.324 9.349 18.003 17.178 29.003 23.52 11 6.309 26.161 11 45.485 14.006 19.324 2.972 41.323 3.138 65.998.495v100.484c0 .991-.165 2.643-.495 5.021-.33 2.312-.991 3.964-1.982 4.955-.991 1.024-2.345 2.015-4.03 3.039a12.52 12.52 0 01-6.474 1.486c-2.676 0-6.012-.33-10.009-.99-101.343-35.345-183.825-97.182-247.51-185.51C31.842 731.037 0 631.577 0 520.92z" fill="currentColor">
                      </path>
                    </svg>
                    <i-ep-StarFilled class="vam" v-if="index === 5"/>
                    <span v-if="!item.url" class="vam m-l-sm">{{item.word}}</span>
                    <a v-else :href="item.url" target="_blank" class="vam m-l-sm color-white">{{item.word}}</a>
                  </el-col>
                </el-row>
              </li>
              <li class="row" style="margin-bottom: 2%">
                <p class="tac-l" v-for="(item,index) in introduceInfo" :key="index"><i-ep-SuccessFilled class="vam" /><span class="vam m-l-sm">{{item.text}}</span></p>
              </li>
            </ul>
          </div>
        </section>
        
    </div>
</template>

<style lang="less" scoped>
.me {
  .me-header {
    width: calc(100% - 300px);
    position: fixed;
    .banner {
      display: table;
      .banner-content {
        display: table-cell;
        vertical-align: middle;
        width: 100%;
        .beat {
            animation: word_dance 1.5s ease infinite;
            display: inline-block;
        }
      }
    }
    
    .btn-down {
      bottom: 80px;
      width: 56px;
      height: 32px;
      border: none;
      background-color: var(--color-transparent);
      animation: 1s ease 0s infinite alternate none running home_ani-u148crt__EHaeA;
      &::before {
          content: "";
          display: inline-block;
          width: 25px;
          height: 4px;
          background-color: var(--color-white);
          border-radius: 5px;
          transition: all 0.5s ease 0s;
          transform: rotate(215deg);
          transform-origin: 0px center;
      }
      &::after {
          content: "";
          display: inline-block;
          width: 25px;
          height: 4px;
          background-color: var(--color-white);
          border-radius: 5px;
          transition: all 0.5s ease 0s;
          transform: rotate(-215deg);
          transform-origin: 21px -32px;
      }
      >span {
        &::before{
          content: "";
          display: inline-block;
          width: 25px;
          height: 4px;
          background-color: var(--color-white);
          border-radius: 5px;
          transition: all 0.5s ease 0s;
          transform: rotate(215deg);
          transform-origin: 0px 0px;
        }
        &::after{
          content: "";
          display: inline-block;
          width: 25px;
          height: 4px;
          background-color: var(--color-white);
          border-radius: 5px;
          transition: all 0.5s ease 0s;
          transform: rotate(-215deg);
          transform-origin: 15px -14px;
        }
      }
    }
  }
  .banner-background {
    animation: me_background_anima 20s linear infinite;
    background-color: var(--color-primary);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    background-image: url("../assets/static/bg-1.png");
  }
  
  .jsx-4071316007 {
    padding: 2% 0;
    &>h1 {
      margin: 0.2em 0;
      &::after {
        position: absolute;
        bottom: -18px;
        left: 0;
        content: '';
        display: inline-block;
        width: 100%;
        border-bottom: 1px dotted var(--color-white);
      }
    }
    &>h2 {
      margin: 0.2em 0;
    }
  }

  .layout-container {
    width: 80%;
    margin: auto;

    .row-content {
      margin-left: 25px;
      list-style-type: none;
      .row {
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px;
          .row-item {
              margin-top: 2%;
              text-align: left;
              a:hover {
                color: var(--theme-color);
              }
          }
      }
    }
  }


  @keyframes home_ani-u148crt__EHaeA {
    0% {
        transform: translateY(5px);
    }
    50% {
        transform: translateY(0px);
    }
    100% {
        transform: translateY(-5px);
    }
  }

  @keyframes me_background_anima {
    0% {
        background-image: url(../assets/static/bg-1.png);
    }
    25% {
        background-image: url(../assets/static/bg-2.png);
    }

    50% {
        background-image: url(../assets/static/bg-3.png);
    }
    75% {
        background-image: url(../assets/static/bg-4.png);
    }
    100% {
        background-image: url(../assets/static/bg-5.png);
    }
  }
  @keyframes word_dance {
    0% {
      transform: translateY(5px);
    }

    25% {
        transform: translateY(10px);
    }
    50% {
        transform: translateY(0);
    }
    75% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(-5px);
    }
  }
}
</style>
