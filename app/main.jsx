var React=require('react');
console.log('In main.jsx');
var ReactDOM=require('react-dom');

var GroceryItemList=require('./components/GroceryItemList.jsx');

var GroceryItemStore=require('./stores/GloceryItemStore.jsx');
    
var initial=GroceryItemStore.getItems();

function render(){
ReactDOM.render(<GroceryItemList items={initial}/>,app);    
}
GroceryItemStore.onChange(function(items){
    initial=items;
    render();
})
render();
