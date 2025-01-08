import logo from '../assets/logo.png'

type Props = {
    style?: React.CSSProperties
}

export default function Logo({style}: Props) {
    return (
        <img
            src={logo}
            alt="NUSocial Logo"
            {...(style && {style})}
        />
    )
}