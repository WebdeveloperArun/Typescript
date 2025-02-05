import React from "react";
import BlogCard from "./BlogCard";
import { Blog, useBlog } from "../context/blogContext";

const BlogList: React.FC<{
 setExistingBlog: (blog: Blog) => void;
 setOpenForm: (openForm: boolean) => void;
}> = ({ setExistingBlog, setOpenForm }) => {
 const { posts, deletePost } = useBlog();
 return (
  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
   {posts.length === 0 ? (
    <p className="text-gray-500">No posts</p>
   ) : (
    posts.map((post) => (
     <div key={post.id}>
      <BlogCard
       title={post.title}
       content={post.content}
       image={post.image}
       onDelete={() => deletePost(post.id)}
       setExistingBlog={() => setExistingBlog(post)}
       setOpenForm={() => setOpenForm(true)}
      />
     </div>
    ))
   )}
  </div>
 );
};

export default BlogList;
