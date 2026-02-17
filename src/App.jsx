import Container from "./components/Container";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import "./App.css";
import { useState } from "react";

function App() {
  //  let foodItems =[]

  // let textStateArr = useState("Food Items entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  // let [textToShow,setTextState]= useState("Food Items entered by user");    //destructuring

  let [foodItems,setFoodItems] = useState([])

  const onKeyDown = (e) => {
    if(e.key==='Enter'){
      let newFoodItem = e.target.value;
      e.target.value =''
      let newItems = [...foodItems,newFoodItem]
      setFoodItems(newItems)
    }
    // setTextState( e.target.value)
  };

  return (
    <>
      <Container>
        <h1 className="heading">Grocery Checklist</h1>
        <FoodInput handleOnKeyDown={onKeyDown}></FoodInput>
        {/* <p>{textToShow}</p> */}
        <ErrorMessage food={foodItems}></ErrorMessage>
        <FoodItems food={foodItems}></FoodItems>
      </Container>

      {/* <Container>
      <p>Abouve food items are  healthy foods which are really beneficial for your health</p>
    </Container> */}
    </>
  );
}

export default App;
