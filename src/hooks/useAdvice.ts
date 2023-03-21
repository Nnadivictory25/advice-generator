import axios, {CanceledError} from 'axios';
import { useEffect, useState } from 'react';
import { AdviceQuery } from '../App';



const useAdvice = (adviceQuery: AdviceQuery) => {
    const [data, setData] = useState({} as AdviceQuery)
    const [error, setError] = useState('')

    useEffect(() => {
        const controller = new AbortController()

        axios.get('https://api.adviceslip.com/advice', { signal: controller.signal })
        .then(res => {
            console.log(res.data.slip)
            setData(res.data.slip)
        })
        .catch(err => {
            if (err instanceof CanceledError) return;
            setError(err.message)
        })

        return () => controller.abort()
    }, [adviceQuery])

    return {data, error}
}

export default useAdvice