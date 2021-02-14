import { useState, useEffect } from 'react'
import youtube from '../apis/youtube';
import { KEY_YOUTUBE } from '../apis/key';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm)
  }, []);

  const search = async term => {
    const { data: { items: videos } } = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY_YOUTUBE
      }
    });

    setVideos(videos);

  };
  return [ videos, search ];

};

export default useVideos;