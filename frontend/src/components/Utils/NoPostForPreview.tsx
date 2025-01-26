import NoPostForPreviewPage from '../../assets/NoPostForPreviewPage.jpg'
import {Box, Typography} from "@mui/material";

export default function NoPostForPreview() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            height: "100%",
            gap: 3
        }}>
            <img
                src={NoPostForPreviewPage}
                style={{width: "35%", borderRadius: "50%"}}
                alt="NoPostForPreview"
            />
            <Typography>
                Oops...Seems like there's no post on this topic at this moment.
                <br/>
                Perhaps you can try create the first post on this topic?
            </Typography>
        </Box>
    )
}