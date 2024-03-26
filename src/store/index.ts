import { defineStore } from 'pinia';

 const useUserStore = defineStore({
    id: 'first', // id必填，且需要唯一
    state: () => {
        return {
            name: '张三',
            navBackGroundColor: "rgb(197, 220, 220)",
            themeColor: "#563493"
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
