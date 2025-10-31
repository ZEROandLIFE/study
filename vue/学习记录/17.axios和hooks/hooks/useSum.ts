import { ref } from "vue";
export default function () {
    let sum = ref(0);
    function changeSum() {
      sum.value++;
    }
    return  {sum,changeSum}
}
