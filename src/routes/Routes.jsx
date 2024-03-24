import {
    createBrowserRouter,
 
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home/Home";
import Blog from "../components/Blog";
import Blogs from "../components/Blogs/Blogs";
import Bookmarks from "../components/Bookmarks/Bookmarks";
import Content from "../components/Content";
import Author from "../components/Author";
  



export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>,
          loader: ()=> fetch('https://dev.to/api/articles?per_page=20&top=7')
        },
        {
          path: '/blog/:id',
          element: <Blog></Blog>,
          loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          children: [
            {
                index: true,  //path: '/blog/:id'
                element: <Content></Content>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`)
            },
            {
                path: 'author',
                element: <Author></Author>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`)
            }
          ]
        
        },
        {
          path: '/bookmarks',
          element: <Bookmarks></Bookmarks>
        }
      ]
  
    },
  
  ]);