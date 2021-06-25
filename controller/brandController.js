import Helper from '../config/helper';
import Brand from '../models/Brand'
import User from '../models/User'
import multer from 'multer';
import mongoose from 'mongoose';


module.exports = {
    // createBrand:(req, res)=>{
    //     try {
        
    //         //const image = req.file.path;
    //         // if(typeof req.file === "undefined"){
    //         //     return Helper.response(res, 400, "Please add image.")                    
    //         // }
    //         const user = req.user.id
    //         const {title} = req.body;
    //         if(!title ) {
    //             return Helper.response(res, 400,  "Please title.")                    
    //         }
    //         const user = User.findById(req.user.id).select('-password');
    //         const BrandData = new Brand({
    //             title,
    //         })
    //         console.log(">>>>>>>", BrandData)
    //         //BrandData.image = image;
    //         BrandData.save(function(err, result){
    //             if(err){
    //              return res.status(400).json({ code: 400, message: "Something went wrong" })
    //             }else{
    //                 result.image = "http://localhost:3000" +"/uploads" + req.file.filename;
    //                 var ress = {brandData:result}
    //                 return Helper.response(res, 200, "Brand created sucessfully.", ress)                    
    //             }
    //         })
    //     } catch (error) {
    //         console.log(error)
    //         return Helper.response(res, 500, "Server error.");
    //     }
    // },
    updateBrand:(req,res)=>{
        // const BrandId = req.params.BrandId;
        const {title, body} = req.body;
        const BrandData = Brand.findOne({_id:req.params.BrandId})
        BrandData.exec((err,Brand)=>{
            if(err){
                return Helper.response(res, 400, "Something went wrong.")                    
            }
            Brand.title = title;
            Brand.body = body;
            Brand.save()
              .then(result =>{
                  var resss = {"BrandData" : result}
                  Helper.response(res, 200, "Brand details updated successfully", resss);
              })
        })
    },
    deleteBrand:(req,res)=>{
        const BrandId = req.params.BrandId;
        const BrandData = Brand.findOne({ _id: mongoose.Types.ObjectId(BrandId)})
        BrandData.exec((err, Brand) => {
          if (err || !Brand) {
            return Helper.response(res, 400, "Something went wrong.")                    
          }
          Brand.remove()
            .then(BrandData => {
                return Helper.response(res, 200, "Brand deleted sucessfully.");
            })
            .catch(err => {
               console.log(err)
                return Helper.response(res, 500, "Server error.");
            })
      
        })

    },
    getAllBrand:(req,res)=>{
        try {
            const BrandData =  Brand.find({},{title:1,imageLink:1 })
            BrandData.exec((err, Brand)=>{
                if(err || !BrandData){
                    return Helper.response(res, 400, "Brand not found.")                    
                }else{
                    var ress = {BrandData: Brand}
                    return Helper.response(res, 200, "All Brand List fetched.", ress)                    
                }
            })            
        } catch (error) {
            console.log(">>>>", error)
            return Helper.response(res, 500, "Server error.")           
        }

    },
    brandDetail:(req,res)=>{
        try {
            const brandId = req.params.brandId
            const BrandData =  Brand.find({_id:brandId},{title:1,imageLink:1, engineCapacity:1, mileage:1, Transmission:1, Weight:1})
            BrandData.exec((err, Brand)=>{
                if(err || !BrandData){
                    return Helper.response(res, 400, "Brand not found.")                    
                }else{
                    var ress = {BrandData: Brand}
                    return Helper.response(res, 200, " Brand detail fetched.", ress)                    
                }
            })            
        } catch (error) {
            // console.log(">>>>", error)
            return Helper.response(res, 500, "Server error.")           
        }

    }

}