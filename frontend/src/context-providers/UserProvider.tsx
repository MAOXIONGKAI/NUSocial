import {ReactElement} from "react";
import User from "../types/User.ts";
import {UserContext} from "../contexts/UserContext.tsx";
import useLocalStorage from "../hooks/useLocalStorage.ts";

type UserProviderProps = {children: ReactElement}

export function UserProvider({children}: UserProviderProps) {
    const [user, setUser] = useLocalStorage<User | null>("user", null)

    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    )
}