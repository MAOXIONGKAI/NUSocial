import {TextField, InputAdornment} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

type Props = {
    searchKeyword: string;
    setSearchKeyword: (text: string) => void;
}

export default function SearchInput({
                                        searchKeyword,
                                        setSearchKeyword
                                    }: Props) {
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

    return (
        <TextField
            size="small"
            placeholder="Search post..."
            sx={{
                width: "80%"
            }}
            value={searchKeyword}
            onChange={handleChange}
            InputProps={searchBoxIconProps}
        />
    )
}