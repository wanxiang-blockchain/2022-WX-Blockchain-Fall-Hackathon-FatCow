import { useEffect, useState, useCallback } from 'react';
import { sentenceCase } from 'change-case';
import { useSnackbar } from 'notistack';

// next
import { useRouter } from 'next/router';
// @mui
import {
  Box,
  Card,
  Divider,
  Container,
  Typography,
  Pagination,
  Stack,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
import useSettings from '../../../hooks/useSettings';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import useAuth from '../../../hooks/useAuth';

// utils
import axios from '../../../utils/axios';
import { checkActiveAccount, clearActiveAccount } from '../../../utils/dAPPClient';
// layouts
import Layout from '../../../layouts';
// @types
import { Post } from '../../../@types/event';
import { Group } from '../../../@types/group';
// components
import Page from '../../../components/Page';
import Markdown from '../../../components/Markdown';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import { SkeletonPost } from '../../../components/skeleton';
import Iconify from '../../../components/Iconify';
import CopyClipboard from '../../../components/CopyClipboard';

// sections
import {
  EventPostHero,
  EventPostTags,
  EventPostRecent,
  EventPostCommentList,
  EventPostCommentForm,
  EventAttendeeList,
  EventGroupCard,
} from '../../../sections/@dashboard/event';

import { _eventList, _userMembers, _groupList } from '../../../_mock';
import { spacing } from '@mui/system';

// ----------------------------------------------------------------------

interface ShareDialogProps {
  open: boolean;
  value: string;
}

function ShareDialog(props: ShareDialogProps) {
  const { value, open } = props;

  // const handleClose = () => {
  //   onClose();
  // };

  return (
    <Dialog open={open} fullWidth>
      <DialogTitle>Copy Link To Share</DialogTitle>
      <DialogContent sx={{ mt: 1 }}>
        <CopyClipboard value={value} />
      </DialogContent>
    </Dialog>
  );
}

EventPost.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function EventPost() {
  const { themeStretch } = useSettings();

  const { login } = useAuth();

  const { enqueueSnackbar } = useSnackbar();

  const isMountedRef = useIsMountedRef();

  const { query } = useRouter();

  const { id, sid } = query;

  const group: Group = _groupList.find(
    (item) => item.id === 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1'
  ) as unknown as Group;

  const [recentPosts, setRecentPosts] = useState([]);

  const [post, setPost] = useState<Post | null>(null);

  const [shareState, setShareState] = useState<ShareDialogProps>({ open: false, value: '' });

  const [error, setError] = useState(null);

  const handleAttend = async () => {
    try {
      await clearActiveAccount();
      await checkActiveAccount();
      login();
      // router.replace(PATH_AUTH.login);
    } catch (error) {
      console.error(error);
    }
  };

  const handleShare = async () => {
    try {
      await clearActiveAccount();
      const account = await checkActiveAccount();
      login();

      setShareState({
        open: true,
        value: window.location.href.concat(`#sid=${account}`),
      });
      // router.replace(PATH_AUTH.login);
    } catch (error) {
      console.error(error);
    }
  };

  const getPost = useCallback(async () => {
    try {
      // const response = await axios.get('/api/blog/post', {
      //   params: { title },
      // });

      // if (isMountedRef.current) {
      //   setPost(response.data.post);
      // }
      setPost(_eventList.find((item) => item.id === id) as unknown as Post);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  }, [isMountedRef, id]);

  const getRecentPosts = useCallback(async () => {
    try {
      const response = await axios.get('/api/blog/posts/recent', {
        params: { title: 'Apply These 7 Secret Techniques To Improve Event' },
      });

      if (isMountedRef.current) {
        setRecentPosts(response.data.recentPosts);
      }
    } catch (error) {
      console.error(error);
    }
  }, [isMountedRef, id]);

  useEffect(() => {
    getPost();
    getRecentPosts();
  }, [getRecentPosts, getPost]);

  return (
    <Page title="Event: Details">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Event Details"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Event', href: PATH_DASHBOARD.event.root },
            // { name: sentenceCase(post?.title as string) },
          ]}
        />

        {post && (
          <Card>
            <EventPostHero post={post} />

            <Box sx={{ p: { xs: 3, md: 5 } }}>
              <Typography variant="h6" sx={{ mb: 5 }}>
                {post.description}
              </Typography>
              <Markdown children={post.body} />
              <Box sx={{ my: 2 }}>
                <EventGroupCard group={group} />
              </Box>
              {/* <Box sx={{ my: 5 }}>
                <Divider />
                <EventPostTags post={post} />
                <Divider />
              </Box> */}
              <Box sx={{ display: 'flex', my: 2 }}>
                <Typography variant="h4">Comments</Typography>
                <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                  {/* ({post.comments.length}) */}0
                </Typography>
              </Box>
              <EventPostCommentList post={post} />
              {/* <Box sx={{ mb: 5, mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                <Pagination count={8} color="primary" />
              </Box> */}
              <EventPostCommentForm />
              <EventAttendeeList members={_userMembers} />
            </Box>
          </Card>
        )}
        {post && (
          <Card sx={{ mt: 2 }}>
            <Box sx={{ display: 'flex', m: 3 }}>
              {/* <Typography variant="subtitle2">WED, SEP 14 · 6:30 AM GMT+8</Typography> */}
              <Button
                size="large"
                type="submit"
                onClick={handleAttend}
                variant="contained"
                startIcon={<Iconify icon={'eva:person-add-fill'} />}
              >
                Attend
              </Button>
              <Button
                size="large"
                color="secondary"
                variant="contained"
                onClick={handleShare}
                startIcon={<Iconify icon={'eva:share-fill'} />}
                sx={{ ml: 1 }}
              >
                Share
              </Button>
              {/* <Button
                  fullWidth
                  disabled
                  size="large"
                  color="warning"
                  variant="contained"
                  startIcon={<Iconify icon={'ic:round-add-shopping-cart'} />}
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  Edit
                </Button> */}
            </Box>
          </Card>
        )}
        {!post && !error && <SkeletonPost />}

        <ShareDialog {...shareState} />

        {error && <Typography variant="h6">404 {error}!</Typography>}

        <EventPostRecent posts={recentPosts} />
      </Container>
    </Page>
  );
}
