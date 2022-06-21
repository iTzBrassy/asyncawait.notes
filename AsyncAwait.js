// // ASYNC AWAIT // //

// original promise
movePlayer(100, "Left")
  .then(() => movePlayer(400, "Left"))
  .then(() => movePlayer(10, "Right"))
  .then(() => movePlayer(330, "Left"));

// async function promise
// using await to wait until the previous promise is complete before moving on to the next. Instead of chaining ".then"
async function playerStart() {
  await movePlayer(100, "Left"); // pause
  await movePlayer(400, "Left"); // pause
  await moveplayer(10, "Right"); // pause
  await movePlayer(330, "Left"); // pause
}

// original fetch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((resp) => resp.json())
  .then(console.log);

// async function fetch
async function fetchUsers() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  // .then(resp => resp.json())
  // .then(console.log)
  console.log(data);
}

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json())))
  .then((array) => {
    console.log("users", array[0]);
    console.log("posts", array[1]);
    console.log("albums", array[2]);
  })
  .catch("oops");

const getData = async function () {
    // for async functions use try/catch to catch errors
    try {
        // destructuring the array of urls
      const [users, posts, albums] = await Promise.all(
        urls.map((url) => fetch(url).then((resp) => resp.json()))
      );
    //   instead of logging "array[i]" you can use the destructured parameters
      console.log("users", users);
      console.log("posts", posts);
      console.log("albums", albums);
    } catch (err) {
        console.log('oops', err);
    }
}
