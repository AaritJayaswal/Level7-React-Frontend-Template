import React, {useState} from 'react';
import Header from "./components/Header/Header";
import SearchInput from "./components/SearchInput/SearchInput";
import SearchOutput from "./components/SearchOutput/SearchOutput";
import Footer from "./components/Footer/Footer";
import {properties} from './properties';
import classes from './App.module.css';

function App() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([]);

    const searchHandler = query => {
        console.log("[App]:  Doing an AJAX call for query='" + query + "'.");
        setInput(query);
        setOutput([]);
        fetch(properties.endpoint + query, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
            mode: 'cors'
        })
            .then(response => {
                if (!response.ok) {
                    const term = null;
                    setInput(term);
                    throw new Error("Not 2xx response")
                } else {
                    return response.json()
                }
            })
            .then(data => {
                    const results = [];
                    console.log(data);

                    results.push(data);

                    setOutput(results);
            }, (error) => {
                console.log(error);
            });
    }

    return (
        <div className={classes.App}>
            <header className={classes.AppHeader}>
                <div>
                    <Header/>
                </div>
            </header>
            <main>
                <SearchInput submitHandler={searchHandler}/>

                <SearchOutput term={input} results={output}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;