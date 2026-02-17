import { useState } from "react";
import Items from "./Items";

const FoodItems = ({food})=>{

  let [activeItems , setActiveItems]=useState([])
  let onBuyButton=(items)=>{
    let newActiveItem=[...activeItems,items]
    setActiveItems(newActiveItem)
  }


  return (
     <ul className="list-group">
        {food.map( items => 
        <Items key={items} 
        foodItems={items} 
        handleBuyButton={()=>onBuyButton(items)}
        bought={activeItems.includes(items)}></Items>
        ) }
      </ul>
  )
}
export default FoodItems;