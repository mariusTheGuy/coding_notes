// https://www.cryptonator.com/api
//      Example request for BTC-USD
//      https://api.cryptonator.com/api/ticker/btc-usd
// POSTMAN >
//      GET > https://api.cryptonator.com/api/ticker/btc-usd

//      BODY tag contains the PAYLOAD, the response we get back
//      2 HEADERS tag
//          1 allow you to set headers
//          1 contains the metadata of the request/response
//      Status: 200 OK, 404 Not Found, 405 Not Allowed...
//      Paramns tag:
//          you can add the params of the query there
//          saving you to write the '&' and '='

// FETCH HTTP REQUEST
/*
// returns a promise
fetch("https://api.cryptonator.com/api/ticker/btc-usd")
  .then((resp) => {
    // console.log(`Resp: ${resp}`);
    // when the first header is resolved, the Body has not 
    // been parsed yet, 'fetch' resolve inmediatly
    console.log("RESPONSE, WAITING TO PARSE...: ", resp);
    // to ensure receiving the data we are interested to,
    // we are going to return a new promise
    return resp.json();
  })
  .then((data) => {
    console.log("DATA PARSED...", data);
    console.log("Price: ", data.ticker.price);
  })
  .catch((e) => {
    console.log("Error! ", e);
  });
*/

// FETCH With 'async'
/*
const fetchBitCoinPrice = async () => {
  try {
    const res = await fetch("https://api.cryptonator.com/api/ticker/btc-usd");
    console.log(res);
    const data = await res.json();
    console.log(data);
    console.log("Price: ", data.ticker.price);
  } catch (e) {
    console.log("Error: ", e);
  }
};
fetchBitCoinPrice();
*/

// AXIOS
// https://github.com/axios/axios
/* <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>*/
// it parse the data at 1st place
/* 
axios
  .get("https://api.cryptonator.com/api/ticker/btc-usd")
  .then((res) => {
    console.log("Price: ", res.data.ticker.price);
  })
  .catch((e) => {
    console.log("Error: ", e);
  });
*/
//   AXIOS with 'async'
/*
const axiosBitcoinPrice = async () => {
  try {
    const res = await axios.get(
      "https://api.cryptonator.com/api/ticker/btc-usd"
    );
    console.log("Price: ", res.data.ticker.price);
  } catch (e) {
    console.log("Error: ", e);
  }
};
axiosBitcoinPrice();
*/
// AXIOS configuring Headers
// We can pass a 2nd argument, where we can pass configuration informatio
// API used for this example:
// this API requires the 'header Accept: "application/json"
// https://icanhazdadjoke.com/api

const getDadjoke = async () => {
  //   let res = await axios.get("https://icanhazdadjoke.com/api");
  //   console.log(res);
  try {
    const config = { headers: { Accept: "application/json" } };
    res = await axios.get("https://icanhazdadjoke.com/", config);
    //   console.log(res);
    //   console.log("Here it is a joke: ", res.data.joke);
    return res.data.joke;
  } catch (e) {
    return "No jokes found!";
  }
};
// getDadjoke();
const jokes = document.querySelector("#jokes");
const jokeButton = document.querySelector("button");

const addNewJoke = async () => {
  const newJoke = document.createElement("LI");
  newJoke.append(await getDadjoke());
  jokes.append(newJoke);
};

jokeButton.addEventListener("click", addNewJoke);
