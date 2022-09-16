// @mui
import { Box, List } from '@mui/material';
// @types
import { Post } from '../../../@types/event';
//
import EventPostCommentItem from './EventPostCommentItem';

// ----------------------------------------------------------------------

type EventPostCommentListProps = {
  post: Post;
};

export default function EventPostCommentList({ post }: EventPostCommentListProps) {
  const { comments } = post;

  return (
    <List disablePadding>
      {comments.map((comment) => {
        const { id, replyComment, users } = comment;
        const hasReply = replyComment.length > 0;

        return (
          <Box key={id} sx={{}}>
            <EventPostCommentItem
              name={comment.name}
              avatarUrl={comment.avatarUrl}
              postedAt={comment.postedAt}
              message={comment.message}
            />
            {hasReply &&
              replyComment.map((reply) => {
                const user = users.find((_user) => _user.id === reply.userId);
                return (
                  <EventPostCommentItem
                    key={reply.id}
                    tagUser={reply.tagUser}
                    postedAt={reply.postedAt}
                    message={reply.message}
                    name={user?.name || ''}
                    avatarUrl={user?.avatarUrl}
                    hasReply
                  />
                );
              })}
          </Box>
        );
      })}
    </List>
  );
}
