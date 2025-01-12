import {useState} from 'react'
import './App.css'
import NavBar from './components/NavBar'
import SideBar from "./components/SideBar.tsx";
import {Box} from "@mui/material"
import ContentSection from "./components/ContentSection.tsx";
import {post1, post2} from "./data/ManualTestData.tsx";

function App() {
    const [searchKeyword, setSearchKeyword] = useState('')
    const [filterConditions, setFilterConditions] = useState<string[]>([])
    const [sortCondition, setSortCondition] = useState('')
    const [categoryCondition, setCategoryCondition] = useState('')
    const [sectionCondition, setSectionCondition] = useState('')
    const [posts,] = useState([post1, post2])

    // Just for passing Linting at the moment, once the variables are
    // actually used, should just delete immediately
    console.log(sectionCondition, categoryCondition)

    return (
        <Box
            display="flex"
            flexDirection="column"
            width="100%"
            justifyContent="space-between"
        >
            <NavBar
                searchKeyword={searchKeyword}
                setSearchKeyword={setSearchKeyword}
                filterConditions={filterConditions}
                setFilterConditions={setFilterConditions}
                sortCondition={sortCondition}
                setSortCondition={setSortCondition}
            />
            <Box display="flex">
                <SideBar
                    setSectionCondition={setSectionCondition}
                    setCategoryCondition={setCategoryCondition}
                />
                <ContentSection posts={posts}/>
            </Box>
        </Box>
    )
}

export default App
