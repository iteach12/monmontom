const title = document.querySelector("#title");

let result = 0;

function countOfClick(){
    result += 1;
    console.log(`클릭 횟수는 ${result} 입니다.`);
}


title.addEventListener("click", countOfClick);