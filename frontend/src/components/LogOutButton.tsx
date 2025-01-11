import {useContext} from "react";
import {UserContext} from "../contexts/UserContext.tsx";
import {ListItemIcon, MenuItem} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import useSnackBar from "../hooks/useSnackBar.ts";
import {successfulLogOut} from "../data/SnackBarConfigs.ts";

export default function LogOutButton() {
    const [, setUser] = useContext(UserContext);
    const showLogOutMessage = useSnackBar(successfulLogOut)

    function handleLogOut() {
        setUser(null)
        showLogOutMessage()
    }

    return (
        <MenuItem onClick={handleLogOut}>
            <ListItemIcon><LogoutIcon/></ListItemIcon>
            Log Out
        </MenuItem>
    )
}
