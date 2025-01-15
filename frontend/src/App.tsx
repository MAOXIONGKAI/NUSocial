import {useState} from 'react'
import './App.css'
import NavBar from './components/NavBar'
import SideBar from "./components/SideBar.tsx";
import {Box} from "@mui/material"
import ContentSection from "./components/ContentSection.tsx";
import usePosts from "./hooks/usePosts.ts";
import Post from "./types/Post.ts";
import implementSort from "./utils/implementSort.ts";
import makeTagFilterPredicate from "./utils/makeTagFilterPredicate.ts";
import makeCategoryFilterPredicate from "./utils/makeCategoryFilterPredicate.ts";

function App() {
    const [searchKeyword, setSearchKeyword] = useState('')
    const [filterConditions, setFilterConditions] = useState<string[]>([])
    const [sortCondition, setSortCondition] = useState('Latest')
    const [categoryCondition, setCategoryCondition] = useState('')
    const [sectionCondition, setSectionCondition] = useState('')
    const posts: Post[] = usePosts()

    let filteredPosts: Post[] = []
    if (posts !== undefined) {
        filteredPosts = posts
            .filter(makeCategoryFilterPredicate(categoryCondition))
            .filter(makeTagFilterPredicate(filterConditions))
        filteredPosts.sort(implementSort(sortCondition))
    }

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
                <ContentSection posts={filteredPosts}/>
            </Box>
        </Box>
    )
}

export default App
