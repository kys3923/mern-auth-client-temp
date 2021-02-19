import { useState } from 'react';
import axios from 'axios';

const Signup = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // TODO: add from password verification

  const handleSubmit = e => {
    e.preventDefault();
    // testing local server - nodemon
    // axios.get('http://localhost:3001/')
    //   .then(response => {
    //     console.log(response.data);
    //   }
    // );

    // testing after .env
    // axios.get(process.env.REACT_APP_SERVER_URL)
    //   .then(res => console.log(res.data));

    axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/signup`,
      { name, email, password }
    ).then(response => {
      console.log(response.data) //1st step
      // save the token in local storage
      localStorage.setItem('jwtToken', response.data.token); //test on dev tool on browser, localStorage.getItem('jwtToken')
      // set the token to auth header
      // set user data
    }).catch(err => console.log(`😖 error`, err));
  }

  return (
    <section>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-elem">
          <label htmlFor="name">Name: </label>
          <input 
            type="text" 
            name="name" 
            placeholder="Name goes here"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-elem">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            placeholder="email goes here"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-elem">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            placeholder="password goes here"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Signup" />
      </form>
    </section>
  );
}
export default Signup;