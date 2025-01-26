import PostCreationDialog from "./PostCreationDialog.tsx";
import ProfileMenu from "../ProfileMenu/ProfileMenu.tsx";

type Props = {
    updatePosts: () => void;
}

export default function loggedInUserOptions({updatePosts}: Props) {
    return (
        <>
            <PostCreationDialog updatePosts={updatePosts} />
            <ProfileMenu />
        </>
    )
}