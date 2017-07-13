var mongoose=require('mongoose');
var GroceryItem=require('./models/GroceryItem.js');

mongoose.connect('mongodb://localhost/grocery',function(){
    console.log('Connected..');
   // mongoose.connection.db.dropDatabase();
    
    var items=[];
    
    items.forEach(function(item){
        new GroceryItem(item).save();
    })
})