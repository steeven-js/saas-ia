import { Fragment } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { PostItem } from './elearning-posts';
import { PostItemMobile } from '../../blog/post-item-mobile';

// ----------------------------------------------------------------------

export function ElearningLatestPosts({ posts, sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 15 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Box display="flex" alignItems="center" sx={{ mb: { xs: 5, md: 10 } }}>
          <Typography component="h6" variant="h3" sx={{ flexGrow: 1 }}>
            Latest posts
          </Typography>

          <Button
            component={RouterLink}
            href={paths.eLearning.posts}
            color="inherit"
            endIcon={<Iconify icon="solar:alt-arrow-right-outline" />}
          >
            View all
          </Button>
        </Box>

        <Box
          display="grid"
          gap={{ xs: 3, md: 4 }}
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
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
