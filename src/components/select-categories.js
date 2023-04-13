export default function SelectCategories({categories}) {

  // In React, each component must return a single element (parent)
  return `
    <div>
      <label for="categories">Categories</label>
      <select>
        <option value="all">All</option>
        ${categories.map(category => `<option value="${category.toLowerCase()}">${category}</option>`).join('')}
      </select>
    </div>
  `
}