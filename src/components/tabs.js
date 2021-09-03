import axios from "axios"
import { topics } from "../mocks/data"

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  // create elements
  const topicsDiv = document.createElement('div')
  const tabDiv = document.createElement('div')

  // class name, text
  topicsDiv.classList.add('topics')
  tabDiv.classList.add('tab')
  tabDiv.textContent = `${topics}`

  // structure
  topicsDiv.appendChild(tabDiv)

  return topicsDiv;
}


const tabsContainer = document.querySelector('.tabs-container')

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`http://localhost:5000/api/topics`)
  .then(resp => {
    //console.log(resp.data);
    const getTopic = Tabs(resp.data);
    tabsContainer.appendChild(getTopic);
  })
  .catch(err => {
    console.log('this is an error')
  })
}


export { Tabs, tabsAppender }
