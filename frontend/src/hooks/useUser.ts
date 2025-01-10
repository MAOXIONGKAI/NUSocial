import {useState, useEffect} from "react";
import axios, {AxiosError, AxiosResponse} from "axios";
import User from "../types/User.ts";

export default function useUser(username: string): User | null {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        if (!username.trim()) {
            setUser(null)
            return;
        }

        let ignore = false
        axios.get(`http://localhost:8080/api/users/${username}`)
            .then((res: AxiosResponse) => {
                if (!ignore) {
                    setUser(res.data)
                }
            })
            .catch((err: AxiosError) => {
                if (err.name !== "CanceledError") {
                    setUser(null)
                }
            })
        return () => {
            ignore = true
        }
    }, [username]);

    return user;
}
