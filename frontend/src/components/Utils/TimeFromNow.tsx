import {Typography} from "@mui/material";
import getDuration from "../../utils/getDuration.ts";

type Props = {
    date: Date | undefined;
}

export default function TimeFromNow({date}: Props) {
    const duration = date
        ? getDuration(date)
        : "now"

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