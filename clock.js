const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("span");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  //시간과 초, 둘 중 하나라도 10보다 작으면 0 붙여주기
  if (hours < 10 || minutes < 10) {
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : `${hours}`}:${
      minutes < 10 ? `0${minutes}` : `${minutes}`
    }`;
  } else {
    //그게 아니라면 그냥 현재 시각 보여주기.
    clockTitle.innerText = `${hours}:${minutes}`;
  }
}

// 초기화 과정
// 현재 시각 가져오기
// 1000ms = 1s
// 인터벌 1초 주기
function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
