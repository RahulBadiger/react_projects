import React from 'react'
import { Link } from 'react-router-dom';

const Nav1 = () => {
  return (
    <>
    <Link to={"/"}>Home</Link> <br />
    <Link to={"/nav"}>signup</Link> <br />
    <Link to={"/sign"}>Nav</Link>
    </>
  )
}

export default Nav1