import {useState} from 'react'
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Button,
    TextField,
    SelectChangeEvent,
    MenuItem,
    ListItemIcon,
    Autocomplete,
    Box
} from "@mui/material";
import AddPostIcon from '@mui/icons-material/AddBox';
import PostCreationFormData from "../types/PostCreationFormData";
import {categoryMenuOptions, filterTags} from "../data/MenuData";

export default function PostCreationDialog() {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState<PostCreationFormData>({
        title: "",
        category: "",
        tags: [],
        body: ""
    })

    function handleOpen() {
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
    }

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>
    ) {
        const {name, value} = e.target as HTMLInputElement | { name: string; value: string };
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function handleSubmit() {
        console.log("Post Creation Form Submitted")
        handleClose()
    }

    return (
        <>
            <IconButton onClick={handleOpen}>
                <AddPostIcon/>
            </IconButton>
            <Dialog
                fullWidth={true}
                maxWidth="lg"
                open={open}
                onClose={handleClose}
            >
                <DialogTitle textAlign="center">Create New Post</DialogTitle>
                <DialogContent>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px"
                    }}>
                        <TextField
                            label="Title"
                            name="title"
                            sx={{width: "100%"}}
                            value={formData.title}
                            onChange={handleChange}
                        />
                        <Box sx={{display: "flex", gap: "25px"}}>
                            <TextField
                                select
                                variant="outlined"
                                sx={{width: "20%"}}
                                label="Category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                            >
                                {categoryMenuOptions.map(layout => {
                                    const {text, Icon} = layout;
                                    return (
                                        <MenuItem key={text} value={text}>
                                            <Box sx={{display: "flex", alignItems: "center"}}>
                                            <ListItemIcon sx={{margin: 0, padding: 0}}><Icon/></ListItemIcon>
                                            <MenuItem sx={{margin: 0, padding: 0}}>{text}</MenuItem>
                                            </Box>
                                        </MenuItem>
                                    )
                                })}
                            </TextField>
                            <Autocomplete
                                multiple
                                freeSolo
                                disableCloseOnSelect
                                options={filterTags}
                                sx={{width: "80%"}}
                                renderInput={(params) =>
                                    <TextField
                                        {...params}
                                        name="tags"
                                        variant="outlined"
                                        label="Filter by"
                                    />
                                }
                            />
                        </Box>
                        <TextField
                            label="Body"
                            name="body"
                            sx={{width: "100%"}}
                            multiline
                            rows={5}
                            value={formData.body}
                            onChange={handleChange}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}