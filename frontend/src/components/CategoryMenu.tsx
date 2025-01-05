import {MenuList, ListSubheader} from '@mui/material'
import CategoryOption from "./CategoryOption.tsx";
import StudyIcon from '@mui/icons-material/MenuBook';
import CCAIcon from '@mui/icons-material/Diversity1';
import CampusIcon from '@mui/icons-material/LocationCity';
import ResidenceIcon from '@mui/icons-material/AccountBalance';
import SocialIcon from '@mui/icons-material/Diversity3';
import AdminIcon from '@mui/icons-material/Fax';
import CareerIcon from '@mui/icons-material/Work';
import OthersIcon from '@mui/icons-material/TipsAndUpdates';

type Props = {
    setCategoryCondition: (categoryCondition: string) => void,
}

export default function CategoryMenu({
                                         setCategoryCondition,
                                     }: Props) {
    const optionList = [
        {text: "Study", icon: StudyIcon},
        {text: "CCA", icon: CCAIcon},
        {text: "Campus", icon: CampusIcon},
        {text: "Residence", icon: ResidenceIcon},
        {text: "Social", icon: SocialIcon},
        {text: "Admin", icon: AdminIcon},
        {text: "Career", icon: CareerIcon},
        {text: "Others", icon: OthersIcon},
    ]
    return (
        <MenuList>
            <ListSubheader style={{textAlign: "center"}}>Category</ListSubheader>
            {optionList.map(option => (
                <CategoryOption
                    key={option.text}
                    text={option.text}
                    setCategoryOption={setCategoryCondition}
                    Icon={option.icon}
                />
            ))}
        </MenuList>
    )
}