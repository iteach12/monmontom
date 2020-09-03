const form = document.querySelector(".js-form"),
  input = form.querySelector("input");

const USER_LS = "currentUser";

function loadName() {
  const currentUserName = localStorage.getItem(USER_LS);
  if (currentUserName === null) {
  } else {
  }
}
function init() {
  loadName();
}

init();
