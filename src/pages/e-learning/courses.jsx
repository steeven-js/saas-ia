import { Helmet } from 'react-helmet-async';

import { _courses } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { ElearningCoursesView } from 'src/sections/_elearning/view/elearning-courses-view';

// ----------------------------------------------------------------------

const metadata = { title: `Course list | E-learning - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ElearningCoursesView courses={_courses} />
    </>
  );
}
