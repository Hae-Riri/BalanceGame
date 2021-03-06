import React from 'react';
import { observer } from 'mobx-react-lite';

import ArticleModel from '@/models/ArticleModel';
import { convertTimeToLeftTime } from '@/utils/utils';

const History = ({ article }: { article: ArticleModel }) => {
  const { title, content, createdAt, voteCount, id } = article;
  const { leftTime, unit } = convertTimeToLeftTime(createdAt);

  const moveArticlePage = (): void => {
    document.location.href = `/article?articleId=${id}`;
  };

  return (
    <section className="history" onClick={moveArticlePage} onKeyDown={moveArticlePage} role="button" tabIndex={0}>
      <h3>{title}</h3>
      <p className="history__content">{content}</p>
      <div className="history__footer">
        <time>{`${leftTime} ${unit} ago`}</time>
        <p className="history__vote-count">투표수: {voteCount}</p>
      </div>
    </section>
  );
};

export default observer(History);
