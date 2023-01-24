import { jobItem } from "./components/jobItem.js";
import { tagItem } from "./components/tagItem.js";

export const filterTags = new Set();

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    const jobs = data.map((_) => jobItem(_));

    const list = document.querySelector(".job-list");
    list.innerHTML = jobs.join("");

    function updateFilterWith(filterTags) {
      if (!filterTags.length) {
        document.querySelector(".filter").remove();
        return;
      }
      generateFilterItems(filterTags);
      updateJobsList();
    }

    function updateJobsList() {
      document.querySelector(".job-list").innerHTML = data
        .filter((job) => {
          const tags = [
            job.role,
            job.level,
            ...job.languages.concat(job.tools),
          ];
          return Array.from(filterTags).every((item) => tags.includes(item));
        })
        .map((_) => jobItem(_))
        .join("");

      document.querySelectorAll(".job-tags p").forEach((tag) => {
        tag.addEventListener("click", handleChoose);
      });
    }

    function generateFilterItems(list) {
      const filter = document.querySelector(".filter");
      const tags = Array.from(list).map((tag) => tagItem(tag));
      const clearBtn = `<button class="clear-button">Clear</button>`;
      filter.innerHTML = `<div>${tags.join("")}</div>${clearBtn}`;

      const clearBtnNode = document.querySelector(".clear-button");
      clearBtnNode.addEventListener("click", handleClear);

      const deleteBtns = document.querySelectorAll(".remove-button");
      deleteBtns.forEach((btn) => {
        btn.addEventListener("click", handleDelete);
      });
    }

    function handleClear() {
      filterTags.clear();
      document.querySelector(".filter").remove();
      updateJobsList();
    }

    function handleDelete(e) {
      const tagText = e.target.dataset.tag;
      filterTags.delete(tagText);
      updateFilterWith(Array.from(filterTags));
    }

    function handleChoose(e) {
      const tagText = e.target.textContent;
      if (!filterTags.size) {
        list.insertAdjacentHTML("beforebegin", `<div class="filter"></div>`);
      }
      filterTags.add(tagText);
      updateFilterWith(Array.from(filterTags));
    }

    const tags = document.querySelectorAll(".job-tags p");
    tags.forEach((tag) => {
      tag.addEventListener("click", handleChoose);
    });
  })
  .catch((err) => {
    console.log(err);
  });
