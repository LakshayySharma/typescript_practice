import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getUrl() {
  let res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
  let data: Post = res.data;
  let { userId, id, title, body } = data;
  printData({ userId, id, title, body });
}

function printData({ userId, id, title, body }: Post) {
  console.log(userId);
  console.log(id);
  console.log(title);
  console.log(body);
}

getUrl();

let weather = {
  max: 26,
  min: 8,
};

function printWeather({ max, min }: { max: number; min: number }): void {
  console.log(max);
  console.log(min);
}

printWeather(weather);

//object annotation
let { max, min }: { max: number; min: number } = weather;
