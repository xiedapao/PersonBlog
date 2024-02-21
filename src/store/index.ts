import { defineStore } from 'pinia';

 const useUserStore = defineStore("userStore",{
    id: 'user', // id必填，且需要唯一
    state: () => {
        return {
            name: '张三',
            navBackGroundColor: "rgb(197, 220, 220)",
        };
    },
    getters: {
        getThemeColor(state) {
          return state.themeColor;
        },
    },
    actions: {
        updateName(name: string) {
            this.name = name;
        },
    },
});

export default useUserStore;
