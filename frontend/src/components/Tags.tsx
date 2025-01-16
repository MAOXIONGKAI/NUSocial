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
                            backgroundColor: "black",
                            color: "white",
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
