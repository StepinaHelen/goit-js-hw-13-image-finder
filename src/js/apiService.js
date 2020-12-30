
export default {
     inputValue: "",
     page: 1,
   fetchArticles() {
   const apiKey = "19698449-a55de06fd7d84dcee8317752d";
    const url =`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${apiKey}`
       return fetch(url).then(response => response.json()).then(({ hits }) => {
        
           this.incrementPage();
           return hits
       }).catch(error => console.log(error))
    }  ,
   get query() {
       return this.inputValue
    },
   set query(newQuery) {
this.inputValue=newQuery
   },
    resetPage() {
       this.page=1
    },
    incrementPage() {
       this.page += 1;  
    }
};