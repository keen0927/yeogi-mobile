import React, { useState, useEffect } from 'react';
import client from "../lib/api/client";

const MainPage = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    // const getPosts = async() => {
    //   try {
    //     const response = await axios.get('http://localhost:3000/posts');
    //     setData(response.data[0].title);
    //   } catch(e) {
    //     console.error(e);
    //   }
    // };
    // getPosts();
    const postTest = async () => {
      try {
        const postTest = await client.post('/posts',{
          "title": "json-server2",
          "author": "keen"
        })
      } catch(e) {
        console.error(e);
      }
    };
    postTest();

    const getPost = async () => {
      try {
        const getPosts = await client.get('/posts');
        console.log(getPosts);
      } catch(e) {
        console.error(e)
      }
    };

    getPost();
  }, []);

  return (
      <div>
        DATA {data}
      </div>
  )
};

export default MainPage;
