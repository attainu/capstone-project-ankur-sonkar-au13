import mongoose from 'mongoose';
// const fs = require('fs')
import fs from "fs";
const {ObjectId} = mongoose.Schema.Types
const brandschema = new mongoose.Schema({
    title:{
        type:String,
    },
    engineCapacity:{
        type:String,
    },
    mileage:{
        type:String, 
    },
    Transmission:{
        type:String,  
    },
    Weight:{
        type:String,
    },
    imageLink:{
        type:String,
    },
},{timestamps:true})

module.exports = mongoose.model("Brands", brandschema);


fs.readFile("brand.json", function (err, data) {
    // Check for errors 
    if (err) throw err;
    // Converting to JSON 
    const systems = JSON.parse(data);
    var systemData = systems.brandList;
    systemData.map(function (item) {
        mongoose.model('brands', brandschema).findOne({ title: item.title }, (err, systemResult) => {
        if (err) {
          console.log("Internal server error");
        } else if (!systemResult) {
          let system = new mongoose.model('brands', brandschema)(item);
          system.save((error, result) => {
            if (error) { console.log( "Internal server error"); }
            else {
              //Helper.response(res, 200, "system added");
              console.log("Inserted")
            }
          })
        } else {
          //console.log(systemResult);
          systemResult.title = item.title;
          systemResult.imageLink = item.imageLink;
          systemResult.engineCapacity = item.engineCapacity;
          systemResult.mileage = item.mileage;
          systemResult.Transmission = item.Transmission;
          systemResult.Weight = item.Weight;
          systemResult.save((error, result) => {
            if (error) { console.log( "Internal server error"); }
            else {
              console.log("Updated")
            }
          })
        }
      })
    })
});
