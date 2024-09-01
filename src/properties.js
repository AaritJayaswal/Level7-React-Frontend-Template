export const properties = {
    courseName: 'Phone Validation',
    endpoint: 'http://localhost:5000/searchPVResults?q=',
    description: 'Find details about a phone number.',
    backendSwaggerUrl: 'http://localhost:5000/',
    createdBy: 'Aarit Jayaswal',
    repositoryUrl: 'https://github.com/AaritJayaswal/Phone-Validation'
};

/*
It is likely that you will also need to change the object that the frontend is expecting to receive from the service.


SearchResult.js
Change this to match the structure of your object.  Note that for cheetah search, it uses the map() function to
destructure a list of authors that is returned from the query into a number of <p> tags:

<article className={classes.Result}>
    <h1>Title: {props.title}</h1>
    <h3 className={classes.Author}>
        {props.authors && props.authors.map((author, index) => (
            <p key={index}>{author}</p>
        ))}
     </h3>
     <a href={props.link} rel="noopener noreferrer" target="_blank">{props.link}</a>
</article>

If your object doesn't return any lists, you could simplify the above code greatly.  For example, the above code for
a made up animal object may look like this:

<article className={classes.Result}>
    <h1>Species: {props.species}</h1>
    <h3>Number of legs: {props.numberOfLegs}<h3>
    <a href={props.link} rel="noopener noreferrer" target="_blank">{props.link}</a>
</article>


The only other thing to do is to make sure to pass the correct values as props from SearchOutput.js to the
SearchResults.  Continuing with the above animal example may look like this:

SearchOutput.js: 22

<SearchResult
    key={index}
    species={result.species}
    numberOfLegs={result.numberOfLegs}
    link={result.link}
/>

 */