import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { ElearningCourseItem } from './elearning-course-item';

// ----------------------------------------------------------------------

export function ElearningCourseList({ courses, sx, ...other }) {
  return (
    <>
      <Box gap={4} display="flex" flexDirection="column" sx={sx} {...other}>
        {courses.map((course) => (
          <ElearningCourseItem key={course.id} course={course} />
        ))}
      </Box>

      <Pagination
        count={10}
        sx={{
          my: 10,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}
