import Box from '@mui/material/Box'
import SearchInput from "./SearchInput.tsx";
import FilterDropdown from "./FilterDropdown";
import SortDropdown from "./SortDropdown.tsx";
import PostQuery from "../types/PostQuery.ts";
import {SetStateAction} from "react";

type Props = {
    filterConditions: string[];
    setFilterConditions: (filterConditions: string[]) => void;
    sortCondition: string;
    setSortCondition: (sortCondition: string) => void;
    setPostQuery: (input: SetStateAction<PostQuery>) => void;
}

export default function SearchBar({
                                      filterConditions,
                                      setFilterConditions,
                                      sortCondition,
                                      setSortCondition,
                                      setPostQuery
                                  }: Props) {
    return (
        <Box
            display="flex"
            width="60%"
            justifyContent="center"
            alignItems="center"
            gap="30px"
        >
            <SearchInput setPostQuery={setPostQuery}/>
            <Box display="flex" marginRight="auto" gap="10px">
                <FilterDropdown
                    filterConditions={filterConditions}
                    setFilterConditions={setFilterConditions}
                />
                <SortDropdown
                    sortCondition={sortCondition}
                    setSortCondition={setSortCondition}
                />
            </Box>
        </Box>
    )
}