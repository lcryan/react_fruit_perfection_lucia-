import React from 'react';
import './App.css';

function App() {
    return (
        <main>
            <article className="product">
                <img
                    src="https://thumbs.dreamstime.com/b/lemon-isolated-24834437.jpg"
                    alt="Citroen"
                />
                <h2 className="product-name">Citroen</h2>
                <p className="product-description"> Een citroen is voor de meeste mensen te zuur om zo uit de hand te
                    eten.
                    Van citroen kun je het vruchtvlees, het sap en de schil gebruiken.
                    Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel.</p>
                <article className="product">
                    <img
                        src="https://thumbs.dreamstime.com/b/lemon-isolated-24834437.jpg"
                        alt="Citroen"
                    />

                </article>
            </article>

        </main>
    );
}

export default App;
