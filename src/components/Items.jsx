import style from './Items.module.css'

const Items = ({foodItems,bought,handleBuyButton})=>{
  return(
    <li className={`${style.isItem} list-group-item ${bought && 'active text-decoration-line-through'}`}>
      {foodItems}
    <button className={`${style.btn} btn btn-info `}
      onClick={handleBuyButton}>Done</button>
    </li>
   
  )
}
export default Items;