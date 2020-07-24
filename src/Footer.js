import React from 'react'
import Typography from '@material-ui/core/Typography';
import style from './recipes.module.css';
import Link from '@material-ui/core/Link';

 const Footer = () => {
    return (
        <div className={style.footer}>
            <Typography variant="body2" color="initial">Design by-
                <Link href="https://josuerodriguez.netlify.app/" >
                     Josue Rodriguez
                </Link>
            </Typography>
        </div>
    )
}
export default Footer;