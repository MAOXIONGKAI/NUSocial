import {createContext} from "react";
import User from '../types/User'

type UserContextType = [User | null, (user: User | null) => void];

export const UserContext =
    createContext<UserContextType>([null, () => {}])
