const moon = document.querySelector(".moon");

moon.addEventListener("click", (e) => {
  const ele = e.target.classList;
  if (ele.contains("fa-moon")) {
    ele.remove("fa-moon");
    ele.add("fa-sun");
    document.documentElement.classList.add("dark");
    localStorage.setItem("sam", true);
  } else {
    ele.remove("fa-sun");
    ele.add("fa-moon");
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("sam");
  }
});

const init = () => {
  if (localStorage.getItem("sam")) {
    moon.classList.remove("fa-moon");
    moon.classList.add("fa-sun");
    document.documentElement.classList.add("dark");
  }
};
init();

const sr = ScrollReveal({
  origin: "top",
  distance: "120px",
  duration: 1500,
  delay: 500,
});

sr.reveal(
  ".Targets, .Tickets, .table, .Security, .Social-Info, .boxs-project, .boxs-file"
);
sr.reveal(
  ".Items, .Uploads, .Progress, .Social, .Widgets, .Skills, .boxs-Courses, .short-file",
  { origin: "left" }
);
sr.reveal(
  ".latest-news, .Tasks, .Reminders, .Latest, .Backup, .Activities, .boxs-frind, .box-Free",
  { origin: "right" }
);
