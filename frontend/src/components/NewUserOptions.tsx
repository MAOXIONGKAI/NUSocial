import SignUpFormDialog from "./SignUpFormDialog.tsx";
import LoginFormDialog from "./LoginFormDialog.tsx";

export default function NewUserOptions() {
    return (
        <>
            <LoginFormDialog/>
            <SignUpFormDialog/>
        </>
    )
}