import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

export default class Article extends Component {
  constructor() {
    super();

    this.state = { visible: false };
  }

  handleUpdate = (isVisible, articleData) => {
    this.setState({ visible: isVisible })
    if (isVisible) {
      this.props.emitter.emit('onLastArticleToBecomeVisible', articleData);
      this.props.onChange(articleData);
    }
  }

  render() {
    const { data } = this.props;
    const imgUrl = data.multimedia[0] ? data.multimedia[0].url : "";
    return (
      <VisibilitySensor partialVisibility onChange={(vis) => this.handleUpdate(vis, data)}>
        <div className="article">
          <h1 className="article-title">
            {data.headline.main}
          </h1>
          <h3 className="author">
            {data.byline.original}
          </h3>
          { imgUrl && (<img src={`http://nytimes.com/${imgUrl}`} alt={data.headline.print_headline} />) }
          <p className="article-body">
            {data.snippet}
          </p>
        </div>
      </VisibilitySensor>
    );
  }
}
