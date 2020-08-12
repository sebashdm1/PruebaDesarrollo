import React, {Component}  from 'react';


class ContactsForm extends Component{


    constructor(props) {
        super(props);
        this.state = {
            departamentos:[],
           form:{

               name: "",
               email:"",
               state: "",
               city: "",

           }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        }catch (e) {
            this.setState({e})
        }
    }


    render(){

        const {departamentos} = this.state;
        return(
            <div className= "card" >
                <form className=" justify-content-center contactForm" onSubmit={this.handleSubmit}>
                    <div className="form-group mb-2 inputContainer">
                        <label>Departamento*</label>
                        <select className="form-control"
                                name="state"
                                onChange={this.handleInputChange}
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
                                name="city"
                                onChange={this.handleInputChange}
                                onSubmit={this.handleSubmit}>
                                <option disabled selected>Selecciona una opción</option>
                            {this.state.form.state && this.state.departamentos[this.state.form.state ]
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
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            onSubmit={this.handleSubmit}

                        />
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
