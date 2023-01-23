fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    const jobs = data.map(
      (_) => `<li data-key="${_.id}">
      <img src="${_.logo}" />
      <section>
        <div class="middle-info">
          <header>
            <h3>${_.company}</h3>
            <p>
              ${_.new ? `<span class="span-new">NEW!</span>` : ""}${
        _.featured ? `<span class="span-featured">FEATURED</span>` : ""
      }
            </p>
          </header>

          <h2>${_.position}</h2>
          <div class="detail-info">
            <p>${_.postedAt}</p>
            <p>${_.contract}</p>
            <p>${_.location}</p>
          </div>
        </div>
        <p>
          <span>${_.role}</span><span>${_.level}</span>${_.languages
        .concat(_.tools)
        .map((_) => `<span>${_}</span>`)
        .join("")}
        </p>
      </section>
    </li>`
    );

    const list = document.querySelector(".job-list");
    list.innerHTML = jobs.join("");
  })
  .catch((err) => {
    console.log(err);
  });
