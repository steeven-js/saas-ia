import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/use-boolean';
import { useSetState } from 'src/hooks/use-set-state';

import { _tags } from 'src/_mock';

import { Iconify } from 'src/components/iconify';

import { ElearningFilters } from '../elearning-filters';
import { ElearningNewsletter } from '../elearning-newsletter';
import { ElearningCourseList } from '../list/elearning-course-list';

// ----------------------------------------------------------------------

export function ElearningCoursesView({ courses }) {
  const openMobile = useBoolean();

  const filters = useSetState({
    fee: [],
    level: [],
    keyword: '',
    duration: [],
    rating: null,
    language: [],
    categories: [],
  });

  return (
    <>
      <Container>
        <Box display="flex" alignItems="center" sx={{ pb: 5, pt: { xs: 3, md: 5 } }}>
          <Typography variant="h2" sx={{ flexGrow: 1 }}>
            Courses
          </Typography>

          <Button
            color="inherit"
            variant="contained"
            startIcon={<Iconify width={18} icon="solar:filter-outline" />}
            onClick={openMobile.onTrue}
            sx={{ display: { md: 'none' } }}
          >
            Filters
          </Button>
        </Box>

        <Box gap={{ xs: 0, md: 8 }} display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
          <ElearningFilters
            filters={filters}
            open={openMobile.value}
            onClose={openMobile.onFalse}
            options={{
              ratings: ['Up 4 stars', 'Up 3 stars', 'Up 2 stars'],
              durations: ['0 - 1 Hour', '1 - 3 Hours', '3 - 6 Hours', '6 - 18 Hours', '18+ Hours'],
              categories: _tags,
              levels: ['Beginner', 'Intermediate', 'Expert'],
              fees: ['Free', 'Paid'],
              languages: ['English', 'Spanish', 'Chinese', 'French', 'Russian'],
            }}
          />

          <Box
            sx={(theme) => ({
              [theme.breakpoints.up('md')]: {
                minWidth: 0,
                flex: '1 1 auto',
              },
            })}
          >
            <ElearningCourseList courses={courses || []} />
          </Box>
        </Box>
      </Container>

      <ElearningNewsletter />
    </>
  );
}
