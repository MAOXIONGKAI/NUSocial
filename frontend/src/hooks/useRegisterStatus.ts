import {useState, useEffect} from 'react'
import axios, {AxiosError, AxiosResponse} from "axios";
const backendURL = process.env.REACT_APP_BACKEND_URL;

export default function useRegisterStatus(username: string): boolean {
    const [isRegistered, setIsRegistered] = useState(false)
    const delay = 500

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            axios.get(`${backendURL}/api/users/${username}`)
                .then((res: AxiosResponse) => setIsRegistered(res.data !== null))
                .catch((err: AxiosError) => {
                    console.log(err.response?.data)
                    setIsRegistered(false)
                })
        }, delay)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [username]);

    return isRegistered
}
