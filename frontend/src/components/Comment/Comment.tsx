import React from 'react';
import { observer } from 'mobx-react-lite';

import CommentModel from '@/models/CommentModel';

const Comment = ({ article }: { article: CommentModel }) => {
  const { content, createdAt } = article;

  return (
    <section className="history">
      <p className="history__content">{content}</p>
      <div className="history__footer">
        <time>{createdAt}</time>
      </div>
    </section>
  );
};

export default observer(Comment);
