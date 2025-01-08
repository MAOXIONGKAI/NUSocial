import {useState, useContext} from "react";
import {UserContext} from "../contexts/UserProvider";
import {
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Box,
    Avatar,
    Divider,
    ListSubheader,
    Typography
} from "@mui/material";
import ProfileMenuIcon from '@mui/icons-material/AccountCircle';
import ProfileIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NightModeIcon from '@mui/icons-material/Brightness4';
import ReportIssueIcon from '@mui/icons-material/BugReport';
import LogoutIcon from '@mui/icons-material/Logout';

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
                <MenuItem>
                    <ListItemIcon><ProfileIcon/></ListItemIcon>
                    My Profile
                </MenuItem>
                <MenuItem>
                    <ListItemIcon><FavoriteIcon/></ListItemIcon>
                    Favorite
                </MenuItem>
                <MenuItem>
                    <ListItemIcon><NightModeIcon/></ListItemIcon>
                    Night Mode
                </MenuItem>
                <MenuItem>
                    <ListItemIcon><ReportIssueIcon/></ListItemIcon>
                    Report Issue
                </MenuItem>
                <MenuItem>
                    <ListItemIcon><LogoutIcon/></ListItemIcon>
                    Log Out
                </MenuItem>
            </Menu>
        </>
    )
}