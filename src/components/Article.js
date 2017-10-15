import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import dateFormat from 'dateformat';

export default class Article extends Component {
  constructor() {
    super();

    this.state = { visible: true };
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
          {data.headline.main && (
            <h1 className="article-title">
              {data.headline.main}  
            </h1>
          )}
          {data.byline && data.pub_date && (
            <div className="by-line">
              <h3 className="author">
                {data.byline.original}          
              </h3>
              <h3 className="date">
                {dateFormat(data.pub_date, "mmm. dd, yyyy")}
              </h3>
            </div>
          )}
          { imgUrl && (<img src={`http://nytimes.com/${imgUrl}`} alt={data.headline.print_headline} />) }
          {data.snippet && (
            <p className="article-body">
              {data.snippet}
            </p>
          )}
          {data.new_desk && (
            <h4>{data.new_desk}</h4>
          )}
          {data.section_name && (
            <h4>{data.section_name}</h4>
          )}
        </div>
      </VisibilitySensor>
    );
  }
}
