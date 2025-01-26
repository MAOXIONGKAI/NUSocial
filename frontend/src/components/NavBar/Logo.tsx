import logo from '../../assets/logo.png'

type Props = {
    style?: React.CSSProperties
    setCategoryCondition: (categoryCondition: string) => void
}

export default function Logo({style, setCategoryCondition}: Props) {
    return (
        <button
            style={{
                border: "none",
                background: "none",
                padding: 0,
                cursor: "pointer",
                width: "75px",
                margin: "0% 7% 0% 3%"
            }}
            onClick={() => setCategoryCondition("")}
        >
            <img
                src={logo}
                alt="NUSocial Logo"
                {...(style && {style})}
            />
        </button>
    )
}