import {useState} from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.tsx'
import SideBar from "./components/SideBar/SideBar.tsx";
import {Box} from "@mui/material"
import ContentSection from "./components/ContentSection/ContentSection.tsx";
import usePosts from "./hooks/usePosts.ts";
import Post from "./types/Post.ts";
import implementSort from "./utils/implementSort.ts";
import makeTagFilterPredicate from "./utils/makeTagFilterPredicate.ts";
import makeCategoryFilterPredicate from "./utils/makeCategoryFilterPredicate.ts";
import makeSearchPredicate from "./utils/makeSearchPredicate.ts";

function App() {
    const [searchKeyword, setSearchKeyword] = useState('')
    const [filterConditions, setFilterConditions] = useState<string[]>([])
    const [sortCondition, setSortCondition] = useState('Latest')
    const [categoryCondition, setCategoryCondition] = useState('')
    const [posts, updatePosts] = usePosts()

    let filteredPosts: Post[] = []
    if (posts !== undefined) {
        filteredPosts = posts
            .filter(makeSearchPredicate(searchKeyword))
            .filter(makeCategoryFilterPredicate(categoryCondition))
            .filter(makeTagFilterPredicate(filterConditions))
        filteredPosts.sort(implementSort(sortCondition))
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            width="100%"
            justifyContent="space-between"
        >
            <NavBar
                setSearchKeyword={setSearchKeyword}
                filterConditions={filterConditions}
                setFilterConditions={setFilterConditions}
                sortCondition={sortCondition}
                setSortCondition={setSortCondition}
                setCategoryCondition={setCategoryCondition}
                updatePosts={updatePosts}
            />
            <Box display="flex">
                <SideBar
                    categoryCondition={categoryCondition}
                    setCategoryCondition={setCategoryCondition}
                />
                <ContentSection posts={filteredPosts} updatePosts={updatePosts}/>
            </Box>
        </Box>
    )
}

export default App
