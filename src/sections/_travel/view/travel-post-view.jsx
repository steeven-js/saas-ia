import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';
import { _mock, _tags, _socials, _travelPosts } from 'src/_mock';

import { Markdown } from 'src/components/markdown';
import { SvgColor } from 'src/components/svg-color';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { PostTags } from '../../blog/post-tags';
import { Advertisement } from '../../advertisement';
import { PostAuthor } from '../../blog/post-author';
import { PostSidebar } from '../../blog/post-sidebar';
import { TravelNewsletter } from '../travel-newsletter';
import { TravelPostHero } from '../posts/travel-post-hero';
import { TravelLatestPosts } from '../posts/travel-latest-posts';

// ----------------------------------------------------------------------

const post = _travelPosts[0];
const recentPosts = _travelPosts.slice(-4);
const latestPosts = _travelPosts.slice(0, 4);

// ----------------------------------------------------------------------

export function TravelPostView() {
  const renderSocials = (
    <Box gap={1.5} display="flex" sx={{ mt: 5 }}>
      <Box component="span" sx={{ lineHeight: '30px', typography: 'subtitle2' }}>
        Share:
      </Box>
      <Box gap={1} display="flex" alignItems="center" flexWrap="wrap">
        {_socials.map((social) => (
          <Button
            key={social.value}
            size="small"
            variant="outlined"
            startIcon={
              (social.value === 'twitter' && (
                <SvgColor
                  width={20}
                  src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
                />
              )) || (
                <Box
                  component="img"
                  loading="lazy"
                  alt={social.label}
                  src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
                  sx={{ width: 20, height: 20 }}
                />
              )
            }
          >
            {social.label}
          </Button>
        ))}
      </Box>
    </Box>
  );

  return (
    <>
      <TravelPostHero
        title={post?.title || ''}
        heroUrl={post?.heroUrl || ''}
        duration={post?.duration || ''}
        createdAt={post?.createdAt || ''}
      />

      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: 'Home', href: '/' },
            { name: 'Blog', href: paths.travel.posts },
            { name: post?.title },
          ]}
        />
      </Container>

      <Divider sx={{ mb: { xs: 6, md: 10 } }} />

      <Container>
        <Grid disableEqualOverflow container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <Typography variant="h5" sx={{ mb: 5 }}>
              {post?.description}
            </Typography>

            <Markdown content={post?.content || ''} firstLetter />

            {!!post?.tags?.length && <PostTags tags={post.tags} />}

            {renderSocials}

            <Divider sx={{ mt: 10 }} />

            <PostAuthor author={post?.author} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar
              tags={_tags}
              author={post?.author}
              categories={[
                { label: 'Marketing', path: '' },
                { label: 'Community', path: '' },
                { label: 'Tutorials', path: '' },
                { label: 'Business', path: '' },
                { label: 'Management', path: '' },
              ]}
              recentPosts={recentPosts}
              slots={{
                bottomNode: (
                  <Advertisement
                    title="Advertisement"
                    description="Duis leo. Donec orci lectus, aliquam ut, faucibus non"
                    imageUrl={_mock.image.travel(9)}
                    action={
                      <Button variant="contained" color="primary">
                        Go now
                      </Button>
                    }
                  />
                ),
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {!!latestPosts?.length && <TravelLatestPosts posts={latestPosts} />}

      <TravelNewsletter />
    </>
  );
}
