import { Helmet } from 'react-helmet-async';

import { _courses } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { ElearningCourseView } from 'src/sections/_elearning/view/elearning-course-view';

// ----------------------------------------------------------------------

const metadata = { title: `Course details | E-learning - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ElearningCourseView course={_courses[1]} relatedCourses={_courses.slice(0, 3)} />
    </>
  );
}
