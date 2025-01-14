import Post from "../types/Post.ts";

type SortPostFunction = (post: Post, other: Post) => number

export const sortByLatest: SortPostFunction = (post, other) => {
    return other.created_at.getTime() - post.created_at.getTime();
}

export const sortByOldest: SortPostFunction = (post, other)=> {
    return post.created_at.getTime() - other.created_at.getTime();
}

export const sortByMostUpvotes: SortPostFunction = (post, other) => {
    return other.upvotes.length - post.upvotes.length;
}

function getInteractionsCount(post: Post): number {
    return post.upvotes.length + post.downvotes.length + post.comments.length
}

export const sortByMostInteractions: SortPostFunction = (post, other) => {
    return getInteractionsCount(other) - getInteractionsCount(post)
}