import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function ElearningCourseDetailsLessonItem({
  lesson,
  expanded,
  selected,
  onSelected,
  onExpanded,
}) {
  const playIcon = selected ? 'solar:pause-circle-outline' : 'solar:play-outline';

  return (
    <Accordion expanded={expanded} onChange={onExpanded} disabled={!lesson.unLocked}>
      <AccordionSummary>
        <Box display="flex" alignItems="center" sx={{ width: 1 }}>
          <Iconify
            width={22}
            icon={!lesson.unLocked ? 'solar:lock-password-outline' : playIcon}
            onClick={onSelected}
            sx={{ mr: 2 }}
          />

          <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
            {lesson.title}
          </Typography>

          <Typography variant="body2">{lesson.duration} m</Typography>

          <Iconify
            width={16}
            icon={expanded ? 'solar:alt-arrow-down-outline' : 'solar:alt-arrow-right-outline'}
            sx={{ ml: 2 }}
          />
        </Box>
      </AccordionSummary>

      <AccordionDetails sx={{ typography: 'body2', color: 'text.secondary' }}>
        {lesson.description}
      </AccordionDetails>
    </Accordion>
  );
}
