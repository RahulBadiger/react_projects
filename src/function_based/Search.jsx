import React, { Component } from 'react'
import Refresh from './Refresh';
import Status from './Status';
const Search=()=>{
    return(
        <>
        <div className='search'>
        <Status/>
        <Refresh/>
        </div>
       
        
        </>
    )
}
export default Search;