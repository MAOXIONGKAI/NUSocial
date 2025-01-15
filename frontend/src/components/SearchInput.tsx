import {useState} from "react";
import {TextField, InputAdornment, IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
    setSearchKeyword: (text: string) => void;
}

export default function SearchInput({
                                        setSearchKeyword
                                    }: Props) {
    const [inputValue, setInputValue] = useState("");
    const clearInput = () => {
        setInputValue("")
        setSearchKeyword("")
    }
    // Specify the input prop for search input, to allow adding search icon and other styles
    const searchBoxIconProps = {
        startAdornment: (
            <InputAdornment position="start">
                <SearchIcon/>
            </InputAdornment>
        ),
        endAdornment: inputValue && (
            <InputAdornment position="end">
                <IconButton onClick={clearInput}>
                    <CloseIcon/>
                </IconButton>
            </InputAdornment>
        )
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
    }

    function handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            setSearchKeyword(inputValue)
        }
    }

    return (
        <TextField
            size="small"
            placeholder="Search post..."
            sx={{
                width: "80%"
            }}
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleSearch}
            InputProps={searchBoxIconProps}
        />
    )
}