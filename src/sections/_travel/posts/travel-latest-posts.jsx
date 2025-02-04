import { Fragment } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import { maxLine } from 'src/theme/styles';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';

import { PostTime } from '../../blog/post-time';
import { PostItemMobile } from '../../blog/post-item-mobile';

// ----------------------------------------------------------------------

export function TravelLatestPosts({ posts, sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: 'background.neutral',
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Box display="flex" alignItems="center" sx={{ mb: { xs: 5, md: 10 } }}>
          <Typography variant="h3" sx={{ flexGrow: 1 }}>
            Latest posts
          </Typography>

          <Button
            component={RouterLink}
            href={paths.travel.posts}
            color="inherit"
            endIcon={<Iconify icon="solar:alt-arrow-right-outline" />}
          >
            View all
          </Button>
        </Box>

        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
        >
          {posts.map((post) => (
            <Fragment key={post.id}>
              <PostItem post={post} sx={{ display: { xs: 'none', md: 'block' } }} />
              <PostItemMobile post={post} sx={{ display: { xs: 'flex', md: 'none' } }} />
            </Fragment>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

export function PostItem({ post, sx, ...other }) {
  return (
    <Box sx={sx} {...other}>
      <Image src={post.coverUrl} alt={post.title} ratio="1/1" sx={{ borderRadius: 2 }} />

      <Box sx={{ my: 2.5 }}>
        <PostTime createdAt={fDate(post.createdAt)} duration={post.duration} sx={{ mb: 1 }} />

        <Link
          component={RouterLink}
          href={paths.travel.post}
          color="inherit"
          variant="h6"
          sx={(theme) => ({
            ...maxLine({ line: 2, persistent: theme.typography.h6 }),
          })}
        >
          {post.title}
        </Link>
      </Box>

      <Box gap={1.5} display="flex" alignItems="center" sx={{ typography: 'body2' }}>
        <Avatar alt={post.author.name} src={post.author.avatarUrl} sx={{ width: 40, height: 40 }} />
        {post.author.name}
      </Box>
    </Box>
  );
}
