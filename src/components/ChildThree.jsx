import React, { useContext } from 'react'
import Abc from './contexts/MakeCreateContect'

const ChildThree = () => {
    const Xyz=useContext(Abc)
  return (
    <div>ChildThree

        <h1>My name is {Xyz}</h1>
    </div>
  )
}

export default ChildThree