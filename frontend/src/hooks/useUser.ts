import {useState, useEffect} from "react";
import axios, {AxiosError, AxiosResponse} from "axios";
import User from "../types/User.ts";

type ReturnType = {
    user: User | null;
    error: string | null
}

export default function useUser(username: string): ReturnType {
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!username.trim()) {
            setUser(null)
            setError(null)
            return;
        }

        let ignore = false
        axios.get(`http://localhost:8080/api/users/${username}`)
            .then((res: AxiosResponse) => {
                if (!ignore) {
                    setUser(res.data)
                    setError(null)
                }
            })
            .catch((err: AxiosError) => {
                if (err.name !== "CanceledError") {
                    setUser(null)
                    setError("Failed to retrieve user data: " + err.response?.data)
                }
            })
        return () => {
            ignore = true
        }
    }, [username]);

    return {user, error};
}
