import {createContext, Dispatch, SetStateAction} from "react";
import User from '../types/User'

type UserContextType = [User | null, Dispatch<SetStateAction<User | null>>];

export const UserContext =
    createContext<UserContextType>([null, () => {}])
