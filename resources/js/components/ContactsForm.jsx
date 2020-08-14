import React, {Component}  from 'react';
import {Modal,ModalHeader,ModalFooter,ModalBody} from 'reactstrap';

const validate = values => {
  const errors = {}
  if(!values.form.name){
      errors.name ="Este campo es obligatorio";
  }
    if(!values.form.email){
        errors.email ="Este campo es obligatorio";
    }
    if(!values.form.state){
        errors.state ="Este campo es obligatorio";
    }
    if(!values.form.city){
        errors.city ="Este campo es obligatorio";
    }
  return errors
}



class ContactsForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            departamentos:[],
            open:"",
            form:{
                    name: "",
                    email:"",
                    state: "",
                    city: "",
           },
            errors:{
                    name:"",
                    email:"",
                    state:"",
                    city:"",
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggle(){
        this.setState({
            open: ! this.state.open
        });
    }


    getItems(){
        fetch("https://sigma-studios.s3-us-west-2.amazonaws.com/test/colombia.json")
            .then(response=>{
                return response.json();
            })
            .then((responseJson) =>{
                this.setState({departamentos:responseJson})
            })
    }



    handleInputChange(event) {
      event.persist();
      this.setState({
          form:{
              ...this.state.form,
              [event.target.name]: event.target.value
          }
      })
    }

    componentDidMount() {
        this.getItems();
       }

    async handleSubmit(event) {
        console.log(this.state.form)
        event.preventDefault()
        const {errors,...sinErrors} =this.state;
        const result = validate(sinErrors);
        this.setState({errors: result})
        if(Object.keys(result).length===0 ){
            console.log(this.state.form)
            try{
                let config ={
                    method : 'POST',
                    headers:{
                        'Host':'127.0.0.1:8000',
                        'X-Powered-By':'PHP/7.4.8',
                        'Accept' : 'application/json',
                        'Content-type':'application/json',
                        'Access-Control-Allow-Origin':'*',
                    },
                    body : JSON.stringify(this.state.form)
                }
                fetch('http://127.0.0.1:8000/api/contact',config)
                    .then(res =>res.json())
                this.setState({open: true})
            }catch (e) {
                this.setState({e})
            }
        }
    }

    render(){
        const {departamentos} = this.state;
        const {errors} = this.state;
        return(
            <div className= "card" >
                <form className=" justify-content-center contactForm"  onSubmit={this.handleSubmit}>
                    <div className="form-group mb-2 inputContainer">
                        <label>Departamento*</label>
                        <select className="form-control"
                                name="state"
                                required
                                onChange={this.handleInputChange}
                                onSubmit={this.handleSubmit}>
                             <option disabled selected>Selecciona una opción</option>
                            {Object.keys(departamentos).map(function(dep, index){
                                return<option key={dep.toString()} >{dep}</option>
                              })
                            }
                        </select>
                        {errors.state && <p id="error">{errors.state}</p>}
                    </div>

                    <div className="form-group mb-2 inputContainer">
                        <label>Ciudad*</label>
                        <select className="form-control"
                                name="city"
                                required
                                onChange={this.handleInputChange}
                                onSubmit={this.handleSubmit}>
                                <option disabled selected>Selecciona una opción</option>
                            {this.state.form.state && this.state.departamentos[this.state.form.state ]
                                .map(function (cities) {
                                    return  <option>{cities}</option>
                                })
                            }
                        </select>
                        {errors.city && <p id="error">{errors.city}</p>}
                    </div>
                    <div className="form-group mb-2 inputContainer">
                        <label>Nombre*</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            onSubmit={this.handleSubmit}
                            maxLength="50"
                        />
                        {errors.name && <p id="error" style={{background:"FF0000"}}>{errors.name}</p>}
                    </div>

                    <div className="form-group mb-2 inputContainer">
                        <label>Correo*</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            onSubmit={this.handleSubmit}
                            maxLength="30"
                        />
                        {errors.email && <p id="error">{errors.email}</p>}
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary mb-2"
                    >
                        ENVIAR
                    </button>
                </form>
               <Modal isOpen={this.state.open}>
                   <ModalHeader>
                       <h3>Felicidades!</h3>
                   </ModalHeader>
                   <ModalBody>
                      <p>Tu informacion ha sido recibida con exito</p>
                   </ModalBody>
                   <ModalFooter>
                       <button className="btnmodal" onClick={this.toggle}>Cerrar</button>
                   </ModalFooter>
               </Modal>
            </div>

        )
    }
}

export default ContactsForm;
