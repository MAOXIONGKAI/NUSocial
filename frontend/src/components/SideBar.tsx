import Box from '@mui/material/Box'
import IconMenu from "./IconMenu.tsx";
import {sectionMenuOptions, categoryMenuOptions} from "../data/MenuData.tsx";

type Props = {
    setSectionCondition: (condition: string) => void;
    setCategoryCondition: (condition: string) => void;
}

export default function SideBar({setSectionCondition, setCategoryCondition}: Props) {
    return (
        <Box
            display="flex"
            flexDirection="column"
            style={{
                height: '100%',
                boxShadow: '5px 0px 5px rgba(0, 0, 0, 0.1)'
            }}
        >
            <IconMenu
                layoutList={sectionMenuOptions}
                setSelectedOption={setSectionCondition}
            />
            <IconMenu
                header="Category"
                layoutList={categoryMenuOptions}
                setSelectedOption={setCategoryCondition}
            />
        </Box>
    )
}