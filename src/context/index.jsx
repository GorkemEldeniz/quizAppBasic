import { createContext, useState,useContext } from 'react'

export const Context = createContext()
export const context = () => useContext(Context)
export const ContextComponent = ({ children }) => {
  const [urlParams, setUrlParams] = useState('')
  const [score, setScore] = useState(0)
  const [data, setData] = useState([])
  return (
    <Context.Provider
      value={{ urlParams, setUrlParams, setScore, score, data, setData }}
    >
      {children}
    </Context.Provider>
  )
}
