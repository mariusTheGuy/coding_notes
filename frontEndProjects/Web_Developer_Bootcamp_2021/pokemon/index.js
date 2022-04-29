const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const container = document.querySelector("#container");

for (let i = 1; i < 152; i++) {
  const pokemon = document.createElement("div");
  const img = document.createElement("img");

  pokemon.classList.add("pokemon");
  img.src = `${baseURL}${i}.png`;

  const label = document.createElement("span");
  label.innerText = `#${i}`;
  pokemon.append(img, label);
  container.appendChild(pokemon);
}

const ul = document.querySelector("ul");
ul.addEventListener("click", (e) => {
  // if you want to make sure that an 'li' was clicked,
  // do this check
  //   console.dir(e.target); // ... nodeName: "LI" ...
  e.target.nodeName === "LI" && e.target.remove();
});

const myform = document.querySelector("form");
myform.addEventListener("submit", (e) => {
  e.preventDefault();
  const tweet = myform.elements.tweet;
  addTweet(tweet.value);
  tweet.value = "";
});

function addTweet(tweet) {
  const li = document.createElement("li");
  li.innerText = tweet;
  ul.append(li);
}
