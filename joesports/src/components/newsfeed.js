import React from 'react';

const NewsFeed = (props) => {
  return (
    <div>
      {props.chosenArticles && props.chosenArticles.map((article, key) =>
        <div key={key}>
          <h2>{article.source.name}</h2>
          <img src={article.urlToImage} />
          <h3>{article.title}</h3>
          <a href={article.url}>url</a>
          <p>{article.description}</p>
          <p>{article.content}</p>
        </div>
      )}

    </div>
  )
}

export default NewsFeed;

//{this.state.user.chosenArticles && this.state.user.chosenArticles.map(article => <p>{article.title}</p>)}
// }