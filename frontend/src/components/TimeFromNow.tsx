import {Typography} from "@mui/material";
import getDuration from "../utils/getDuration.ts";

type Props = {
    date: Date;
}

export default function TimeFromNow({date}: Props) {
    const duration = getDuration(date);

    return (
        <>
            <Typography
                variant="body2"
                sx={{
                    fontSize: "14px",
                    color: "gray"
                }}
            >
                {duration} {duration.toLowerCase() !== "now" && "ago"}
            </Typography>
        </>
    )
}