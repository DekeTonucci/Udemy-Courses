import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos'


const App = () => {
  const [ selectedVideo, setSelectedVideo ] = useState(null);

  // Custom Hook: hooks/useVideo.js
  const [ videos, search ] = useVideos('ES6');
  
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos])


  const onVideoSelect = (video) => {
    // video: from youtube API
    setSelectedVideo(video);
  }

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
      <div className="ui row">
      <div className="eleven wide column">
        <VideoDetail video={selectedVideo} />
      </div>
      <div className="five wide column">
        <VideoList videos={videos} onVideoSelect={onVideoSelect} />
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
