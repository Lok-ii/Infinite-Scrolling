let container = document.querySelector(".image-container");

let getImages = async () => {
  let images = await fetch(
    `https://api.unsplash.com/photos/random/?client_id=JLG2my6265GxYGDQzPO9sPhpU5uQHQq-z4_Z6QLCuM4&count=10`
  );
  let response = await images.json();

  response.map((e) => {
    let newElement = document.createElement("div");
    newElement.className = "image-card";
    newElement.style.backgroundImage = `url(${e.urls.regular})`;
    newElement.innerHTML = `
        <a href="${e.links.html}" class="text" target="_blank"><p class="description">${e.alt_description}</p>
        </a><a href="${e.urls.full}" target="_blank" class="download" download="image"><img src="${e.urls.full}" alt=""><i class="fa-solid fa-download"></i></a>`;

    container.appendChild(newElement);
  });
};

window.onload = () => {
  getImages();
};

window.addEventListener("scroll", () => {
  console.log(
    document.body.scrollHeight - window.innerHeight - Math.floor(window.scrollY)
  );
  console.log(Math.floor(window.scrollY));
  if (
    document.body.scrollHeight -
      window.innerHeight -
      Math.floor(window.scrollY) <=
    5
  ) {
    getImages();
  }
});
