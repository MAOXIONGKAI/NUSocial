import {useContext} from "react";
import {UserContext} from "../contexts/UserContext.tsx";
import AppBar from '@mui/material/AppBar'
import Logo from "./Logo.tsx";
import SearchBar from "./SearchBar.tsx";
import {Box} from '@mui/material'
import NewUserOptions from "./NewUserOptions.tsx";
import LoggedInUserOptions from './LoggedInUserOptions'

type Props = {
    filterConditions: string[];
    setFilterConditions: (filterConditions: string[]) => void;
    sortCondition: string;
    setSortCondition: (sortCondition: string) => void;
}

export default function NavBar({
                                   filterConditions,
                                   setFilterConditions,
                                   sortCondition,
                                   setSortCondition
                               }: Props) {
    const [user] = useContext(UserContext)
    const loggedIn = user !== null
    return (
        <>
            <AppBar
                position="static"
                sx={{
                    width: "100%",
                    padding: "10px 0px",
                    backgroundColor: "white",
                    boxShadow: 0
                }}
            >
                <Box display="flex">
                    <Logo style={{width: "75px", margin: "0% 7.5% 0% 2.5%"}}/>
                    <SearchBar
                        filterConditions={filterConditions}
                        setFilterConditions={setFilterConditions}
                        sortCondition={sortCondition}
                        setSortCondition={setSortCondition}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            marginLeft: "auto",
                            marginRight: "auto",
                            alignItems: "center"
                        }}>
                        {loggedIn ? <LoggedInUserOptions/> : <NewUserOptions/> }
                    </Box>
                </Box>
            </AppBar>
        </>
    )
}