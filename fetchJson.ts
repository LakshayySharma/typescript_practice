import axios from "axios";

let res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
console.log(res.data);
