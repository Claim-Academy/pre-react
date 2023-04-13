export default function SelectCategories() {

  // In React, each component must return a single element (parent)
  return `
    <div>
      <label for="categories" class="block text-gray-700 text-sm font-bold mb-2">Categories</label>
      <select class="w-full p-2 my-4">
        <option value="all">All</option>
      </select>
    </div>
  `
}