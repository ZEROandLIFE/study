import { reactive } from "vue";
import axios from "axios";
//https://dog.ceo/api/breed/pembroke/images/random
export default function () {
  let doglist = reactive([
    "https://images.dog.ceo/breeds/pembroke/n02113023_7275.jpg",
    "https://images.dog.ceo/breeds/pembroke/n02113023_15144.jpg",
  ]);

  async function getDog() {
    //第一种写法
    // axios
    //   .get("https://dog.ceo/api/breed/pembroke/images/random", {})
    //   .then((response) => {
    //     console.log(response.data.message);
    //     doglist.push(response.data.message);
    //   })
    //   .catch();
    //第二种写法
    try {
      let response = await axios.get(
        "https://dog.ceo/api/breed/pembroke/images/random"
      );
      console.log(response.data.message);
      doglist.push(response.data.message);
    } catch (error) {
      console.log(error);
    }
    }
    //向外部提供
    return {
        doglist,getDog
    }
}
