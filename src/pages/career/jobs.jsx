import { Helmet } from 'react-helmet-async';

import { _jobs } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { CareerJobsView } from 'src/sections/_career/view/career-jobs-view';

// ----------------------------------------------------------------------

const metadata = { title: `Jobs | Career - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <CareerJobsView jobs={_jobs} />
    </>
  );
}
