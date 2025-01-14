import {SetStateAction, useState} from "react";
import {TextField, InputAdornment} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import PostQuery from "../types/PostQuery.ts";

type Props = {
    setPostQuery: (input: SetStateAction<PostQuery>) => void;
}

export default function SearchInput({setPostQuery}: Props) {
    const [searchKeyword, setSearchKeyword] = useState('')

    // Specify the input prop for search input, to allow adding search icon and other styles
    const searchBoxIconProps = {
        startAdornment: (
            <InputAdornment position="start">
                <SearchIcon/>
            </InputAdornment>
        )
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchKeyword(e.target.value);
    }

    function handleEnterKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            setPostQuery((prevQuery: PostQuery) => {
                return {
                    ...prevQuery,
                    search_keyword: searchKeyword
                }
            })
        }
    }

    return (
        <TextField
            size="small"
            placeholder="Search post..."
            sx={{
                width: "80%"
            }}
            value={searchKeyword}
            onChange={handleChange}
            onKeyDown={handleEnterKeyDown}
            InputProps={searchBoxIconProps}
        />
    )
}