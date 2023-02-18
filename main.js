const openSlideBtn = document.querySelector(".slide-toggle-btn");
const closeSlideBtn = document.querySelector(".close-slide-btn");
const sidebar = document.querySelector("#sidebar-nav");
const mainContent = document.querySelector("#main");

function openSidebar() {
  sidebar.style.width = "28rem";
  mainContent.style.transform = "translateX(28rem)";
}

function closeSidebar() {
  sidebar.style.width = "0";
  mainContent.style.transform = "translateX(0)";
}
openSlideBtn.addEventListener("click", () => {
  openSidebar();
});
closeSlideBtn.addEventListener("click", () => {
  closeSidebar();
});
