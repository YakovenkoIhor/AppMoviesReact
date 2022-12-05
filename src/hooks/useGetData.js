import { useEffect, useState } from "react";

const useGetData = (url, userId) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false))
    }, [userId])
    return {
        data,
        error,
        loading
    }
}

export default useGetData