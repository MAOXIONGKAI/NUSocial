type Comment = {
    id: number;
    author: string;
    text: string;
    upvotes: string[];
    downvotes: string[];
    comments: number[];
    created_at: Date;
}

export default Comment
