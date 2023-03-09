import React from 'react'

const List = (props) => {
  return (
    <>
   <div className='main1'>
        <div className='sub1'>
        <img src={props.payload[0].photo} alt="" />
        <h3>{props.payload[0].name}</h3>
        <h3>{props.payload[0].age}</h3>
        <h3>{props.payload[0].phoneno}</h3>
        </div>
        <div className='sub1'>
        <img src={props.payload[1].photo} alt="" />
        <h3>{props.payload[1].name}</h3>
        <h3>{props.payload[1].age}</h3>
        <h3>{props.payload[1].phoneno}</h3>
        </div>
        <div className='sub1' >
        <img src={props.payload[2].photo} alt="" />
        <h3>{props.payload[2].name}</h3>
        <h3>{props.payload[2].age}</h3>
        <h3>{props.payload[2].phoneno}</h3>
        </div>
        <div className='sub1' >
        <img src={props.payload[3].photo} alt="" />
        <h3>{props.payload[3].name}</h3>
        <h3>{props.payload[3].age}</h3>
        <h3>{props.payload[3].phoneno}</h3>
        </div>
        <div className='sub1' >
        <img src={props.payload[4].photo} alt="" />
        <h3>{props.payload[4].name}</h3>
        <h3>{props.payload[4].age}</h3>
        <h3>{props.payload[4].phoneno}</h3>
        </div >
        </div>
        

        <div className='main2'> 
        <div className='sub2' >
        <img src={props.payload[5].photo} alt="" />
        <h3>{props.payload[5].movie}</h3>
        <h3>{props.payload[5].yor}</h3>
        <h3>{props.payload[5].coll}</h3>
        </div>
        <div className='sub2' >
        <img src={props.payload[6].photo} alt="" />
        <h3>{props.payload[6].movie}</h3>
        <h3>{props.payload[6].yor}</h3>
        <h3>{props.payload[6].coll}</h3>
        </div>
        <div className='sub2' >
        <img src={props.payload[7].photo} alt="" />
        <h3>{props.payload[7].movie}</h3>
        <h3>{props.payload[7].yor}</h3>
        <h3>{props.payload[7].coll}</h3>
        </div>
        <div className='sub2' >
        <img src={props.payload[8].photo} alt="" />
        <h3>{props.payload[8].movie}</h3>
        <h3>{props.payload[8].yor}</h3>
        <h3>{props.payload[8].coll}</h3>
        </div>
        <div className='sub2' >
        <img src={props.payload[9].photo} alt="" />
        <h3>{props.payload[9].movie}</h3>
        <h3>{props.payload[9].yor}</h3>
        <h3>{props.payload[9].coll}</h3>
        </div>
        </div>
        <div className='main3'>
        <div className='sub3' >
        <img src={props.payload[10].photo} alt="" />
        <h3>{props.payload[10].mobile}</h3>
        <h3>{props.payload[10].price}</h3>
        <h3>{props.payload[10].ram}</h3>
        </div>
        <div className='sub3' >
        <img src={props.payload[11].photo} alt="" />
        <h3>{props.payload[11].mobile}</h3>
        <h3>{props.payload[11].price}</h3>
        <h3>{props.payload[11].ram}</h3>
        </div>
        <div className='sub3' >
        <img src={props.payload[12].photo} alt="" />
        <h3>{props.payload[12].mobile}</h3>
        <h3>{props.payload[12].price}</h3>
        <h3>{props.payload[12].ram}</h3>
        </div>
        <div className='sub3' >
        <img src={props.payload[13].photo} alt="" />
        <h3>{props.payload[13].mobile}</h3>
        <h3>{props.payload[13].price}</h3>
        <h3>{props.payload[13].ram}</h3>
        </div>
        <div className='sub3' >
        <img src={props.payload[14].photo} alt="" />
        <h3>{props.payload[14].mobile}</h3>
        <h3>{props.payload[14].price}</h3>
        <h3>{props.payload[14].ram}</h3>
        </div>
        </div>

        <div className='main4'>
        <div className='sub4' >
        <img src={props.payload[15].photo} alt="" />
        <h3>{props.payload[15].laptop}</h3>
        <h3>{props.payload[15].price}</h3>
        <h3>{props.payload[15].space}</h3>
        </div>
        <div className='sub4' >
        <img src={props.payload[16].photo} alt="" />
        <h3>{props.payload[16].laptop}</h3>
        <h3>{props.payload[16].price}</h3>
        <h3>{props.payload[16].space}</h3>
        </div>
        <div className='sub4' >
        <img src={props.payload[17].photo} alt="" />
        <h3>{props.payload[17].laptop}</h3>
        <h3>{props.payload[17].price}</h3>
        <h3>{props.payload[17].space}</h3>
        </div>
        <div className='sub4' >
        <img src={props.payload[18].photo} alt="" />
        <h3>{props.payload[18].laptop}</h3>
        <h3>{props.payload[18].price}</h3>
        <h3>{props.payload[18].space}</h3>
        </div>
        <div className='sub4' >
        <img src={props.payload[19].photo} alt="" />
        <h3>{props.payload[19].laptop}</h3>
        <h3>{props.payload[19].price}</h3>
        <h3>{props.payload[19].space}</h3>
        </div>

        </div>
        
       

        



   
    
    </>
    
  )
}

export default List