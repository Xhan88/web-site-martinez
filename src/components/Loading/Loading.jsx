import { CircularProgress } from '@mui/material'
import React, { useEffect } from 'react'
import '../Loading/Loading.css'

const Loading = () => {
    
  useEffect(() => {
    return () => {
    }
  })
  return (
    <div className='loading'>
      <CircularProgress />
    </div>
  )
}

export default Loading

