import React from 'react';


const ContactsForm  = () => (
   <div className= "card">
    <form className=" justify-content-center">
        <div className="form-group mb-2">
            <label>Departamento*</label>
            <input
                type="text"
                className="form-control"
                name="name"
            />
        </div>
        <div className="form-group mb-2">
            <label>Ciudad*</label>
            <input
                type="text"
                className="form-control"
                name="name"
            />
        </div>
        <div className="form-group mb-2">
            <label>Nombre*</label>
            <input
                type="text"
                className="form-control"
                name="name"
            />
        </div>
        <div className="form-group mb-2">
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
