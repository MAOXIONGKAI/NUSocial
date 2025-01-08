import PostCreationDialog from "./PostCreationDialog";
import ProfileMenu from "./ProfileMenu";

export default function loggedInUserOptions() {
    return (
        <>
            <PostCreationDialog />
            <ProfileMenu />
        </>
    )
}