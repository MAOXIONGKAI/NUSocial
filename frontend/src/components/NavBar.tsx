import AppBar from '@mui/material/AppBar'
import Logo from "./Logo.tsx";
import SearchBar from "./SearchBar.tsx";
import {Box} from '@mui/material'
import NewUserOptions from "./NewUserOptions.tsx";

type Props = {
    searchKeyword: string;
    setSearchKeyword: (searchKeyword: string) => void;
    filterConditions: string[];
    setFilterConditions: (filterConditions: string[]) => void;
    sortCondition: string;
    setSortCondition: (sortCondition: string) => void;
}

export default function NavBar({
                                   searchKeyword,
                                   setSearchKeyword,
                                   filterConditions,
                                   setFilterConditions,
                                   sortCondition,
                                   setSortCondition
                               }: Props) {
    return (
        <>
            <AppBar
                position="static"
                sx={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "white"
                }}
            >
                <Box display="flex">
                    <Logo style={{width: "75px", marginRight: "15px"}}/>
                    <SearchBar
                        searchKeyword={searchKeyword}
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
                            marginRight: "auto"
                        }}>
                        <NewUserOptions/>
                    </Box>
                </Box>
            </AppBar>
        </>
    )
}