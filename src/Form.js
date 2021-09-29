import React,{Component} from "react";

class Form extends Component{

    constructor(props){
        super(props);
        this.state ={
            firstname: "",
            lastname : "",
            phone    : "",
            email    : "",
            feedback : "",
            rating   : ""
        }
    }

    //handlechangename = (event) =>{
       // this.setState({firstname : event.target.value})
    //}

    handlechange = (event) =>{
        this.setState ( { [event.target.name] : event.target.value})
    }

    handlesubmit = (event) =>{
        alert(JSON.stringify(this.state));
        event.preventDefault();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handlesubmit}>
                    <label>First Name</label>
                    <input type="text"name="firstname" value={this.state.firstname}
                        onChange={this.handlechange}></input><br/>

                    <label>Last Name</label>
                    <input type="text"name="lastname" value={this.state.lastname}
                        onChange={this.handlechange}></input><br/>

                    <label>Middle Name</label>
                    <input type="text"name="middlename" value={this.state.middlename}
                        onChange={this.handlechange}></input><br/>

                    <label>Email</label>
                    <input type="email" name="email" value={this.state.email}
                        onChange={this.handlechange}></input><br/>

                    <label>Phone No</label>
                    <input type="number" name="phone" value={this.state.phone}
                        onChange={this.handlechange}></input><br/>

                    <label>Feedback</label>
                    <select type="text"name="feedback" value={this.state.feedback}
                        onChange={this.handlechange}>
                            <option value="fb1">fb1</option>
                            <option value="fb2">fb2</option>
                            <option value="fb3">fb3</option>
                            <option value="fb4">fb4</option>
                    </select><br/>

                    <label>Rating</label>
                    <select type="text"name="rating" value={this.state.rating}
                        onChange={this.handlechange}>
                            <option value="poor">poor</option>
                            <option value="not satisfied">not satisfied</option>
                            <option value=" neutral"> neutral</option>
                            <option value="satisfied">satisfied</option>
                            <option value="svery satisfied">very satisfied</option>
                        </select><br/>
                
                    <input type="submit" value="Submit" />
                </form>

            </div>
        )
    }
}

export default Form;