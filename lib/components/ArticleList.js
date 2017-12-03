import React from 'react';

import Article from './Article';

const ArticleList = (props) => {
  console.info('Object.values(props.articles)', props);
  return (
    <div>
      {Object.values(props.articles).map((article) =>
        <Article
          key={article.id}
          article={article}
          actions={props.articleActions}
        />
      )};
    </div>
  );
};

export default ArticleList;
