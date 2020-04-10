import React, { memo, useCallback, useState } from 'react'


const CounterCreator = ({ onSubmit }) => {

  const [title, setTitle] = useState('')


  const onChangeTitle = useCallback(e => {
    setTitle(e.target.value)
  }, [])

  const onSubmitCounter = useCallback(e => {
    e.preventDefault()
    
    onSubmit({ title })

  }, [onSubmit, title])

  return (
    <>
      <form onSubmit={onSubmitCounter}>
        <input type="text" onChange={onChangeTitle} value={title} />
        <button type="submit">
          Agregar Contador
        </button>
      </form>
    </>
  )
}

export default memo(CounterCreator)