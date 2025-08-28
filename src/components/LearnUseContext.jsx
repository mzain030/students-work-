import React from 'react'
import ChildThree from './ChildThree';
import Abc from './contexts/MakeCreateContect';

const LearnUseContext = () => {
    const name="zain";
    const age=98;
  return (
    <div>LearnUseContext


<Abc.Provider value={age+name}>
 <ChildThree/>
</Abc.Provider>
       


{/* useContext  */}
{/* 1) createcontext  */}
{/* 2) Provider  */}
{/* 3) usecontext  */}


    </div>
  )
}

export default LearnUseContext