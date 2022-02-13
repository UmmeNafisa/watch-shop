import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Container, Typography } from '@material-ui/core';
import './VerityWatch.css'


const itemData = [
    {
        img: 'https://i.ibb.co/XCtsR0w/slider2.jpg',
        title: "Men's Watch",
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://i.ibb.co/whjsCgd/brigitte-tohm-j8-C66j15n-Ak-unsplash.jpg',
        title: "Women's Watch",
    },
    {
        img: 'https://i.ibb.co/Kj9jx23/hunters-race-SDg-Olir-Ia-Y-unsplash.jpg',
        title: 'Couple Watch',
    },
    {
        img: 'https://www.superwatches.com/wp-content/uploads/2021/05/5-Awesome-Kids-GPS-Watches-in-2021.jpg',
        title: "Kid's Watch",
        cols: 2,
    },

];

const VerityItems = () => {
    return (
        <Container>
            <Typography variant="subtitle1" className='feature-collection'>MANY TYPE COLLECTION</Typography>
            <Typography variant="h2" component="h2" className='feature-product' > <span className='feature'>ALL TYPE </span> FEATURES</Typography>
            <ImageList sx={{ width: 1300, paddingRight: 8, overflowY: "hidden" }}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img} sx={{ height: 100 }} >
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            className="fashion-watch"
                        />
                        <ImageListItemBar
                            title={item.title}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                >
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    );
};

export default VerityItems;