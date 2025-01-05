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
                height:'100%',
                boxShadow: '5px 0px 5px rgba(0, 0, 0, 0.1)'
            }}
        >
            <IconMenu
                header="Category"
                layoutList={categoryMenuOptions}
                setCategoryCondition={setCategoryCondition}
            />
        </Box>
    )
}