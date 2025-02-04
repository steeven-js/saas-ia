import { m } from 'framer-motion';
import { useState, useEffect } from 'react';

import Tab from '@mui/material/Tab';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Radio from '@mui/material/Radio';
import Badge from '@mui/material/Badge';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import AvatarGroup from '@mui/material/AvatarGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { _mock } from 'src/_mock';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const Row = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: theme.spacing(3),
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(5),
  },
}));

// ----------------------------------------------------------------------

function AnimatedDiv({ children }) {
  const variants = varFade({ distance: 24 }).inUp;
  return <m.div variants={variants}>{children}</m.div>;
}

// ----------------------------------------------------------------------

export function HomeFlexibleComponents({ sx, ...other }) {
  const [tab, setTab] = useState('angular');

  const [rating, setRating] = useState(5);

  const [toggleButton, setToggleButton] = useState('search');

  const [circularProgress, setCircularProgress] = useState(0);

  const [categorySelect, setCategorySelect] = useState('clothes');

  useEffect(() => {
    const timer = setInterval(() => {
      setCircularProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const renderSummary = (
    <>
      <AnimatedDiv>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Interface Starter Kit
        </Typography>
      </AnimatedDiv>

      <AnimatedDiv>
        <Typography variant="h2" sx={{ my: 3 }}>
          Flexible components
        </Typography>
      </AnimatedDiv>

      <AnimatedDiv>
        <Typography sx={{ color: 'text.secondary', mb: 5 }}>
          Pre-set components are easy to customize and use. We collected most popular elements.
          Menu, sliders, buttons, inputs etc. are all here. Just dive in!
        </Typography>
      </AnimatedDiv>

      <AnimatedDiv>
        <Button
          component={RouterLink}
          href={paths.components}
          color="inherit"
          size="large"
          variant="outlined"
          endIcon={<Iconify width={16} icon="solar:alt-arrow-right-outline" />}
        >
          Browse components
        </Button>
      </AnimatedDiv>
    </>
  );

  const renderContent = (
    <Stack
      spacing={5}
      alignItems="center"
      sx={{
        borderRadius: 3,
        p: { xs: 3, sm: 5 },
        border: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
      }}
    >
      <Row>
        <Button
          size="large"
          variant="contained"
          color="primary"
          startIcon={<Iconify icon="eva:plus-outline" />}
        >
          Add to cart
        </Button>

        <Fab variant="extended" color="inherit" aria-label="upload">
          <Iconify width={24} icon="solar:upload-square-outline" />
          Upload
        </Fab>

        <Fab color="info" aria-label="media">
          <Iconify width={22} icon="solar:play-outline" />
        </Fab>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ position: 'relative', typography: 'caption' }}
        >
          <CircularProgress
            size={56}
            thickness={3}
            color="warning"
            variant="determinate"
            aria-label="Progress"
            value={circularProgress}
          />
          <Box
            component="span"
            sx={{ position: 'absolute' }}
          >{`${Math.round(circularProgress)}%`}</Box>
        </Box>
      </Row>

      <Row>
        <Tabs
          value={tab}
          onChange={(event, newValue) => setTab(newValue)}
          sx={{ [`& .${tabsClasses.flexContainer}`]: { gap: 3 } }}
        >
          <Tab value="angular" label="Angular" />
          <Tab value="react" label="React" />
          <Tab value="vue" label="Vue" />
        </Tabs>

        <ToggleButtonGroup
          exclusive
          color="primary"
          value={toggleButton}
          onChange={(event, newAlignment) => {
            if (newAlignment !== null) {
              setToggleButton(newAlignment);
            }
          }}
          aria-label="actions"
        >
          <ToggleButton value="share" aria-label="share">
            <Iconify icon="solar:share-outline" />
          </ToggleButton>
          <ToggleButton value="search" aria-label="search">
            <Iconify icon="carbon:search" />
          </ToggleButton>
          <ToggleButton disabled value="email" aria-label="email">
            <Iconify icon="carbon:email" />
          </ToggleButton>
        </ToggleButtonGroup>

        <Chip
          variant="soft"
          color="primary"
          label="Pamela"
          onDelete={() => {}}
          avatar={<Avatar alt="Pamela">P</Avatar>}
        />
      </Row>

      <Row>
        <Avatar alt="Remy Sharp" src={_mock.image.avatar(4)} sx={{ width: 64, height: 64 }} />

        <AvatarGroup max={4}>
          {[...Array(8)].map((_, index) => (
            <Avatar key={index} alt={_mock.fullName(index)} src={_mock.image.avatar(index)} />
          ))}
        </AvatarGroup>

        <Tooltip title="Tooltip" placement="top" arrow>
          <Button color="inherit" variant="outlined">
            Hover me
          </Button>
        </Tooltip>

        <Rating value={rating} onChange={(event, newValue) => setRating(newValue)} />
      </Row>

      <Row>
        <Slider
          size="small"
          defaultValue={72}
          valueLabelDisplay="on"
          aria-label="demo slider"
          sx={{ width: 1, minWidth: 240, maxWidth: 0.44 }}
        />

        <Alert
          severity="success"
          action={
            <IconButton color="inherit" size="small" aria-label="close" onClick={() => {}}>
              <Iconify icon="eva:close-outline" />
            </IconButton>
          }
          sx={{ width: 1, minWidth: 240, maxWidth: 0.44 }}
        >
          This is a <strong>success</strong> alert
        </Alert>
      </Row>

      <Row>
        <Card sx={{ maxWidth: 320 }}>
          <CardHeader
            title="Jayvion Simon"
            subheader="California, United States"
            avatar={
              <Badge variant="online" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <Avatar
                  alt={_mock.fullName(0)}
                  src={_mock.image.avatar(0)}
                  sx={{ width: 48, height: 48 }}
                />
              </Badge>
            }
            titleTypographyProps={{ typography: 'subtitle2', sx: { mb: 0.25 } }}
            subheaderTypographyProps={{ typography: 'caption' }}
            sx={{ p: 2 }}
          />

          <Box sx={{ px: 1 }}>
            <Box
              component="img"
              alt="Cover"
              src={_mock.image.cover(20)}
              sx={{ borderRadius: 1.5, objectFit: 'cover', aspectRatio: '4/3' }}
            />
          </Box>

          <Typography variant="body2" sx={{ color: 'text.secondary', pt: 2, px: 2 }}>
            Phasellus dolor. Fusce egestas elit eget lorem. Quisque id odio.
          </Typography>

          <Box display="flex" alignItems="center" sx={{ px: 2, py: 1 }}>
            <Checkbox
              defaultChecked
              color="error"
              size="small"
              icon={<Iconify icon="solar:heart-outline" />}
              checkedIcon={<Iconify icon="solar:heart-bold" />}
              inputProps={{ id: 'favorite-checkbox', 'aria-label': 'Favorite checkbox' }}
            />
            <Box sx={{ flexGrow: 1 }} />
            <IconButton aria-label="Share">
              <Iconify icon="solar:share-outline" />
            </IconButton>
            <IconButton aria-label="Comment">
              <Iconify icon="solar:chat-line-outline" />
            </IconButton>
          </Box>
        </Card>

        <Stack spacing={2.5} flex="1 1 auto">
          <FormControlLabel
            control={<Switch defaultChecked inputProps={{ id: 'demo-switch' }} />}
            label="Switch"
          />

          <FormControlLabel
            control={<Checkbox inputProps={{ id: 'demo-checkbox' }} />}
            label="Checkbox"
          />

          <FormControlLabel
            value="Radio"
            control={<Radio defaultChecked inputProps={{ id: 'demo-radio' }} />}
            label="Radio button"
          />

          <TextField label="Full name" defaultValue="Pamela Mclellan" />

          <TextField
            select
            label="Category"
            value={categorySelect}
            onChange={(event) => setCategorySelect(event.target.value)}
            SelectProps={{ native: true }}
          >
            {[
              { value: 'clothes', label: 'Clothes' },
              { value: 'footwear', label: 'Footwear' },
              { value: 'jean', label: 'Jean' },
            ].map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Stack>
      </Row>
    </Stack>
  );

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 10 },
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid
          container
          disableEqualOverflow
          spacing={{ xs: 5, md: 3 }}
          justifyContent={{ md: 'space-between' }}
        >
          <Grid xs={12} md={4} sx={{ pt: { md: 10 }, textAlign: { xs: 'center', md: 'left' } }}>
            {renderSummary}
          </Grid>

          <Grid xs={12} md={7}>
            <AnimatedDiv>{renderContent}</AnimatedDiv>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
