import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
  return (
    <center>
        <h1><i>Oops, Something went wrong 🤦🏻‍♀️</i></h1>
        <h3><i>{`😯${error.status}: ${error.statusText}😯`}</i></h3>
    </center>
  )
}

export default Error