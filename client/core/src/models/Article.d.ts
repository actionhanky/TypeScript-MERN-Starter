import Post from "./Post.d";

export default interface Article extends Post {
    title: string;
    content: string;
    likes: string[]; // array of User._id
}