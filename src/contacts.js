import React from 'react';
import axios from 'axios';

export default class contacts extends React.Component {
	constructor(props){
		super(props);
    this.state = {
      name: '',
      mobile:'',
      email:'',
      company_name:'',
      message:''
    };


	}

  handleChange = event => {
    if(event.target.name === 'name')
    this.setState({ name: event.target.value });
    else if(event.target.name === 'mobile')
    this.setState({ mobile: event.target.value });
    else if(event.target.name === 'email')
    this.setState({ email: event.target.value });
    else if(event.target.name === 'company_name')
    this.setState({ company_name: event.target.value });
    else if(event.target.name === 'message')
    this.setState({ message: event.target.value });
  }

  handleSubmit = event => {
	  console.log("Entry");
    event.preventDefault();

  const contact = {
      name: this.state.name,
      mobile: this.state.mobile,
      email: this.state.email,
      company_name: this.state.company_name,
      message: this.state.message
  };
	
	const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...'
    };

    axios.post(`https://test.indexial.in/api/contacts.php/create`, {headers, contact })
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(function (error) {
        console.log(error);
      })

// var data = JSON.stringify({"name":"Rajesh","mobile":"9565326598","email":"somzadbuke@gmail.com","company_name":"Indexial","message":"How are you 1"});
// console.log(data);
// var config = {
//   method: 'post',
//   url: 'https://test.indexial.in/api/contacts.php/create',
//   headers: { 
//     'Content-Type': 'application/json'
    
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });


  }
  
   

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
           Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
		  <label>
            Mobile:
            <input type="text" name="mobile" value={this.state.mobile} onChange={this.handleChange} />
          </label>
		  <label>
            Email:
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
		  <label>
            Company Name:
            <input type="text" name="company_name" value={this.state.company_name} onChange={this.handleChange} />
          </label>
		  <label>
            Message:
            <input type="text" name="message" value={this.state.message} onChange={this.handleChange} />
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}