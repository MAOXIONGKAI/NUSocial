import {createContext, Dispatch, ReactElement, SetStateAction, useState} from "react";
import User from '../types/User'

type UserContextType = [User | null, Dispatch<SetStateAction<User | null>> | null];
type UserProviderProps = {children: ReactElement}

export const UserContext =
    createContext<UserContextType>([null, null])

export function UserProvider({children}: UserProviderProps) {
    const [user, setUser] = useState<null | User>(null)

    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    )
}
