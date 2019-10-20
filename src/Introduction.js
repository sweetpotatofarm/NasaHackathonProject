import React from 'react';
//import './bootstrap.css';
import './Introduction.css';
import {Link} from 'react-router-dom'
import pic from './pic/images.jpg'
/*
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>
*/
class Introduction extends React.Component{
    
    render(){
        return(
            <div className="IntroductionBackground">
                <div className="IntroductionContent">
                    <div className="IntroductionText">
                      <div className="Text">
                        <h1 className="text1">Check out local air pollution!</h1>
                        <h3 className="text2">Search for latest news about air pollution</h3>
                        <h3 className="text3">or click the button below to search your country on map!</h3>
                      </div>
                    </div>
                    <div className="Btn">
                      <a href='https://l4ll1p0p.github.io/2019NASA_Hackathon/?fbclid=IwAR3w_ZdO_ypsknu9LXoL4dKgMxJgxP2tQ3b5cHhhnkNMuEtaH618m3_QIDE'>
                      <button className="button" onClick={this.ToMap}>
                        VIEW NOW
                      </button>
                      </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Introduction;