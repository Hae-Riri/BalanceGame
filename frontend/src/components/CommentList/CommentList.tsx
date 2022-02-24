import React from 'react';
import { observer } from 'mobx-react-lite';

import ArticleModel from '@/models/ArticleModel';
import Comment from '@/components/Comment';

interface ICommentListProps {
  articles: ArticleModel[];
}

const CommentList = ({ articles }: ICommentListProps) => {
  return (
    <section className="history-list">
      {articles.map((article) => {
        return <Comment key={`${article.id}-${article.title}`} article={article} />;
      })}
    </section>
  );
};

export default observer<ICommentListProps>(CommentList);
