const {Router}=require('express');
const router=new Router();
router.get('/test',(req,res)=>{
    const data={
        name:'Ricardo',
        website:'faztweb.com'
    };
    res.jason(data)
});
module.exports=router;