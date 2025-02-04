import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';

import { PostTime } from '../../blog/post-time';

// ----------------------------------------------------------------------

export function CareerPosts({ posts, sx, ...other }) {
  return (
    <>
      <Box
        sx={{
          columnGap: 4,
          columnCount: { xs: 1, md: 2 },
          ...sx,
        }}
        {...other}
      >
        {posts.map((post, index) => (
          <PostItem key={post.id} post={post} index={index} sx={{ breakInside: 'avoid', mb: 4 }} />
        ))}
      </Box>

      <Stack alignItems="center" sx={{ mt: 5, mb: { xs: 10, md: 0 } }}>
        <Button
          size="large"
          color="inherit"
          variant="outlined"
          endIcon={<Iconify icon="carbon:arrow-down" />}
        >
          Load more
        </Button>
      </Stack>
    </>
  );
}

// ----------------------------------------------------------------------

export function PostItem({ post, index, sx }) {
  const isNoImage = index === 1 || index === 4;
  const isSmallImage = index === 2 || index === 7;

  return (
    <Stack
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        ...sx,
      }}
    >
      {!isNoImage && (
        <Image src={post.coverUrl} alt={post.title} ratio={isSmallImage ? '4/3' : '1/1'} />
      )}

      <Stack
        spacing={1}
        sx={{
          p: 3,
          bgcolor: 'background.neutral',
          ...(isNoImage && {
            bgcolor: 'primary.lighter',
          }),
        }}
      >
        <PostTime
          createdAt={fDate(post.createdAt)}
          duration={post.duration}
          sx={{
            ...(isNoImage && { color: 'grey.500' }),
          }}
        />

        <Link
          component={RouterLink}
          href={paths.career.post}
          color="inherit"
          variant="h5"
          sx={{
            ...(isNoImage && { color: 'grey.800' }),
          }}
        >
          {post.title}
        </Link>

        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            ...(isNoImage && { color: 'grey.600' }),
          }}
        >
          {post.description}
        </Typography>

        <Box
          gap={1.5}
          display="flex"
          alignItems="center"
          sx={{
            pt: 1.5,
            typography: 'body2',
            ...(isNoImage && { color: 'grey.800' }),
          }}
        >
          <Avatar src={post.author?.avatarUrl} />
          {post.author?.name}
        </Box>
      </Stack>
    </Stack>
  );
}
