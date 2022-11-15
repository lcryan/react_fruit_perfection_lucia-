import React from 'react';
import './App.css';
import lemons from './assets/citroenen.jpeg';
import limes from './assets/limoenen.png'
import iceCubes from './assets/ijsblokjes.jpg'
import {ReactComponent as ShoppingCart} from './assets/winkelmandje.svg';
import Product from "./components/product";

function App() {

    function logClick() {
        console.log('You clicked');
    }

    return (
        <>
            <nav>
                <ul>
                    <ShoppingCart className="shopping-cart-icon"/>
                    <li><a href="http://localhost:3000/"> Shop </a></li>
                    <li><a href="http://localhost:3000/"> Ons verhaal </a></li>
                    <li><a href="http://localhost:3000/"> Blog </a></li>
                </ul>
            </nav>
            <header>
                <h1>Fruit perfection</h1>
                <button type="button" onClick={logClick}>
                    Shop nu!
                </button>
            </header>

            <main>
                <Product
                    image={lemons}
                    title="Citroen"
                    description="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten.
                    Van citroen kun je het vruchtvlees, het sap en de schil gebruiken.
                    Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
                />
                <Product
                    image={limes}
                    title="Limoen"
                    description="Limoen is familie van de citroen en de sinaasappel en behoort tot de
                    citrusvruchten(Wijnruitfamilie).Limoenen zijn rond en kleiner dan citroenen. De schil is dun, vrij glad en groen."
                />
                <Product
                    image={iceCubes}
                    title="Ijsklontjes"
                    description="Een ijsblokje of ijsklontje is bevroren water in de vorm van een klein blokje.
                Het wordt gemaakt in een diepvriezer door water in een plastic vorm te laten bevriezen.
                Als het goed is ziet jouw webpagina er nu zo uit:"
                />

            </main>
        </>
    )
        ;
}

export default App;
