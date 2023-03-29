import React from 'react';
import { Typography, Stack, Button } from '@mui/material'

import { images } from '../assets';


const Detail = ({ exerciseDetail }) => {

    const { bodyPart, gifUrl, name, target, equipment} = exerciseDetail,
          extraDetail = [
            {
                icon: images.bodyPart,
                name: bodyPart
            },
            {
                icon: images.target,
                name: target
            },
            {
                icon: images.equipment,
                name: equipment
            }
        ];

    return (
    <Stack 
    gap="6rem"
    sx={{ 
        flexDirection: {lg: 'row'},
        alignItems: 'center',
        p: '2rem'}}>
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <Stack sx={{ gap: {lg: '3.6rem', xs: '1rem' }, pr: {lg: '10rem'}}} justifyContent="center">
            <Typography variant="h3" fontWeight="700" textTransform="capitalize"> { name } </Typography>
            <Typography variant="h5" color="#8c8c8c"> Exercises keep you strong.  
                {` ` + name?.charAt(0).toUpperCase() + name?.slice(1) } is one of the best exercises to target your { target }. It will help you improve your mood and gain energy.
            </Typography>
            {extraDetail.map((item) => (
                <Stack key={item.name} direction="row" gap="2.4rem" alignItems="center">
                    <Button 
                    sx={{ 
                        background: '#fff2db', 
                        borderRadius: '50%', 
                        width: '80px', 
                        height: '80px'}}>
                        <img src={item.icon} alt={bodyPart} style={{ width: '50px', heigth: '50px'}}/>
                    </Button>
                    <Typography variant="h5" fontWeight="700" textTransform="capitalize">{item.name}</Typography>
                </Stack>
            ))}
        </Stack>   
    </Stack>
  )
}

export default Detail;
