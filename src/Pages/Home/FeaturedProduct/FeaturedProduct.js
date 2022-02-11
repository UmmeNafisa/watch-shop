import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import './FeaturedProduct.css'
import watch1 from '../../../Images/product1-1.jpg'
import watch2 from '../../../Images/product1-2.jpg'
import watch3 from '../../../Images/product13-1.jpg'


const FeaturedProduct = () => {
    return (
        <div className='footer-bg'>
            <Container>
                <Typography variant="subtitle1" className='feature-collection'>360° COLLECTION</Typography>
                <Typography variant="h2" component="h2" className='feature-product' > <span className='feature'>FEATURED </span> PRODUCT</Typography>
                <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mx: "auto" }}>
                    <Grid item xs={4} sm={4} md={4} >
                        <Card sx={{ minWidth: 275 }}>
                            <CardMedia
                                component="img"
                                style={{ margin: "0 auto" }}
                                image={watch1}
                                alt="watch"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Black Dial Leather Strip
                                </Typography>
                                <Typography variant="body2" color="text.secondary" >
                                    $32.00
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} >
                        <Card sx={{ minWidth: 275 }}>
                            <CardMedia
                                component="img"
                                style={{ margin: "0 auto" }}
                                image={watch2}
                                alt="watch"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Black Dial Leather Strip
                                </Typography>
                                <Typography variant="body2" color="text.secondary" >
                                    $32.00
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} >
                        <Card sx={{ minWidth: 275 }}>
                            <CardMedia
                                component="img"
                                style={{ margin: "0 auto" }}
                                image={watch3}
                                alt="watch"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Black Dial Leather Strip
                                </Typography>
                                <Typography variant="body2" color="text.secondary" >
                                    $32.00
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default FeaturedProduct;