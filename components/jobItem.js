export function jobItem(_) {
  const li = document.createElement("li");
  li.dataset.key = _.id;

  const img = document.createElement("img");
  img.src = _.logo;
  img.alt = `${_.company} icon`;

  const jobTagsParent = document.createElement("div");
  const jobTags = [_.role, _.level, ..._.languages.concat(_.tools)].map((i) => {
    const p = document.createElement("p");
    p.textContent = i;
    return p;
  });
  jobTagsParent.classList = "job-tags";
  jobTagsParent.append(...jobTags);

  const middleInfo = document.createElement("div");
  middleInfo.classList = "middle-info";

  const detailInfo = document.createElement("div");
  detailInfo.classList = "detail-info";
  detailInfo.innerHTML =
    `<p>${_.postedAt}</p>` +
    "<p>·</p>" +
    `<p>${_.contract}</p>` +
    "<p>·</p>" +
    `<p>${_.location}</p>`;

  const section = document.createElement("section");

  const header = document.createElement("header");
  const h3 = document.createElement("h3");
  h3.textContent = _.company;
  const p_header = document.createElement("p");
  if (_.new) {
    p_header.innerHTML += `<span class="span-new">NEW!</span>`;
  }
  if (_.featured) {
    p_header.innerHTML += `<span class="span-featured">FEATURED</span>`;
  }
  header.append(h3, p_header);

  const h2 = document.createElement("h2");
  h2.textContent = _.position;

  middleInfo.append(header, h2, detailInfo);

  section.append(middleInfo, jobTagsParent);

  li.append(img, section);

  return li;
}
