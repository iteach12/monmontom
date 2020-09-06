const body = document.querySelector("body");
const IMAGE_NUMBER = 6;

//api에서 호출할 경우에는 이미지를 로딩하고 한 번에 띄워줄 수 있도록 아래의 펑션을 넣어주자.
//로컬에서는 필요없을 듯.
function handleImgLoad() {
  console.log("finished loading.");
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = "https://source.unsplash.com/random/2880x1800";
  image.classList.add("bgImage");

  //로컬에서는 필요 없을 듯.
  //api에서 사진 불러올 때는 쓰자.
  image.addEventListener("loadend", handleImgLoad);
  //이거

  body.appendChild(image);
}

function getRandom() {
  const number = Math.floor(Math.random() * IMAGE_NUMBER);
  return number;
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();
