import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from 'react-loader-spinner'

function Loader() {
  return (
    <TailSpin
      height="100"
      width="100"
      color='grey'
      ariaLabel='loading'
    />
  )
}

export default Loader