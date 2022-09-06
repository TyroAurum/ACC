import React,{useState} from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

  const items = [
    {
      src:'https://www.linagro.tn/images/slider/slides/1920x400/southern-alps-1920x400.png',
      altText:'slide 1',
      caption:'Slide 1',
      key:1
    },
    {
      src:'https://cdn.wallpapersafari.com/22/59/Ol5ocv.jpg',
      altText:'slide 2',
      caption:'Slide 2',
      key:2
    },
    {
      src:'https://static.chaos.com/images/assets/000/007/349/full_width_original/trial-generic-banner.jpg?1552637157',
      altText:'slide 3',
      caption:'Slide 3',
      key:3
    },
  ];

function Carouse(){
    const [activeIndex,setActiveIndex] = useState(0);
    const [animating,setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length-1 ? 0 : activeIndex+1;
      setActiveIndex(nextIndex);
    };
  
    const previous = () => {
      if (animating) return;
      const prevIndex = activeIndex === 0 ? items.length-1 : activeIndex-1;
      setActiveIndex(prevIndex);
    };
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    };
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
        onExiting={()=>setAnimating(true)}
        onExited={()=>setAnimating(false)}
        key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });
    return(
      <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
    
    );
  }
  
  
  export default Carouse;