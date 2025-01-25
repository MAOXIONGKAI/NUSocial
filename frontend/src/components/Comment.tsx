import {Avatar, Box, Card, CardContent, Typography} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import TimeFromNow from "./TimeFromNow.tsx";
import useComments from "../hooks/useComments.ts";
import DeleteCommentButton from "./DeleteCommentButton.tsx";
import {useContext} from "react";
import {UserContext} from "../contexts/UserContext.tsx";

type Props = {
    id: number;
    updatePosts: () => void;
    refreshComments: () => void;
}

export default function Comment({id, updatePosts, refreshComments}: Props) {
    const comment = useComments(id)
    const [user,] = useContext(UserContext);
    const isOwnComment = user?.username === comment?.author

    return (
        <Card sx={{
            display: "flex",
            width: "100%",
            maxHeight: "30vh",
            overflow: "auto",
            boxShadow: 3,
        }}>
            <CardContent sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%"
            }}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    width: "100%"
                }}>
                    <Avatar>
                        <PersonIcon/>
                    </Avatar>
                    <Typography variant="h2" sx={{
                        fontSize: "16px",
                        marginRight: "20px"
                    }}>
                        {comment?.author}
                    </Typography>
                    <TimeFromNow date={comment?.created_at}/>
                    {isOwnComment && <Box sx={{marginLeft: "auto"}}>
                        <DeleteCommentButton
                            commentId={id}
                            updatePosts={updatePosts}
                            refreshComments={refreshComments}
                        />
                    </Box>}
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        padding: "20px"
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            color: "gray",
                            fontSize: "16px",
                            fontWeight: 300
                        }}
                    >
                        {comment?.text}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}