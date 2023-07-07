import Display from "./Display";
import Footer from "./Footer";
import Generator from "./Generator";
import { UseQoutesContext } from './Provider';
import { useState } from 'react';

const Container = () => {
    let [qoute, setQoute] = useState('Hello :)');
    const { qoutes } = UseQoutesContext();

    const clickHandler = () => {
        let math = Math.floor(Math.random() * qoutes.length);
        setQoute(qoutes[math]);
  }
    return (
        <section>
            <Display qoute={qoute}/>
            <Generator btnFunction={clickHandler} />
            <Footer/>
        </section>
    )
}

export default Container;