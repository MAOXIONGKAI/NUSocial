import PostCreationDialog from "./PostCreationDialog";
import ProfileMenu from "./ProfileMenu";

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