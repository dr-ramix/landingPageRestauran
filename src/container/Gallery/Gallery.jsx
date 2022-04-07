import React, { useRef } from 'react';

import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs"

import { images} from '../../constants';
import { SubHeading} from '../../components';
import './Gallery.css';


const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04
]

/*The useRef Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly. 

 useRef() only returns one item. It returns an Object called current.
 
 In React, we can add a ref attribute to an element to access it directly in the DOM.*/

const Gallery = () => {
  
  const scrollRef = useRef(null)

  /* when scroll function called in this say when out icons get clicked,
     then this function get a arrgument as direction, this function will check the requsted direction
     and set new value for scrollLeft property. */

  // The Element.scrollLeft property gets or sets the number of pixels that an element's content is scrolled from its left edge.

  const scroll = (direction) => {
    const {current} = scrollRef;

    if (direction === "left") {
      current.scrollLeft -=300
    } else {
      current.scrollLeft +=300
    }
  }

  
  return(
    <div className='app__gallery flex__center'>

      <div className='app__gallery-content'>
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant'> Photo Gallery</h1>
        <p className='p__opensans' style={{color:"#AAA" ,marginTop:"2rem"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type='button' className='custom__button'> View more</button>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
            { galleryImages.map((image, index) => (
              <div className='app__gallery-images_card flex__center' key={`gallery_image-$(index+1)`}>
                <img src={image} alt="gallery"/>
                <BsInstagram className='gallery__images-icon' />
              </div>
            ))}
        </div>
        <div className='app__gallery-images_arrows'>
            <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll("left")} />
            <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll("right")} />
        </div>
      </div>

    </div>
  );
  
}

export default Gallery;
