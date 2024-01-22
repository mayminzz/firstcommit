const url = "gallery.json";
// 객체화 시킴 response는 url 값을 가지고 있음
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const gallery = document.querySelector("#gallery");
    console.log(gallery);
    data.images.forEach((image) => {
      const imgElement = document.createElement("img");
      console.log(imgElement);
      imgElement.src = image.path;
      imgElement.alt = image.caption;
      gallery.appendChild(imgElement);
    });
  })
  .catch((err) => console.log(`Err: ${err}`));
