export function tagItem(tag) {
  return `<div class="tags"><p>${tag}</p><button class="remove-button" data-tag=${tag}>×</button></div>`;
}
