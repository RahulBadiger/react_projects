import React from 'react'

const User = (props) => {
    let data=props.data
  return (
    <div>
        <table border={"2px"} style={{textAlign:"center"}}>
            <tr>
            <th>Username</th>
            <th>Age</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Photo</th>
            </tr>
            
                {data.map((x)=>{
                    return <tr>
                        <td>{x.username}</td>
                        <td>{x.age}</td>
                        <td>{x.gender}</td>
                        <td>{x.dob}</td>
                        <td><img src={x.photo}style={{height:"50px",width:"50px"}} alt="" /></td>
                    </tr>
                })}


        </table>
    </div>
  )
}

export default User