import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { EcommerceProductItemBestSellers } from '../product/item/ecommerce-product-item-best-sellers';

// ----------------------------------------------------------------------

const TABS = ['Featured', 'Top rated', 'Onsale'];

// ----------------------------------------------------------------------

export function EcommerceLandingPopularProducts({ products, sx, ...other }) {
  const [tab, setTab] = useState(TABS[0]);

  const handleChangeTab = useCallback((event, newValue) => {
    setTab(newValue);
  }, []);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 8 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Typography
          variant="h3"
          sx={{
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          Popular products
        </Typography>

        <Tabs
          value={tab}
          scrollButtons="auto"
          variant="scrollable"
          allowScrollButtonsMobile
          onChange={handleChangeTab}
          sx={{ my: 5 }}
        >
          {TABS.map((category) => (
            <Tab key={category} value={category} label={category} />
          ))}
        </Tabs>

        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
        >
          {products.map((product) => (
            <EcommerceProductItemBestSellers key={product.id} product={product} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
