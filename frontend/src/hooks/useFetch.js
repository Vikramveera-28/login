import React, { useEffect, useState } from 'react'
import api from '../api/ApiUrl'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async() => {
            try {
                setIsLoading(true)
                const response = await api.get(url)
                setData(response.data)
            } catch (err) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [`${api}${url}`])
  return [data, setData, error, isLoading]
}

export default useFetch;