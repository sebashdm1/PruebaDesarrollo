import React from 'react';
import ReactDOM from 'react-dom';
import ContactsForm from './ContactsForm';
import Header from "./Header";
import BackgroundImage from "./BackgroundImage";

function Example() {
    return (
        <div>
            <div className='col-md-12 row justify-content-center'>
                <Header></Header>
            </div>
            <div className="row">
                <div className='col-md-2'></div>
                <div className="col-md-4">
                    <BackgroundImage></BackgroundImage>
                </div>
                <div className="col-md-4">
                    <ContactsForm></ContactsForm>
                </div>
                <div className='col-md-2'></div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
