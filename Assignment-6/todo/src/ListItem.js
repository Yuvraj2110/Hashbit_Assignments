import React from 'react'

function ListItem(props) {
    const {item ,deleteItem}=props;
    
  return (
    <>
    <div style={{display:'flex', flexWrap:"wrap", margin:"5px" }}>
        <div  style={{margin:"2px"}}>
            #  {item[1]}
        </div>
        <button  style={{margin:"2px"}} onClick={()=>deleteItem(item[0])}>Del</button>
    </div>
    </>
  )
}

export default ListItem