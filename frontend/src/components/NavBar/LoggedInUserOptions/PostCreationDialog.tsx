import {useContext, useState} from 'react'
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
import PostCreationFormData from "../../../types/PostCreationFormData.ts";
import {categoryMenuOptions, filterTags} from "../../../data/MenuData.tsx";
import {UserContext} from "../../../contexts/UserContext.tsx";
import axios, {AxiosError, AxiosResponse} from "axios";
import useSnackBar from "../../../hooks/useSnackBar.ts";
import {successfulPostCreation} from "../../../data/SnackBarConfigs.ts";
import {backendURL} from "../../../data/Config.ts";

type Props = {
    updatePosts: () => void;
}

export default function PostCreationDialog({updatePosts}: Props) {
    const [open, setOpen] = useState(false)
    const [user,] = useContext(UserContext)
    const showSuccessfulPostCreation = useSnackBar(successfulPostCreation)
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

    const handleTagChange = (_event: React.ChangeEvent<object>, newTags: string[]) => {
        setFormData(prevData => {
            return {
                ...prevData,
                tags: newTags
            }
        });
    };

    function handleSubmit() {
        if (!formData.title
            || !formData.body
            || !formData.category
            || formData.tags.length === 0) {
            return
        }
        const newPost = {
            ...formData,
            author: user?.username,
            upvotes: [],
            downvotes: [],
            comments: []
        }
        axios.post(`${backendURL}/api/posts`, newPost)
            .then((_res: AxiosResponse) => {
                updatePosts()
                showSuccessfulPostCreation()
                handleClose()
            })
            .catch((err: AxiosError) => console.log(err.response?.data))
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
                                freeSolo={false}
                                disableCloseOnSelect
                                options={filterTags}
                                sx={{width: "80%"}}
                                value={formData.tags}
                                onChange={handleTagChange}
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