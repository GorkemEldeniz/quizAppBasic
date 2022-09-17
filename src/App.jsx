import { useState, useEffect } from 'react'
import { context } from './context/index'
import { Result, Form } from './Import'
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Quiz from './pages/Quiz'
function App() {
  const [isFinish, setIsFinish] = useState(false)
  const { data } = context()
  if (!data.length)
    return (
      <Routes>
        <Route index path="/" element={<Form />} />
        <Route index path="/*" element={<NotFound/>} />
      </Routes>
    )
  return (
    <Routes>
      <Route path="/" index element={<Quiz setIsFinish={setIsFinish} />} />
      {isFinish && (
        <Route path="result" element={<Result setIsFinish={setIsFinish} />} />
      )}
      <Route index path="/*" element={<NotFound/>} />
    </Routes>
  )
}

export default App
