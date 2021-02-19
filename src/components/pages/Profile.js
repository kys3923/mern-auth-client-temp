import axios from 'axios';
import { useEffect, useState } from 'react';

const Profile = (props) => {
  const [message, setMessage] = useState('Loading msg ...');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/private`)
      .then(response => {
        setMessage(response.data.message)
      })
      .catch(err => {
        console.log('error  in useEffect', err)
        setMessage(err.message);
      })
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <h4>{message}</h4>
    </div>
  );
}
export default Profile;