import React, { Component, useContext } from 'react';
import { DispatchProvider } from './App';
import { useStatus } from './AppHook';

const Testing = React.forwardRef((props) => {
   
    const isPresent = useStatus()

    function handleClick() {
        // console.log("is preset", isPresent)

    }
  
    return (
      null
    );
})
export default Testing
