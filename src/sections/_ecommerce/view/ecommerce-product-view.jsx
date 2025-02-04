import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import { useBoolean } from 'src/hooks/use-boolean';

import { _reviews } from 'src/_mock';

import { Markdown } from 'src/components/markdown';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ReviewNewForm } from '../../review/review-new-form';
import { EcommerceReviewList } from '../review/ecommerce-review-list';
import { EcommerceReviewSummary } from '../review/ecommerce-review-summary';
import { EcommerceProductDetailsInfo } from '../product/details/ecommerce-product-details-info';
import { EcommerceProductDetailsCarousel } from '../product/details/ecommerce-product-details-carousel';

// ----------------------------------------------------------------------

export function EcommerceProductView({ product }) {
  const openReviewForm = useBoolean();

  const renderReview = (
    <>
      <EcommerceReviewSummary
        ratingNumber={4.1}
        reviewNumber={123456}
        onOpenForm={openReviewForm.onTrue}
      />

      <Container>
        <EcommerceReviewList reviews={_reviews} />
      </Container>

      <ReviewNewForm open={openReviewForm.value} onClose={openReviewForm.onFalse} />
    </>
  );

  return (
    <>
      <Container sx={{ overflow: 'hidden' }}>
        <CustomBreadcrumbs
          links={[{ name: 'Home' }, { name: 'Mobile Phones' }, { name: 'Apple iPhone 14' }]}
          sx={{ my: 5 }}
        />

        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid xs={12} md={6} lg={7}>
            <EcommerceProductDetailsCarousel images={product?.images || []} />
          </Grid>

          <Grid xs={12} md={6} lg={5}>
            <EcommerceProductDetailsInfo
              name={product?.name || ''}
              price={product?.price || 0}
              caption={product?.caption || ''}
              priceSale={product?.priceSale || 0}
              ratingNumber={product?.ratingNumber || 0}
              totalReviews={product?.totalReviews || 0}
            />
          </Grid>
        </Grid>

        <Grid container columnSpacing={{ md: 8 }}>
          <Grid xs={12} md={6} lg={7}>
            <Markdown
              content={product?.description || ''}
              sx={{
                my: 10,
                '& table': {
                  '& td': { px: 2, typography: 'body2' },
                  '& td:first-of-type': { color: 'text.secondary' },
                  'tbody tr:nth-of-type(odd)': { bgcolor: 'transparent' },
                },
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {renderReview}
    </>
  );
}
