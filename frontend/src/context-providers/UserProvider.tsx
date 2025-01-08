import {ReactElement, useState} from "react";
import User from "../types/User.ts";
import {UserContext} from "../contexts/UserContext.tsx";

type UserProviderProps = {children: ReactElement}

export function UserProvider({children}: UserProviderProps) {
    const [user, setUser] = useState<null | User>(null)

    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    )
}