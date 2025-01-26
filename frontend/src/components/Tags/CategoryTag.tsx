type Props = {
    text: string;
}

export default function CategoryTag({text}: Props) {
    return (
        <div
            key={text}
            style={{
                display: "inline-block",
                padding: "5px 10px",
                borderRadius: "50px",
                backgroundColor: "#1976d2",
                color: "white",
                fontSize: "10px"
            }}
        >
            {text}
        </div>
    )
}
