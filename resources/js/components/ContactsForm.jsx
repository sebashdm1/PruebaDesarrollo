import React, {Component}  from 'react';


class ContactsForm extends Component{


    constructor(props) {
        super(props);
        this.state = {
            departamentos:[],
           form:{
               departamento: "",
               ciudad: "",
               nombre: "",
               correo:"",
           }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

     handleSubmit(event) {
        event.preventDefault();
        try{
            let config ={
                method : 'POST',
                headers:{
                    'Accept' : 'application/json',
                    'Content-type':'application/json'
                },
                body : JSON.stringify(this.state.form)
            }
             fetch('http://127.0.0.1:8000/api/save',config)
                .then(res =>res.json())
        }catch (e) {
           this.setState({e})
        }
    }



    componentDidMount() {
        this.getItems();
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


    render(){
        const {departamentos} = this.state;
        console.log(this.state.departamento)
        console.log(this.state.ciudad)
        console.log(this.state.nombre)
        console.log(this.state.correo)
        return(
            <div className= "card" >
                <form className=" justify-content-center contactForm" onSubmit={this.handleSubmit}>
                    <div className="form-group mb-2 inputContainer">
                        <label>Departamento*</label>
                        <select className="form-control"
                                name="departamentos"
                                onChange={ e => this.setState({departamento: e.target.value})}
                                onSubmit={this.handleSubmit}>
                             <option disabled selected>Selecciona una opción</option>
                            {Object.keys(departamentos).map(function(dep, index){
                                return<option key={dep.toString()} >{dep}</option>
                              })
                            }
                        </select>
                    </div>

                    <div className="form-group mb-2 inputContainer">
                        <label>Ciudad*</label>
                        <select className="form-control"
                                name="ciudades"
                                onChange={ e => this.setState({ciudad: e.target.value})}
                                onSubmit={this.handleSubmit}>
                                <option disabled selected>Selecciona una opción</option>
                            {this.state.departamento && this.state.departamentos[this.state.departamento ]
                                .map(function (cities) {
                                    return  <option>{cities}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group mb-2 inputContainer">
                        <label>Nombre*</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre"
                            value={this.state.nombre}
                            onChange={this.handleInputChange}
                            onSubmit={this.handleSubmit}

                        />
                    </div>
                    <div className="form-group mb-2 inputContainer">
                        <label>Correo*</label>
                        <input
                            type="email"
                            className="form-control"
                            name="correo"
                            value={this.state.correo}
                            onChange={this.handleInputChange}
                            onSubmit={this.handleSubmit}
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
    }
}

export default ContactsForm;
