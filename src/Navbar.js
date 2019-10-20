import React from 'react';
import './Navbar.css'

class Navbar extends React.Component{

    render(){
        return(
            <div className="Navbar" >
                <a  className="HomePageHref" href="https://l4ll1p0p.github.io/2019NASA_Hackathon/?fbclid=IwAR3w_ZdO_ypsknu9LXoL4dKgMxJgxP2tQ3b5cHhhnkNMuEtaH618m3_QIDE">
                <span className="HomePage">
                    Find your country
                </span>
                </a>
                <a  className="NewsHref" href='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=2ahUKEwjRp6m0wanlAhUazIsBHQp_C5AQFjABegQIBBAB&url=https%3A%2F%2Fwww.thenewslens.com%2Ffeature%2Fpm2-5&usg=AOvVaw1OdYxuQS31oK0lkNeMMNL8'>
                <span className="news" >
                    What is air pollution?
                </span>
                </a>
                <a  className="NewsHref" href='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=2ahUKEwj1k8yZwqnlAhWxGqYKHU3aC6gQFjABegQICxAF&url=https%3A%2F%2Fwww3.epa.gov%2Fregion1%2Fairquality%2Freducepollution.html&usg=AOvVaw3p4Efkay8FIFiRlPoXKpbc'>
                <span className="news" >
                    Tips to deal with air pollution
                </span>
                </a>
                <a className="LineChatbotHref" href="https://line.me/R/ti/p/%40896cripw">
                <span className="LineChatbot" >
                    Line Chatbot
                </span>
                </a>
            </div>
        );
    }
}

export default Navbar;