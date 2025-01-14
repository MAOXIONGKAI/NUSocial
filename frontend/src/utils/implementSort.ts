import {
    sortByLatest,
    sortByOldest,
    sortByMostUpvotes,
    sortByMostInteractions
} from "../data/postSortFunctions.ts";

export default function implementSort(type : string) {
    switch (type.trim().toLowerCase()) {
        case 'oldest':
            return sortByOldest
        case 'most upvotes':
            return sortByMostUpvotes
        case 'most interactions':
            return sortByMostInteractions
        case 'latest':
        default:
            return sortByLatest
    }
}