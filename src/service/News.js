
class News{
    _apiKey = 'ed81c1caab5c4e66bce4161ac218c0cc';
   
    getResourse = async(url) =>{
        let res = await fetch(url);
        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }
        
        return await res.json();
    }

    getNews = () =>{
        return this.getResourse(`https://newsapi.org/v2/top-headlines?country=us&apiKey=ed81c1caab5c4e66bce4161ac218c0cc`); 
        
    }
    
}
export default News;