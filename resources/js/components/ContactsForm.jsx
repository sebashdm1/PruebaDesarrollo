import React from 'react';


const ContactsForm  = () => (
   <div className= "card" >
    <form className=" justify-content-center contactForm">
        <div className="form-group mb-2 inputContainer">
            <label>Departamento*</label>
            <input
                type="text"
                className="form-control"
                name="name"
            />
        </div>
        <div className="form-group mb-2 inputContainer">
            <label>Ciudad*</label>
            <input
                type="text"
                className="form-control"
                name="name"
            />
        </div>
        <div className="form-group mb-2 inputContainer">
            <label>Nombre*</label>
            <input
                type="text"
                className="form-control"
                name="name"
            />
        </div>
        <div className="form-group mb-2 inputContainer">
            <label>Correo*</label>
            <input
                type="email"
                className="form-control"
                name="name"
            />
        </div>
        <button
            type="submit"
            className="btn btn-primary mb-2"
        >
            ENVIAR
        </button>
    </form>
   </div>
)

  export default ContactsForm;
