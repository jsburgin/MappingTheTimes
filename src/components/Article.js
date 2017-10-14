import React from 'react';

const Article = props => {
  const imgUrl = props.data.media[0] ? props.data.media[0]['media-metadata'][0].url : "";
  return (
    <div className="article">
      <h1 className="article-title">
        {props.data.title}
      </h1>
      <h3 className="author">
        {props.data.byline}
      </h3>
      { imgUrl && (<img src={imgUrl} />) }
      <p className="article-body">
        {props.data.abstract}
      </p>
    </div>
  );
};

export default Article;
