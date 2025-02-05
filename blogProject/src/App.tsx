import React, { useState } from 'react'
import { Blog, ContextProvider } from "./context/blogContext";
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';

const App = () => {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [existingBlog, setExistingBlog] = useState<Blog | undefined>(undefined);

  const onAddBlog = () => {
   setOpenForm(true);
   setExistingBlog(undefined);
  };
  return (
   <ContextProvider>
    <div className="w-full flex flex-col items-center p-4">
     <h1 className="text-3xl bg-black text-white flex items-center px-4 py-2 mt-2 rounded-md">
      Blog Project
     </h1>
     <div className="mt-4">
      <button
       onClick={onAddBlog}
       className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
       Add Blog
      </button>
      <BlogList setExistingBlog={setExistingBlog} setOpenForm={setOpenForm} />
      {openForm && (
       <BlogForm
        onClose={() => setOpenForm(false)}
        existingBlog={existingBlog}
       />
      )}
     </div>
    </div>
   </ContextProvider>
  );
}

export default App
