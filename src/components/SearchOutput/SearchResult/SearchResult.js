import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    const {Phone, Valid, Location, Type, Carrier} = props
    console.log(props);
    return (
        <article className={classes.Result}>
            <h1>Phone Number: {Phone}</h1>
            <h3 className={classes.Result}>

                    <p>Valid: {Valid[0]+""}</p>
                    <p>Location: {Location[0]}</p>
                    <p>Type: {Type[0]}</p>
                    <p>Carrier: {Carrier[0]}</p>

            </h3>

        </article>
    );
}

export default SearchResult;