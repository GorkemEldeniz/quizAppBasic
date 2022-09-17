import {useState,useEffect,useContext} from 'react'
import getQuestions from '../API/getQuestions'
import {Context} from '../context/index'

export default function useGetQuestions(){
    const {urlParams,setData} = useContext(Context)
    const [er,setEr] = useState(false)
    const [loading,setLoading] = useState(true)
    useEffect(() => {
      getQuestions(urlParams).then((data) => setData(data)).catch(err => setEr(err.message)).finally(() => setLoading(false))
    },[])

    return {er ,loading}
}