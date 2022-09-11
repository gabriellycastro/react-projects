import './style.css'

import Header from "../../components/Header";
import { useEffect } from 'react';
import RadioButtonDefault from '../../components/RadioButtonDefault';

export default function Home() {

    function pageConfigs(value: string) {
        sessionStorage.setItem('buttonColor', value)
    }

    useEffect(() => {
        sessionStorage.setItem('buttonColor', 'pink')
    })

    return (
        <>
        <Header />
        <main>
            <section className="home">

                <h1>⚛️ React Projects</h1>

                <form className='page-configs'>
                    <p>Choose a color for submit button:</p>

                    <RadioButtonDefault color="pink" colorValue={(event) => pageConfigs(event.target.value)} />

                    <RadioButtonDefault color="blue" colorValue={(event) => pageConfigs(event.target.value)} />

                    <RadioButtonDefault color="yellow" colorValue={(event) => pageConfigs(event.target.value)} />

                    <RadioButtonDefault color="green" colorValue={(event) => pageConfigs(event.target.value)} />
                </form>

            </section>
        </main>
        </>
    )
}