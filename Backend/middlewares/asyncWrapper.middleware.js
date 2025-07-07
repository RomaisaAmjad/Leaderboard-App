exports.asyncWrapper = (fn)=>{
    return (req, res, next) => {
        try{
            return fn(req, res, next);
        }
        catch(err){
            next(err);
        }
    }
}