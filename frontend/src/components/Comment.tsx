import {Avatar, Box, Card, CardContent, Typography} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import TimeFromNow from "./TimeFromNow.tsx";
import useComments from "../hooks/useComments.ts";

type Props = {
    id: number;
}

export default function Comment({id}: Props) {
    const comment = useComments(id)

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
                justifyContent: "space-between",
            }}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2
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
                </Box>
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
            </CardContent>
        </Card>
    )
}