import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import { maxLine } from 'src/theme/styles';

import { Image } from 'src/components/image';

import { PostTime } from '../../blog/post-time';

// ----------------------------------------------------------------------

export function TravelPosts({ posts, sx, ...other }) {
  return (
    <>
      <Box
        display="grid"
        columnGap={4}
        rowGap={{ xs: 4, md: 5 }}
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
        }}
        sx={sx}
        {...other}
      >
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </Box>

      <Pagination
        count={10}
        sx={{
          py: 10,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      />
    </>
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
          variant="h5"
          sx={(theme) => ({
            ...maxLine({ line: 2, persistent: theme.typography.h5 }),
          })}
        >
          {post.title}
        </Link>
      </Box>

      <Box gap={1.5} display="flex" alignItems="center" sx={{ typography: 'body2' }}>
        <Avatar src={post.author.avatarUrl} />
        {post.author.name}
      </Box>
    </Box>
  );
}
