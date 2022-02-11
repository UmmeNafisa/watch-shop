import { Box, Grid, Container, Input, InputLabel, FormControl } from '@material-ui/core';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons'
import './Footer.css';
import instaPic1 from "../../../Images/product1-1-100x100.jpg"
import instaPic2 from "../../../Images/product10-1-100x100.jpg"
import instaPic3 from "../../../Images/product11-1-100x100.jpg"
import instaPic4 from "../../../Images/product2-1-100x100.jpg"
import { faFacebookF, faGoogle, faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <Container>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <h2 className="footer-header "> CONTACT US</h2>
                        <p><FontAwesomeIcon icon={faHouse} /> 520,West valey, Anim ad minim,</p>
                        <p><FontAwesomeIcon icon={faPhone} /> +91 1234567890 </p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> info@weightswatch.com  </p>
                    </Grid>
                    <Grid item xs={3}>
                        <h2 className="footer-header "> SHARE WITH US</h2>
                        <p>Special offers on social networks</p>
                        <div><FontAwesomeIcon icon={faFacebookF} className="social-icon" size="1x" />
                            <FontAwesomeIcon icon={faGoogle} className="social-icon" size="1x" />
                            <FontAwesomeIcon icon={faTwitter} className="social-icon" size="1x" />
                            <FontAwesomeIcon icon={faTumblr} className="social-icon" size="1x" />  </div>
                    </Grid>
                    <Grid item xs={3}>
                        <h2 className="footer-header "> NEWSLETTER</h2>
                        <p>Subscribe our newsletter</p>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Email address</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <h2 className="footer-header "> #INSTAGRAM</h2>
                        <p>Our instagram gallery</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                <Grid item xs={2} sm={4} md={4}>
                                    <img src={instaPic1} alt="" />
                                </Grid>
                                <Grid item xs={2} sm={4} md={4}>
                                    <img src={instaPic2} alt="" />
                                </Grid>
                                <Grid item xs={2} sm={4} md={4}>
                                    <img src={instaPic3} alt="" />
                                </Grid>
                                <Grid item xs={2} sm={4} md={4}>
                                    <img src={instaPic4} alt="" />
                                </Grid>

                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Footer;