import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';
import { KEY_YOUTUBE } from '../apis/key';

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('ES6')
  }

  onTermSubmit = async term => {
    const { data: { items: videos } } = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY_YOUTUBE
      }
    });
    this.setState({ 
      videos,
      selectedVideo: videos[0]
     })
  };

  onVideoSelect = (video) => {
    // video: from youtube API
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
        <div className="ui row">
        <div className="eleven wide column">
          <VideoDetail video={this.state.selectedVideo} />
        </div>
        <div className="five wide column">
          <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
