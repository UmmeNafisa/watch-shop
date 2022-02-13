import React from "react";
import logo from '../../../Images/logo-2.jpg'
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    Button,
    Avatar,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import './NavHead.css'
import useAuth from "../../../hooks/useAuth";

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: "#161618"
    },
    navlinks: {
        marginLeft: theme.spacing(10),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",

    },
    link: {
        textDecoration: "none",
        color: "#d1c8b1",
        fontSize: "20px",
        marginLeft: theme.spacing(5),
        "&:hover": {
            color: "white",
            borderBottom: "1px solid white",
        },
    },
}));

const NavHead = () => {
    const classes = useStyles();
    const { user, logOut } = useAuth();
    return (
        <AppBar position="static" className={classes.background}>
            <CssBaseline />
            <Toolbar>
                <Typography className={classes.logo}>
                    <img src={logo} alt="" className="logo" />
                </Typography>
                <div className={classes.navlinks}>
                    <Link to="/" className={classes.link}>
                        Home
                    </Link>
                    <Link to="/about" className={classes.link}>
                        About
                    </Link>
                    <Link to="/contact" className={classes.link}>
                        Contact
                    </Link>
                    <Link to="/faq" className={classes.link}>
                        FAQ
                    </Link>
                    <Link to="/login" className={classes.link}>
                        Login
                    </Link>
                    {(user?.email || user?.name) && <div>
                        <Link to="/dashboard" className={classes.link} >DASHBOARD</Link>
                    </div>
                    }
                    {/* <Nav.Link as={Link} to="/adminDashboard" className="text-white fw-bold header-front"> ADMIN SIDE </Nav.Link> */}

                    {user?.email || user?.name ?
                        <Button onClick={logOut} varient="light" className={classes.link}> LOGOUT</Button> : <Link to="/login"><Button varient="light" > Login</Button> </Link>
                    }
                    {(user?.email || user?.name) && <div>
                        <div>
                            <Link to="/profile" className={classes.link}>{user?.displayName}</Link>
                            <Avatar alt="profile-pic" src={user?.photoURL} />
                        </div>
                    </div>
                    }
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default NavHead;