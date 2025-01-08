import Box from '@mui/material/Box'
import SearchInput from "./SearchInput.tsx";
import FilterDropdown from "./FilterDropdown";
import SortDropdown from "./SortDropdown.tsx";

type Props = {
    searchKeyword: string;
    setSearchKeyword: (searchKeyword: string) => void;
    filterConditions: string[];
    setFilterConditions: (filterConditions: string[]) => void;
    sortCondition: string;
    setSortCondition: (sortCondition: string) => void;
}

export default function SearchBar(props: Props) {
    return (
        <Box
            display="flex"
            width="60%"
            justifyContent="center"
            alignItems="center"
            gap="30px"
        >
            <SearchInput {...props} />
            <Box display="flex" marginRight="auto" gap="10px">
                <FilterDropdown {...props} />
                <SortDropdown {...props}/>
            </Box>
        </Box>
    )
}