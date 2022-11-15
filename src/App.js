import React from 'react';
import './App.css';

function App() {
    return (
        <>
        <header>
            <h1>Fruit perfection</h1>
            <button type="button">
                Shop nu!
            </button>
        </header>

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

                <h2 className="product-name">Limoen</h2>
                <article className="product">
                    <img
                        src="https://thumbs.dreamstime.com/b/lemon-isolated-24834437.jpg"
                        alt="Citroen"
                    />
                    <p className="product-description">
                        Limoen
                        Limoen is familie van de citroen en de sinaasappel en behoort tot de citrusvruchten
                        (Wijnruitfamilie).
                        Limoenen zijn rond en kleiner dan citroenen. De schil is dun, vrij glad en groen.
                    </p>

                    <h2 className="product-name">IJsblokjes</h2>
                    <article className="product">
                        <img
                            src="https://thumbs.dreamstime.com/b/lemon-isolated-24834437.jpg"
                            alt="Citroen"
                        />
                        <p className="product-description">
                            Limoen
                            Limoen is familie van de citroen en de sinaasappel en behoort tot de citrusvruchten
                            (Wijnruitfamilie).
                            Limoenen zijn rond en kleiner dan citroenen. De schil is dun, vrij glad en groen.
                        </p>

                    </article>
                </article>
            </article>
        </main>
        </>
    );
}

export default App;
