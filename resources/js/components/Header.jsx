import React from 'react';
import sigmalogo from '../../../public/images/sigmalogo.png'

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <div className="container-fluid">
                        <img className="sigmalogo"  src={sigmalogo} alt="Logo"/>
                        <h2 className=""> Prueba de desarrollo Sigma</h2>
                        <p className="font-weight-light"><strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the<br/>
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and<br/>
                            scrambled it to make a type specimen book.</strong>
                        </p>
                </div>
            </div>
        )
    }
}

export default Header;
