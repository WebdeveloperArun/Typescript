import React, { useLayoutEffect, useState } from "react";
import { Blog, useBlog } from "../context/blogContext";

const BlogForm: React.FC<{ onClose: () => void; existingBlog?: Blog }> = ({
 onClose,
 existingBlog,
}) => {
 
 const {addPost, updatePost } = useBlog();
 const [title, setTitle] = useState(existingBlog?.title || "");
 const [content, setContent] = useState(existingBlog?.content || "");
 const [image, setImage] = useState(existingBlog?.image || "");
 useLayoutEffect(() => {
  if (existingBlog) {
   setTitle(existingBlog.title);
   setContent(existingBlog.content);
   setImage(existingBlog.image);
  }
 }, [existingBlog]);

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (existingBlog) {
    console.log("existingBlog in useEffect blog form :", existingBlog);
    
   updatePost( existingBlog.id, {
    id: existingBlog.id,
    title,
    content,
    image,
   });
  } else {
   addPost({
    id: Date.now(),
    title,
    content,
    image,
   });
  }
  onClose();
 };

 return (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
   <div className="bg-white p-6 rounded-md shadow-md w-full max-w-lg">
    <button
     onClick={onClose}
     className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mb-4"
    >
     Close
    </button>
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
     <input
      type="text"
      placeholder="Title"
      className="border-2 border-black p-2 rounded-md"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
     />
     <textarea
      placeholder="Content"
      className="border-2 border-black p-2 rounded-md"
      value={content}
      onChange={(e) => setContent(e.target.value)}
     />
     <input
      type="text"
      placeholder="Image"
      className="border-2 border-black p-2 rounded-md"
      value={image}
      onChange={(e) => setImage(e.target.value)}
     />
     <button type="submit" className="bg-black text-white px-4 py-2 rounded-md">
      {existingBlog ? "Update" : "Add"}
     </button>
    </form>
   </div>
  </div>
 );
};

export default BlogForm;
