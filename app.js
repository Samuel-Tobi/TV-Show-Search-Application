const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchValue = form.elements.query.value;
  const config = { params: { q: searchValue } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  createImages(res.data);
  form.elements.query.value = "";
});

const createImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
