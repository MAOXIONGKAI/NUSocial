import {useContext} from "react";
import {UserContext} from "../contexts/UserContext.tsx";
import AppBar from '@mui/material/AppBar'
import Logo from "./Logo.tsx";
import SearchBar from "./SearchBar.tsx";
import {Box} from '@mui/material'
import NewUserOptions from "./NewUserOptions.tsx";
import LoggedInUserOptions from './LoggedInUserOptions'

type Props = {
    setSearchKeyword: (searchKeyword: string) => void;
    filterConditions: string[];
    setFilterConditions: (filterConditions: string[]) => void;
    sortCondition: string;
    setSortCondition: (sortCondition: string) => void;
    updatePosts: () => void;
}

export default function NavBar({
                                   setSearchKeyword,
                                   filterConditions,
                                   setFilterConditions,
                                   sortCondition,
                                   setSortCondition,
                                   updatePosts
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
                    boxShadow: "0px 2px 2px -2px rgba(0, 0, 0, 0.5)"
                }}
            >
                <Box display="flex">
                    <Logo style={{width: "75px", margin: "0% 7.5% 0% 2.5%"}}/>
                    <SearchBar
                        setSearchKeyword={setSearchKeyword}
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
                        {loggedIn
                            ? <LoggedInUserOptions updatePosts={updatePosts}/>
                            : <NewUserOptions/>
                        }
                    </Box>
                </Box>
            </AppBar>
        </>
    )
}