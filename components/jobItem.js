export function jobItem(_) {
  return `
    <li data-key="${_.id}">
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
            <p>·</p>
            <p>${_.contract}</p>
            <p>·</p>
            <p>${_.location}</p>
          </div>
        </div>

        <div class="job-tags">
          <p>${_.role}</p>
          <p>${_.level}</p>${_.languages
    .concat(_.tools)
    .map((_) => `<p>${_}</p>`)
    .join("")}
        </div>
      </section>
    </li>`;
}
