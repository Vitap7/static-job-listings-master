import { jobItem } from "./components/jobItem.js";
import { tagItem } from "./components/tagItem.js";

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    const jobs = data.map((_) => jobItem(_));
    const list = document.querySelector(".job-list");
    list.innerHTML = jobs.join("");

    const filterTags = new Set();

    function handleChoose(e) {
      const tagText = e.target.textContent;
      if (!filterTags.size) {
        list.insertAdjacentHTML("beforebegin", `<div class="filter"></div>`);
      }
      filterTags.add(tagText);
      updateFilterWith(Array.from(filterTags));
    }

    function updateFilterWith(list) {
      const filter = document.querySelector(".filter");
      const tags = Array.from(list).map((tag) => tagItem(tag));
      const clearBtn = `<button class="clear-button">Clear</button>`;
      filter.innerHTML = `<div>${tags.join("")}</div>${clearBtn}`;
    }

    const tags = document.querySelectorAll(".job-tags p");
    tags.forEach((tag) => {
      tag.addEventListener("click", handleChoose);
    });
  })
  .catch((err) => {
    console.log(err);
  });
