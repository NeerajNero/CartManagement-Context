import { useEffect, useState } from "react"

export const useFetch = (url,method,body) => {
    const [data,setData] = useState()
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(url,{
            method: method,
            body: JSON.stringify(body)
        }).then((res) => res.json()).then((data) => setData(data)).catch((error) => setError(error.message))
        .finally(() => setLoading(false))
    },[url])

    return {data,loading,error}
}