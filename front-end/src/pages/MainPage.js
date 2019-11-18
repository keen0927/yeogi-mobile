import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MainPage = () => {

  // const [data, setData] = useState([]);

  useEffect(() => {
    const getPosts = async() => {
      try {
        const response = await axios.get('http://localhost:3000/posts');
        // setData(response.data);
        return response.data[0].title;
      } catch(e) {
        console.error(e);
      }
    };
    // getPosts();

    // setData(getPosts());

  }, []);

  return (
      <div>
        메인
      </div>
  )
};

export default MainPage;
