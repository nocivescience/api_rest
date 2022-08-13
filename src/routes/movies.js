const {Router}=require('express');
const router=new Router();
const _ =require('underscore');
const movies =require('../sample.json');
router.get('/',(req,res)=>{
    const id=movies.length-1;
    const {title,director,year,rating}=req.body;
    const newMovie={...req.body,id} //puede que aca tenga un problema con los tres puntos
    if(id&&title&&director&&year&&rating){
        movies.push(newMovie)
        res.json(movies)
    }else{
        res.status(500).json({
            error: 'There was an error.'
        })
    }
})
router.put('/:id',(req,res)=>{
    const {id}=req.params;
    const {title,director,year,rating}=req.body;
    if(id&&title&&director&&year&&rating){
        _.each(movies,(movie,i)=>{  //que es .each???
            if(movie.id===id){
                movie.title=title;
                movie.director=director;
                movie.year=year;
                movie.rating=rating;
            }
        })
        res.json(movies)
    }else{
        res.status(500).json({
            error:"There was an error."
        });
    }
})
router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    if(id){
        _.each(movies,(movie,i)=>{
            if(movie.id===id){
                movie.splice(i,1)
            }
        });
        res.json();
    }
})
module.exports=router;