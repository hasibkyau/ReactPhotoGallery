import React, {Component} from "react";
import DISHES from "../../data/dishes";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";

class Menu extends Component{
    state = {
        dishes: DISHES,
        selectedDish: null,
    }

    onDishSelect = (dish) =>{
        this.setState({
            selectedDish: dish,
        });
        console.log(dish);
    }

    render(){
        const menu = this.state.dishes.map(item => {
            return(
                <div>
                <MenuItem 
                 dish = {item} 
                 key = {item.id}
                 onDishSelect = {this.onDishSelect}
                />
                </div>

            );
        })
        let dishDetail = null;
        if(this.state.selectedDish != null){
            dishDetail = <DishDetail dish = {this.state.selectedDish}/>
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                    <div className="col-6">
                        {dishDetail}
                    </div>
                </div>
            </div>
        );
    }
} 

export default Menu;