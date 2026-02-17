import styles from './FoodInput.module.css'

const FoodInput = ({handleOnKeyDown})=>{
 return (
  <input type="text"  placeholder="Enter Grocery here" 
  className={styles.inputBox}
  onKeyDown={handleOnKeyDown}/>
 )
}
export default FoodInput;