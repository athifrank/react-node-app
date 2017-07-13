var React=require('react');
var GroceryItem=require('./GroceryItem.jsx');
var GroceryListAddItem=require('./GroceryListAddItem.jsx');

module.exports=React.createClass({
    render:function(){
        return(
            <div>
                <h1>Grocery List</h1>
                <div>
                {this.props.items.map((item,index)=>{
                        return(
                            <GroceryItem items={item} key={"item"+index}/>
                        )
                    })}
                </div>
                <GroceryListAddItem />
            </div>
        )
    }
})