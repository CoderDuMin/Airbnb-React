import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from './router'

const App = memo(() => {
  return (
    <div>
      <header>header</header>
      {
        useRoutes(routes)
      }
      <footer>footer</footer>
    </div>
  )
})

export default App