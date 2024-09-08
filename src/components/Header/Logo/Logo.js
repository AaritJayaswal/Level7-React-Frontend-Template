import React from "react";
import {properties} from '../../../properties';
import classes from './Logo.module.css';
import logo from './img/LeagueLogo.png';

const Logo = () => (
    <div className={classes.Logo}>
        <h3 className={classes.LeagueClassName}>{properties.courseName}</h3>
    </div>
);

export default Logo;