import React from 'react';

const Article = props => {
  const imgUrl = props.data.multimedia[0] ? props.data.multimedia[0].url : "";
  return (
    <div className="article">
      <h1 className="article-title">
        {props.data.headline.main}
      </h1>
      <h3 className="author">
        {props.data.byline.original}
      </h3>
      { imgUrl && (<img src={`http://nytimes.com/${imgUrl}`} alt={props.data.headline.print_headline} />) }
      <p className="article-body">
        {props.data.snippet}
      </p>
    </div>
  );
};

export default Article;
