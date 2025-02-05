import { Children, createContext, ReactNode, useContext, useState } from "react";


export interface Blog {
    id: number;
    title: string;
    content: string;
    image: string;
}


interface BlogContext {
    posts: Blog[];
    addPost: (post: Blog) => void;
    deletePost: (id: number) => void;
    updatePost: (id: number, post: Blog) => void;
}

const blogContext = createContext<BlogContext>({
    posts: [],
    addPost: (post) => {},
    deletePost: (id) => {},
    updatePost: (id, post) => {},
});

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [posts, setPosts] = useState<Blog[]>([]);

    const addPost = (post: Blog) => {
        setPosts([...posts, post]);
    }

    const deletePost = (id: number) => {
        setPosts(posts.filter(post => post.id !== id));
    }

    const updatePost = (id: number, blog: Blog) => {
        setPosts(posts.map(post => post.id === id ? blog : post));
    }

    return (
        <blogContext.Provider value={{posts, addPost, deletePost, updatePost}}>
            {children}
        </blogContext.Provider>
    )
}

const useBlog = () => {
    const context = useContext(blogContext);
    if(!context){
        throw new Error("useBlog must be used within a BlogProvider");
    }
    return context;
}

export { ContextProvider, blogContext, useBlog };