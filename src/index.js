import './styles.scss';
import updateMarkup from './js/updateArticle.js'
import refs from './js/refs.js'
import toastr from './js/toastr.js';
// import  "basiclightbox/dist/basicLightbox.min.css";
import apiService from "./js/apiService.js"
import openModel from "./js/openModal.js"
require('bootstrap');

// import * as basicLightbox from 'basiclightbox'

refs.searchForm.addEventListener("submit", event => {
    event.preventDefault()
    const form =event.currentTarget
     apiService.query = form.elements.query.value;
    refs.listContainer.innerHTML = "";

    
  
    apiService.resetPage();
    fetchArticles();
      form.reset();
}
)

refs.buttonLoadMore.addEventListener("click",fetchArticles)

function fetchArticles() 
 {   refs.buttonLoadMore.classList.add("is-hidden"),
        refs.spinner.classList.remove("is-hidden")
    apiService.fetchArticles().then(hits => {
        if (hits.length > 0) {
            updateMarkup(hits),
                refs.buttonLoadMore.classList.remove("is-hidden")
            
              window.scrollTo({
        //   top: document.documentElement.offsetHeight,
          top: 100000000,
            behavior: 'smooth'
});
    // или можно применить это:
    // window.scrollTo(0, scrollHeight)
        }
    else if(hits.length === 0) { toastr.error('Please enter the correct value!', 'Inconceivable!')}
}
  ).finally(() => {  refs.spinner.classList.add("is-hidden")}
    
    )
}








