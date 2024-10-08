const jwt = require("jsonwebtoken")
const secret_key = "mern-maket"
const auth = async(req,res,next) =>{
    if(req.method === "GET"){
        return next()
    }

    const token = await req.headers.authorization.split("")[1]

    if(!token){
        return res.status(400).json({message:"トークンがありません"})
    }

    try{
       const decoded = jwt.verify(token,secret_key)
       req.body.email = decoded.email
       return next()
    }catch(err){
       return res.status(400).json({message:"トークンが正しくないのでログインしてください"})
    }
}

module.exports = auth