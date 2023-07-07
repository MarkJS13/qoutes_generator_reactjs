import { createContext, useContext, useState } from "react";

const qoutesContext = createContext();

const Provider = (props) => {
    const [qoutes] = useState(['"The only way to do great work is to love what you do." - Steve Jobs', '"The greatest glory in living lies not in never falling, but in rising every time we fall." - Nelson Mandela' , '"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt', '"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchil', '"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt',
    "\"Believe you can and you're halfway there.\" - Theodore Roosevelt",
    '"The best way to predict the future is to create it." - Peter Drucker',
    '"The purpose of our lives is to be happy." - Dalai Lama',
    '"Don\'t watch the clock; do what it does. Keep going." - Sam Levenson']);

    return(
        <qoutesContext.Provider value={{qoutes}}>
            {props.children}
        </qoutesContext.Provider>

    )
}

export const UseQoutesContext = () => useContext(qoutesContext);
export default Provider;
