var React=require('react');
var action=require('./../actions/GroceryItemActionCreator.jsx');

module.exports=React.createClass({
    getInitialState:function(){
        return{input:""};
    },
    handleChange:function(e){
       this.setState({input:e.target.value}); 
    },
    addItem:function(e){
        e.preventDefault();
      //console.log("addig Item",this.state.input);
        action.add({
            name:this.state.input
        });
        this.setState({
            input:''
        })
        
    },
    render:function(){
        return(
            <div className="grocery-addItem">
                <form onSubmit={this.addItem}>
                <input 
                    type="text"
                    value={this.state.input}
                    onChange={this.handleChange}
                    />
                <button>Add Item</button>
                </form>
            </div>
        )
    }
})