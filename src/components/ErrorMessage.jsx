let ErrorMessage = ({food})=>{
 return(
    <>
    {food.length === 0 ?<h3>No items added yet</h3>:null }
    </>
  )
}
export default ErrorMessage;