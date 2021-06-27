import React, { useState } from 'react';
import { Dialog, DialogContent, makeStyles, Box, Typography, Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';

const useStyle = makeStyles({

    component: {
        height: '70vh',
        width: "90vh",

    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: '70vh',
        backgroundRepeat: 'no-repeat',
        background: '#2874f0', width: '40%',
        backgroundPosition: 'center 85%',
        padding: '45px 35px',
        '& > *': {
            color: '#FFFFFF',
            fontWeight: 600
        }
    },
    login: {
        padding: "15px 25px",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        '& > *': {
            marginTop: 10
        }
    },
    text: {
        color: "#787878",
        fontSize: "12px",
    },
    loginBtn: {
        textTransform: "none",
        background: "#fb641b",
        color: "#ffffff",
        height: 48,
        borderRadius: 2,
    },
    requestBtn: {
        textTransform: "none",
        background: "#ffffff",
        color: "#2878f0",
        height: 48,
        borderRadius: 2,
        boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)"
    },
    createText: {
        fontSize: 14,
        textAlign: "center",
        color: "#2874f0",
        marginTop: "auto",
        fontWeight: "600",
        cursor: "pointer"
    },
    signupBtn:{
        background:"#fb641b",
        color:"#ffffff"
    }
})

const initialValue = {
    login:{
        view: "login",
        heading:"login", 
        subHeading: "Get access to your Orders, Wishlist and Recommendations"
    },
    signup:{
        view:"signup",
        heading:"Looks like you're new here!",
        subHeading:"Sign up with your mobile number to get started"
    }
}


const Login = ({ open, setOpen }) => {
    const classes = useStyle();
    const [ account, setAccount ] = useState(initialValue.login);
    const handleClose = () => {
        setOpen(false);
        setAccount(initialValue.login)
    }

    const toggleAccount = () => {
        setAccount(initialValue.signup);
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component}>
                <Box style={{ display: 'flex' }}>
                    <Box className={classes.image}>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                    </Box>
                    {
                        account.view === 'login' ?

                            <Box className={classes.login}>
                                <TextField name='username' label='Enter Email/Mobile Number' />
                                <TextField name='password' label='Enter Password' />
                                <Typography className={classes.text}>By continuing, you agree to flipkart's <span style={{ color: "#2878f0", cursor: "pointer" }} className={classes.text} >Terms of use</span> and <span style={{ color: "#2878f0", cursor: "pointer" }} className={classes.text}> Privacy Policy</span>. </Typography>
                                <Button variant="contained" className={classes.loginBtn} >Login</Button>
                                <Typography className={classes.text} style={{ textAlign: "center" }}>OR</Typography>
                                <Button variant="contained" className={classes.requestBtn} >Request OTP</Button>
                                <Typography onClick={()=>toggleAccount()} className={classes.createText}  >New To Flipkart? Create an Account</Typography>
                            </Box> :
                            <Box className={classes.login}>
                                <TextField name='FirstName' label='Enter firstName' />
                                <TextField name='lastName' label='Enter lastName' />
                                <TextField name='username' label='Enter username' />
                                <TextField name='email' label='Enter email' />
                                <TextField name='password' label='Enter Password' />
                                <TextField name='phone' label='Enter Mobile Number' />
                                <Button variant="contained" className={classes.signupBtn} >SignUp</Button>
                            </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog>

    )

}
export default Login;