import Box from '@mui/material/Box'
import IconMenu from "../Utils/IconMenu.tsx";
import {categoryMenuOptions} from "../../data/MenuData.tsx";

type Props = {
    categoryCondition: string;
    setCategoryCondition: (condition: string) => void;
}

export default function SideBar({categoryCondition, setCategoryCondition}: Props) {
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
                selectedOption={categoryCondition}
                setSelectedOption={setCategoryCondition}
            />
        </Box>
    )
}