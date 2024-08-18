import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    const {title, authors} = props
    console.log(props);
    return (
        <article className={classes.Result}>
            <h1>Title: {title}</h1>
            <h3 className={classes.Author}>

                    <p>{authors[0]}</p>

            </h3>

        </article>
    );
}

export default SearchResult;