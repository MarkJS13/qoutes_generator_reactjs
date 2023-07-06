import Display from "./Display";
import Footer from "./Footer";
import Generator from "./Generator";

const Container = (props) => {
    
    return (
        <section>
            <Display qoute={props.display}/>
            <Generator btnFunction={props.click} />
            <Footer/>
        </section>
    )
}

export default Container;