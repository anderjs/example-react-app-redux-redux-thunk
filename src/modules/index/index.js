import React from 'react'
import Terminal from 'react-terminal-component'

const Index = () => {
  return (
    <React.Fragment>
      <Terminal 
        inputStr="Hola"
      />
    </React.Fragment>
  )
}

export default React.memo(Index)