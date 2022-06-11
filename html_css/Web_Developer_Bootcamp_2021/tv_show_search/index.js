// API
// https://www.tvmaze.com/api

const tvForm = document.querySelector("#searchForm");

tvForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.dir(e);
  console.dir(tvForm);
  // 'query' is the name I put in the input of the form
  //   SubmitEvent > target > elements > query;
  //   console.log(tvForm.elements.query.value);
  const searchTerm = tvForm.elements.query.value;
  tvForm.elements.query.value = "";
  // it is better to add 'params' which will be add to the query string
  // on axios config object
  const config = { params: { q: searchTerm } };

  //   let response = await axios.get(
  //     ` https://api.tvmaze.com/search/shows?q=${searchTerm}`
  //   );
  let response = await axios.get(
    ` https://api.tvmaze.com/search/shows?`,
    config
  );

  //   console.log(response.data[0].show.image.medium);
  //   let imgURL = response.data[0].show.image.medium;
  let shows = response.data;
  showImages(shows);
  //   let img = document.createElement("IMG");
  //   img.src = imgURL;
  //   document.body.append(img);
});

const showImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      let img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
