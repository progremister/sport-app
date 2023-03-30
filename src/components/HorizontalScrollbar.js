import React, { useContext} from 'react';
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import { BodyPart, ExerciseCard } from '../components';
import { images } from '../assets';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow" sx={{ display: {lg: 'block', sm: 'none'}}}>
        <img src={images.leftArrow} alt="right-arrow" />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow" sx={{ display: {lg: 'block', sm: 'none'}}}>
        <img src={images.rightArrow} alt="right-arrow" />
      </Typography>
    );
  };

  const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts}) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
        { isBodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item}/>}
        </Box>
      ))}
    </ScrollMenu>
  );
  

export default HorizontalScrollbar;
