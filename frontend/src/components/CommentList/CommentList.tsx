import React from 'react';
import { observer } from 'mobx-react-lite';

import CommentModel from '@/models/CommentModel';
// import Comment from '@/components/Comment';

interface ICommentListProps {
  comments: CommentModel[];
}

// interface ICommentListProps {
//   comments: ICommentData[];
// }

const CommentList = ({ comments }: ICommentListProps) => {
  return (
    <section className="history-list">
      {comments.map(() => {
        // return <Comment key={`${comment.id}-${comment.createdAt}`} article={comment} />;
        return <div />
      })}
    </section>
  );
};

export default observer<ICommentListProps>(CommentList);
