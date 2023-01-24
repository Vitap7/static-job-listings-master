import { jobItem } from "./components/jobItem.js";

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    const jobs = data.map((_) => jobItem(_));
    const list = document.querySelector(".job-list");
    list.innerHTML = jobs.join("");

    const filterTags = new Set();

    function toggleChosen(e) {
      const result = e.target.classList.toggle("chosen");
      const tagText = e.target.textContent;

      if (result) {
        filterTags.add(tagText);
        tags.forEach((tag) => {
          if (tagText === tag.textContent) {
            tag.classList.add("chosen");
          }
        });
      } else {
        filterTags.delete(tagText);
        tags.forEach((tag) => {
          if (tagText === tag.textContent) {
            tag.classList.remove("chosen");
          }
        });
      }
      console.log(filterTags);
    }

    const tags = document.querySelectorAll(".job-tags p");
    tags.forEach((tag) => {
      tag.addEventListener("click", toggleChosen);
    });
  })
  .catch((err) => {
    console.log(err);
  });
