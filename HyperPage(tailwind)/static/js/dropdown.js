const btnLanguage = document.getElementById("btn-lenguaje");
const languageBox = document.getElementById("language-content");
const btnApps = document.getElementById("btn-apps");
const appsBox = document.getElementById("apps-dropdown-content");
const btnAccount = document.getElementById("account-container");
const accountBox = document.getElementById("account-dropdown");
const btnNotification = document.getElementById("btn-notif");
const notifBox = document.getElementById("notification-dropdown-container");
const btnTasks = document.getElementById("btn-content-tasks");
const tasksBox = document.getElementById("content-block-container-tasks");
const fridayBox = document.getElementById("tasks-content-friday");
const upcomingBox = document.getElementById("tasks-content-up");
btnLanguage.onclick = function show() {
  languageBox.classList.toggle("show");
};
btnApps.onclick = function showApps() {
  appsBox.classList.toggle("show");
};
btnAccount.onclick = function showAccount() {
  accountBox.classList.toggle("show");
};
btnNotification.onclick = function showNotif() {
  notifBox.classList.toggle("show");
};
btnTasks.onclick = function displayTasks() {
  const timeOut = 300;
  if (!tasksBox.classList.contains("displayTasks")) {
    tasksBox.classList.add("displayTasks");
    fridayBox.classList.add("moveUp");
    upcomingBox.classList.add("moveUp");
  } else {
    let timeFun = setTimeout(() => {
      tasksBox.classList.remove("displayTasks");
    }, timeOut);
    fridayBox.classList.remove("moveUp");
    upcomingBox.classList.remove("moveUp");
    fridayBox.classList.add("moveBack");
    upcomingBox.classList.add("moveBack");
  }
};
