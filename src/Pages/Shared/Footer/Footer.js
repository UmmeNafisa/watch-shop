import { Box, Grid, Container } from '@material-ui/core';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'


const Footer = () => {
    return (
        <Container>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <h2 className="footer-header "> CONTACT US</h2>
                        <p><FontAwesomeIcon icon={faHouse} /> 520,West valey, Anim ad minim,</p>
                        <p><FontAwesomeIcon icon={faPhone} /> +91 1234567890 </p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> info@weightwatch.com  </p>
                    </Grid>
                    <Grid item xs={3}>
                        <h2 className="footer-header "> SHARE WITH US</h2>
                    </Grid>
                    <Grid item xs={3}>
                        <h2 className="footer-header "> NEWSLETTER</h2>
                    </Grid>
                    <Grid item xs={3}>
                        <h2 className="footer-header "> #INSTAGRAM</h2>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Footer;