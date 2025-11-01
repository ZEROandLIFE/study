// import { defineStore } from 'pinia'
// import axios from 'axios';
// export const useLoveStore = defineStore('love', {
//     actions: {
//         async gettalk(id:number) {
//              try {
//                let response = await axios.get("https://v1.hitokoto.cn/");
//                this.loveList.push({
//                  id: id,
//                  skr: response.data.hitokoto,
//                });
//              } catch (error) {}

//        }
//     },
//     state() {
//         return {
//           loveList: [
//             { skr: "第1句", id: 1 },
//             { skr: "第2句", id: 2 },
//             { skr: "第3句", id: 3 },
//           ],
//         };
//     }
// })
//实际上上面这一堆可以用hooks写法，也就是vue3的组合式来写
import { defineStore } from "pinia";
import axios from "axios";
import { reactive } from "vue";
export const useLoveStore = ('love',() => {
  const loveList = reactive([
    { skr: "第1句", id: 1 },
    { skr: "第2句", id: 2 },
    { skr: "第3句", id: 3 },
  ]);

  async function gettalk(id: number) {
    try {
      let response = await axios.get("https://v1.hitokoto.cn/");
      loveList.push({
        id: id,
        skr: response.data.hitokoto,
      });
    } catch (error) {}
  }
  return { loveList, gettalk };
})
