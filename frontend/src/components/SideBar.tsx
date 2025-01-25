import Box from '@mui/material/Box'
import IconMenu from "./IconMenu.tsx";
import {categoryMenuOptions} from "../data/MenuData.tsx";

type Props = {
    setCategoryCondition: (condition: string) => void;
}

export default function SideBar({setCategoryCondition}: Props) {
    return (
        <Box
            display="flex"
            flexDirection="column"
            style={{
                height: "calc(100vh - 68px)",
                border: 'LightGray solid 1px'
            }}
        >
            <IconMenu
                layoutList={categoryMenuOptions}
                setSelectedOption={setCategoryCondition}
            />
        </Box>
    )
}