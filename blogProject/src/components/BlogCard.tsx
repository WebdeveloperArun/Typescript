import React from 'react'

const BlogCard: React.FC<{
 title: string;
 content: string;
 image: string;
 onDelete: () => void;
 setExistingBlog: () => void;
 setOpenForm: () => void;
}> = ({ title, content, image, onDelete, setExistingBlog, setOpenForm }) => {
 const onEdit = () => {
  setExistingBlog();
  setOpenForm();
 };
 return (
  <div className="w-full bg-gray-200 rounded-md shadow-md overflow-hidden">
   <img src={image} alt="This is image" className="w-full h-48 object-cover" />
   <div className="p-4">
    <h1 className="text-xl font-bold">{title}</h1>
    <p className="text-gray-700">{content}</p>
    <div className="mt-4 flex justify-between">
     <button
      onClick={onDelete}
      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
     >
      Delete
     </button>
     <button
      onClick={onEdit}
      className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
     >
      Edit
     </button>
    </div>
   </div>
  </div>
 );
};

export default BlogCard
