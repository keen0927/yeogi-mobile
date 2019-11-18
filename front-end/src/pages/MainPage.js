import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MainPage = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const getPosts = async() => {
      try {
        const response = await axios.get('http://localhost:3000/posts');
        setData(response.data[0].title);
      } catch(e) {
        console.error(e);
      }
    };
    getPosts();
  }, []);

  return (
      <div>
        DATA {data}
      </div>
  )
};

export default MainPage;
