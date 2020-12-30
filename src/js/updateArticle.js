import template from '../templates/template.hbs'
import refs from './refs.js'


function updateMarkup(articles) {
const markup = template(articles)
    refs.listContainer.insertAdjacentHTML('beforeend', markup)
}
export default updateMarkup;