import User from "../types/User";
import Post from "../types/Post.ts";

export const tempUser1: User = {
    username: "Mao Xiongkai",
    password: "1145141919810"
}

export const post1: Post = {
    id: 1,
    author: "MAO XIONGKAI",
    category: "study",
    tags: ["question"],
    title: "how to study properly",
    body: "Guys, how should I study properly?",
    upvotes: [],
    downvotes: [],
    comments: [],
    createdAt: new Date(),
}

export const post2: Post = {
    id: 2,
    author: "ZHU TIANYI",
    category: "admin",
    tags: ["asking for help"],
    title: "how should I contact the office for financial issue",
    body: "I need to pay my school fee how should I settle it with the office",
    upvotes: ["MAO XIONGKAI", "ZHU TIANYI", "Eline Ngu"],
    downvotes: ["Huang Jiaxi","Tester123"],
    comments: ["NewUser"],
    createdAt: new Date()
}
