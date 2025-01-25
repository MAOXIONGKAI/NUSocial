import {useState, useContext} from "react";
import {UserContext} from "../contexts/UserContext.tsx";
import {
    IconButton,
    Menu,
    Box,
    Avatar,
    Divider,
    ListSubheader,
    Typography
} from "@mui/material";
import ProfileMenuIcon from '@mui/icons-material/AccountCircle';
import LogOutButton from "./LogOutButton.tsx";

export default function ProfileMenu() {
    const [user] = useContext(UserContext);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    function handleOpen(e: React.MouseEvent<HTMLElement>) {
        setAnchorEl(e.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <>
            <IconButton onClick={handleOpen}>
                <ProfileMenuIcon/>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <ListSubheader>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "5px",
                        padding: "10px"
                    }}>
                        <Avatar sx={{width: "64px", height: "64px"}}></Avatar>
                        <Typography>Welcome, {user?.username}!</Typography>
                    </Box>
                </ListSubheader>
                <Divider/>
                <LogOutButton />
            </Menu>
        </>
    )
}