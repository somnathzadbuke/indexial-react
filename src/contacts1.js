/*import React from 'react';
import axios from 'axios';

class contacts extends React.Component {
	
	 constructor(props) {
        super(props);

        this.state = {
            name: null,
            mobile: null,
			email: null,
            company_name: null,
			message:''
        };
    }
  

  /*handleChange = event => {
    this.setState({ name: event.target.value });
	this.setState({ mobile: event.target.value });
	this.setState({ email: event.target.value });
	this.setState({ company_name: event.target.value });
	this.setState({ message: event.target.value });
  }

  handleSubmit = event => {
	  console.log("Entry");
    event.preventDefault();
	
	
	componentDidMount() {
        // POST request using axios with error handling
        const article = { title: 'React POST Request Example' };
        axios.post('https://reqres.in/invalid-url', article)
            .then(response => this.setState({ articleId: response.data.id }))
            .catch(error => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
    }
	
	
	
	


    
componentDidMount() {
    // POST request using axios with error handling
    const contact = {
      name: this.state.name,
	  mobile: this.state.mobile,
	  email: this.state.email,
	  company_name: this.state.company_name,
	  message: this.state.message
    };
    axios.post('http://test.indexial.in/api/contacts.php/create`, article)
        .then(response => this.setState({ articleId: response.data.id }))
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });

  
}
   

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
           Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
		  <label>
            Mobile:
            <input type="text" name="mobile" onChange={this.handleChange} />
          </label>
		  <label>
            Email:
            <input type="text" name="email" onChange={this.handleChange} />
          </label>
		  <label>
            Company Name:
            <input type="text" name="company_name" onChange={this.handleChange} />
          </label>
		  <label>
            Message:
            <input type="text" name="message" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
  }
  
  
  
  
  
  
import React from 'react';

import axios from 'axios';

export default class contacts extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://test.indexial.in/api/blog.php/list`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}
  
  
  
  
import React from 'react';
import axios from 'axios';

export default class contacts extends React.Component {
  state = {
    name: '',
    mobile: '',
	email: '',
    company_name: '',
	message:''
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const contact = {
      name: this.state.name,
	  mobile: this.state.mobile,
	  email: this.state.email,
	  company_name: this.state.company_name,
	  message: this.state.message
    };

    axios.post(`http://test.indexial.in/api/contacts.php/create`, { contact })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
           Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
		  <label>
            Mobile:
            <input type="text" name="mobile" onChange={this.handleChange} />
          </label>
		  <label>
            Email:
            <input type="text" name="email" onChange={this.handleChange} />
          </label>
		  <label>
            Company Name:
            <input type="text" name="company_name" onChange={this.handleChange} />
          </label>
		  <label>
            Message:
            <input type="text" name="message" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
  }
  */
  
  
  
  
 import React from 'react';

import axios from 'axios';

export default class contacts extends React.Component {
	
	constructor (props){
		super(props);
		
		this.state = {
    persons: []
  };
	}
  

  componentDidMount() {
    axios.get(`http://test.indexial.in/api/blog.php/list`)
      .then(res => {
//const persons = res.data;
        this.setState({ persons: res.data.blogs });
		console.log(res.data);
      })
  }

  render() {
    return (
      <ul>
        {this.state.persons.length && this.state.persons.map(person => <li>{person.title}</li>)}
      </ul>
    )
  }
}
