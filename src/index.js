import Header from './components/header';
import SelectCategories from './components/select-categories';
import data from './data';

const categories = data.map(item => item.category);
const uniqueCategories = [...new Set(categories)];

// DOM - Document Object Model
// DOM is a JS object that represents the nodes (parents/children) of the HTML document
const root = document.getElementById('root');

root.innerHTML = `${Header(

  // Simulate a 'props' object from React
  {text: "Hello Function Component"})}${SelectCategories({
    categories: uniqueCategories
  })}`