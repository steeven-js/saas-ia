import { useEffect } from 'react';

import Box from '@mui/material/Box';

import { Image } from 'src/components/image';
import { Lightbox, useLightBox } from 'src/components/lightbox';
import {
  Carousel,
  useCarousel,
  CarouselThumb,
  CarouselThumbs,
  CarouselArrowFloatButtons,
} from 'src/components/carousel';

// ----------------------------------------------------------------------

export function EcommerceProductDetailsCarousel({ images, sx, ...other }) {
  const carousel = useCarousel({
    thumbs: {
      slidesToShow: 'auto',
    },
  });

  const slides = images?.map((img) => ({ src: img })) || [];

  const lightbox = useLightBox(slides);

  useEffect(() => {
    if (lightbox.open) {
      carousel.mainApi?.scrollTo(lightbox.selected, true);
    }
  }, [carousel.mainApi, lightbox.open, lightbox.selected]);

  return (
    <>
      <Box
        sx={{
          mb: 2.5,
          borderRadius: 2,
          position: 'relative',
          bgcolor: 'background.neutral',
          ...sx,
        }}
        {...other}
      >
        <CarouselArrowFloatButtons
          {...carousel.arrows}
          options={carousel.options}
          slotProps={{
            prevBtn: { sx: { left: 8 } },
            nextBtn: { sx: { right: 8 } },
          }}
          sx={{ borderRadius: '50%', color: 'action.active', bgcolor: 'transparent' }}
        />
        <Carousel carousel={carousel} sx={{ borderRadius: 2 }}>
          {slides.map((slide) => (
            <Image
              key={slide.src}
              alt={slide.src}
              src={slide.src}
              ratio="1/1"
              onClick={() => lightbox.onOpen(slide.src)}
              sx={{ cursor: 'zoom-in', minWidth: 320 }}
            />
          ))}
        </Carousel>
      </Box>

      <CarouselThumbs
        ref={carousel.thumbs.thumbsRef}
        options={carousel.options?.thumbs}
        slotProps={{ disableMask: true }}
        sx={{ width: { xs: 1, sm: 360 } }}
      >
        {slides.map((item, index) => (
          <CarouselThumb
            key={item.src}
            index={index}
            src={item.src}
            selected={index === carousel.thumbs.selectedIndex}
            onClick={() => carousel.thumbs.onClickThumb(index)}
          />
        ))}
      </CarouselThumbs>

      <Lightbox
        index={lightbox.selected}
        slides={slides}
        open={lightbox.open}
        close={lightbox.onClose}
        onGetCurrentIndex={(index) => lightbox.setSelected(index)}
      />
    </>
  );
}
