import React from "react"
import GetThoughts from "./components/GetThoughts"
import PostThoughts from './components/PostThoughts'

// import {formatRelative } from 'date-fns'


export const App = () => {
  return (
    <div className="BoxContainer">
      <PostThoughts />
      <GetThoughts />
    </div>
  )
}


//  <TaskForm />