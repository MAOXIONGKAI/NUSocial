type Post = {
    id: number;
    author: string;
    category: string;
    tags: string[];
    title: string;
    body: string;
    upvotes: string[];
    downvotes: string[];
    comments: number[];
    created_at: Date;
}

export default Post;