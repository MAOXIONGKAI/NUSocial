import Box from '@mui/material/Box'
import CategoryMenu from "./CategoryMenu.tsx";

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
            <CategoryMenu
                setCategoryCondition={setCategoryCondition}
            />
        </Box>
    )
}