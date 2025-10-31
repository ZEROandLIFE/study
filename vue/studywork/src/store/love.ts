import { defineStore } from 'pinia'
import axios from 'axios';
export const useLoveStore = defineStore('love', {
    actions: {
        async gettalk(id:number) {
             try {
               let response = await axios.get("https://v1.hitokoto.cn/");
               this.loveList.push({
                 id: id,
                 skr: response.data.hitokoto,
               });
             } catch (error) {}
    
       } 
    },
    state() {
        return {
          loveList: [
            { skr: "第1句", id: 1 },
            { skr: "第2句", id: 2 },
            { skr: "第3句", id: 3 },
          ],
        };
    }
})