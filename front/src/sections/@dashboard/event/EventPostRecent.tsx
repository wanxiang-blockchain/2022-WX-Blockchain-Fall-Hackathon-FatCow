// @mui
import { Grid, Typography } from '@mui/material';
// @types
import { Post } from '../../../@types/event';
//
import EventPostCard from './EventPostCard';

// ----------------------------------------------------------------------

type Props = {
  posts: Post[];
};

export default function EventPostRecent({ posts }: Props) {
  return (
    <>
      <Typography variant="h4" sx={{ mt: 10, mb: 5 }}>
        Recent events
      </Typography>

      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid key={post.id} item xs={12} sm={6} md={3}>
            <EventPostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
