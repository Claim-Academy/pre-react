import Header from './components/header';
import SelectCategories from './components/select-categories';

// DOM - Document Object Model
// DOM is a JS object that represents the nodes (parents/children) of the HTML document
const root = document.getElementById('root');

root.innerHTML = `${Header(

  // Simulate a 'props' object from React
  {text: "Hello Function Component"})}${SelectCategories()}`