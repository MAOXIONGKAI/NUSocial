import HomeIcon from '@mui/icons-material/Home'
import StudyIcon from '@mui/icons-material/MenuBook';
import CCAIcon from '@mui/icons-material/Diversity1';
import CampusIcon from '@mui/icons-material/LocationCity';
import ResidenceIcon from '@mui/icons-material/AccountBalance';
import SocialIcon from '@mui/icons-material/Diversity3';
import AdminIcon from '@mui/icons-material/Fax';
import CareerIcon from '@mui/icons-material/Work';
import OthersIcon from '@mui/icons-material/TipsAndUpdates';
import LatestIcon from '@mui/icons-material/Update';
import OldestIcon from '@mui/icons-material/History';
import UpvoteIcon from '@mui/icons-material/ThumbUp';
import InteractionIcon from '@mui/icons-material/Insights';

export const categoryMenuOptions = [
    {text: "Home", Icon: HomeIcon},
    {text: "Study", Icon: StudyIcon},
    {text: "CCA", Icon: CCAIcon},
    {text: "Campus", Icon: CampusIcon},
    {text: "Residence", Icon: ResidenceIcon},
    {text: "Social", Icon: SocialIcon},
    {text: "Admin", Icon: AdminIcon},
    {text: "Career", Icon: CareerIcon},
    {text: "Others", Icon: OthersIcon},
]

export const sortMenuOptions = [
    {text: "Latest", Icon: LatestIcon},
    {text: "Oldest", Icon: OldestIcon},
    {text: "Most Upvotes", Icon: UpvoteIcon},
    {text: "Most Interactions", Icon: InteractionIcon}]

export const filterTags = ["Discussion", "Guide", "Asking for Help", "Question",
    "Rant", "Meme", "Emergency", "Others"]