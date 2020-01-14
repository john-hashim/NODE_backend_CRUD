const mongoose=require('mongoose');
 
var EmployeeSchema=mongoose.Schema({
    name:{type:String},
    position:{type:String},
    office:{type:String},
    salary:{type:String}
});

var Employee=module.exports=mongoose.model('Employee',EmployeeSchema);