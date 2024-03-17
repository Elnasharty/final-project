import React from 'react'
import  { useContext } from 'react'
import { authContext } from '../../Context/Auth/Auth'
export default function NotFound() {
  const {token}=   useContext(authContext)
  if (token ==null) {
    return<>
    <h1>Go to login</h1>
    </>
  return (
    <div>NotFound</div>
  )
}
}
