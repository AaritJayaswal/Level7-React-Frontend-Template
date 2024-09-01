import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    const {Phone, Location, Type, Carrier, Valid} = props
    console.log(props);
    return (
        <article className={classes.Result}>
            <h1>Phone Number: {Phone}</h1>
            <h3 className={classes.Result}>

                    <p>Location: {Location[0]}</p>
                    <p>Type: {Type[0]}</p>
                    <p>Carrier: {Carrier[0]}</p>
                    <p>Valid: {Valid}</p>



            </h3>

        </article>
    );
}

export default SearchResult;