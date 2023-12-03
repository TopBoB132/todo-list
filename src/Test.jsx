import React from 'react' //rafc or rfc

export const Test = ({count, setCount}) => {
  const changeCount = () => {
    setCount(count + 1)
  }
  return (
    <button onClick={changeCount}>
      add count
    </button>
  )
}
