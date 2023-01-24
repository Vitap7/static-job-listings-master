import { jobItem } from "./components/jobItem.js";

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    const jobs = data.map((_) => jobItem(_));
    const list = document.querySelector(".job-list");
    list.innerHTML = jobs.join("");

    function toggleChosen(e) {
      e.target.classList.toggle("chosen");
    }

    const tags = document.querySelectorAll(".job-tags p");
    tags.forEach((tag) => {
      tag.addEventListener("click", toggleChosen);
    });
  })
  .catch((err) => {
    console.log(err);
  });
