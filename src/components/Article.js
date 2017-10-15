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
    const monthDict = {
      0: 'Jan',
      1: 'Feb',
      2: 'Mar',
      3: 'Apr',
      4: 'May',
      5: 'Jun',
      6: 'Jul',
      7: 'Aug',
      8: 'Sep',
      9: 'Oct',
      10: 'Nov',
      11: 'Dec'
    };

    const date = new Date(data.pub_date);
    const month = monthDict[date.getUTCMonth()];
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    

    return (
      <VisibilitySensor partialVisibility onChange={(vis) => this.handleUpdate(vis, data)}>
        <div className="article">
          {data.headline.main && (
            <a href={data.web_url} target="_blank">
              <h1 className="article-title">
                {data.headline.main}  
              </h1>
            </a>
          )}
          {data.byline && data.pub_date && (
            <div className="by-line">
              <h3 className="author">
                {data.byline.original}          
              </h3>
              <h3 className="date">
                {`${month}. ${day}, ${year}`}
              </h3>
            </div>
          )}
          { imgUrl && (<img src={`http://nytimes.com/${imgUrl}`} alt={data.headline.print_headline} />) }
          {data.snippet && (
            <p className="article-body">
              {data.snippet}
            </p>
          )}
          <a className="read-more" href={data.web_url} target="_blank">Read More</a>
            <div className="tags">
          {data.new_desk && (
            <h4>{data.new_desk}</h4>
          )}
          {data.section_name && (
            <h4>{data.section_name}</h4>
          )}
            </div>
        </div>
      </VisibilitySensor>
    );
  }
}
