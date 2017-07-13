var React=require('react');
var action=require('./../actions/GroceryItemActionCreator.jsx');

module.exports=React.createClass({
    togglePurchased:function(e){
        e.preventDefault();
        if(this.props.items.purchased){
            action.unbuy(this.props.items);
        }else{
            action.buy(this.props.items);
        }
    },
    delete:function(e){
        e.preventDefault();
        action.delete(this.props.items);
    },
    render:function(){
        return(
            <div className="grocery-item row">
                <div className="six columns">
                <h4 className={this.props.items.purchased ? "strikethrough":""}>{this.props.items.name}</h4>
                </div>
                <div>
                <form className="three columns" onSubmit={this.togglePurchased}>
                    <button className={this.props.items.purchased ? "":"button-primary"}>{this.props.items.purchased ? "Unbuy":"Buy"}</button>
                </form>
                <form className="three columns" onSubmit={this.delete}>
                    <button>&times;</button>
                </form>
                </div>
            </div>
        )
    }
})