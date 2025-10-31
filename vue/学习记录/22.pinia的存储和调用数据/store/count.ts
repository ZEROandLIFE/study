import { defineStore } from 'pinia'
export const useCountStore = defineStore("count", {
  //actions里面放置的是一个一个的方法，用于响应组件中的“动作”
  actions: {
    increment(value: number) {
      this.sum += value;
    },
    decrease(value: number) {this.sum -= value;},
  },
  state() {
    return {
      sum: 6,
    };
  },
});