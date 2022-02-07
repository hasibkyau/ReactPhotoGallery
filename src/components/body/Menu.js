import React, {Component} from "react";
import DISHES from "../../data/dishes";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import Comments from "./Comments";

class Menu extends Component{
    state = {
        dishes: DISHES,
        selectedDish: null,
        comments: null,
        showComment: false,
    }

    onDishSelect = (dish) =>{
        this.setState({
            selectedDish: dish,
        });
        //console.log(dish);
    }

    showComment = (comment) =>{
        //console.log(comment);
        this.setState({
            comments: comment,
            showComment: !this.state.showComment,
        });
    }

    render(){
        const menu = this.state.dishes.map(item => {
            return(
                <MenuItem 
                 dish = {item} 
                 key = {item.id}
                 onDishSelect = {this.onDishSelect}
                />
            );
        })
        let dishDetail = null;
        if(this.state.selectedDish != null){
            dishDetail = <DishDetail dish = {this.state.selectedDish} showComment = {this.showComment}/>
        }

        let comments = null;
        if(this.state.comments != null && this.state.showComment == true){
            comments = this.state.comments.map(data => {
                return(
                    
                    <Comments comment = {data} key = {data.id}/>
                );
            })
        }
        else{
            comments = null;
        }
        

        return(
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                    <div className="col-6">
                        {dishDetail}
                        {comments}
                    </div>
                </div>
            </div>
        );
    }
} 

export default Menu;