import {
    Dialog,
    DialogTitle,
    DialogContent,
    Avatar,
    Typography,
    Box,
    IconButton,
} from '@mui/material'
import Post from "../../../types/Post.ts";
import CloseIcon from "@mui/icons-material/Close";
import Reaction from "../../Interactions/Reaction.tsx";
import CommentSection from "../../Comment/CommentSection.tsx";
import FilterTags from "../../Tags/FilterTags.tsx";
import CategoryTag from "../../Tags/CategoryTag.tsx"

type Props = {
    post: Post;
    updatePosts: () => void;
    open: boolean;
    onClose: () => void;
}

export default function PostPage({post, updatePosts, open, onClose}: Props) {

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth={true}
            maxWidth="lg"
            sx={{
                '& .MuiPaper-root': {
                    height: '90vh',
                },
            }}
        >
            <DialogTitle>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    marginBottom: "20px"
                }}>
                    <Avatar/>
                    <Typography sx={{marginRight: "10px"}}>{post.author}</Typography>
                    <Typography sx={{
                        color: "gray",
                        fontSize: "14px"
                    }}>
                        {post.created_at.toLocaleString()}
                    </Typography>
                    <IconButton
                        onClick={onClose}
                        sx={{
                            marginLeft: "auto"
                        }}
                    >
                        <CloseIcon/>
                    </IconButton>
                </Box>
                <Box sx={{
                    display: "flex",
                    gap: 2
                }}>
                    <CategoryTag text={post.category}/>
                    <FilterTags tags={post.tags}/>
                </Box>
            </DialogTitle>
            <DialogContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    overflowY: "auto",
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    }
                }}
            >
                <Typography
                    variant="h6"
                    sx={{fontSize: "20px"}}
                >
                    {post.title}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: "gray",
                        fontSize: "16px",
                        fontWeight: 300,
                        whiteSpace: "pre-wrap"
                    }}>
                    {post.body}
                </Typography>
                <Reaction post={post}/>
                <CommentSection
                    postId={post.id}
                    comments={post.comments}
                    updatePosts={updatePosts}
                />
            </DialogContent>
        </Dialog>
    )
}