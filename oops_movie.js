class Movie{
    constructor(title,studio,rating){              
        this.title=title;
        this.studio=studio;
        if(rating===null || rating===undefined)       //condition to check when rating is null chaange to PG 
        {
           return this.rating="PG"
        }
        else
        {
           return this.rating=rating
        }
    }
    getPG(array)                                      //to fetch the array where rating = PG
        {
            let result=[]
            for(var i=0;i<array.length;i++)
            {
                if(array[i].rating==="PG")
                {
                    result.push(array[i])
                }
                
            }
            return result
        }
}
var film1=new Movie("Casino Royale","Eon Productions","PG13")              
var film2=new Movie("Avatar","20th Century Fox")     
var film3=new Movie("Jurassic Park","Universal","PG14")
var film4=new Movie("Thunivu","Zee studios") 
var array=[film1,film2,film3,film4] 
console.log(film1.getPG(array))
