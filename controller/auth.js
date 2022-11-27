exports.grettings = async(req,res)=>{
    res.send(`<h1>Hello Mr Hasan</h1>`)


}

exports.overview = async(req,res)=>{
    res.json({status:"success",message:"We love Express"})

}
exports.about = async(req,res)=>{
   res.json({status:"successfully",message:"We love Express JS MongoDB Atlas"})
   //res.send(`<h1>About Mr Milton</h1>`)

}