import {Box} from "@mui/material";

type Props = {
    tags: string[]
}

export default function Tags({tags}: Props) {
    return (
        <Box sx={{
            display: "flex",
            gap: 2
        }}>
            {
                tags.map((tag: string) => (
                    <div
                        key={tag}
                        style={{
                            display: "inline-block",
                            padding: "5px 10px",
                            borderRadius: "50px",
                            backgroundColor: "white",
                            color: "#1976d2",
                            border: "1px solid #1976d2",
                            fontSize: "10px"
                        }}
                    >
                        {tag}
                    </div>
                ))
            }
        </Box>
    )
}
