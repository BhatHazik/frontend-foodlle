import React, {useState} from 'react'
import "../Styles/Login.css"
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const Navigate = useNavigate();

  const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });


    const handleChange = (e) =>{
      const {name, value} = e.target;
      setFormData({...formData, [name]: value});
    }



    const handleSubmit = async (e) => {
      e.preventDefault();



      try{
        setLoading(true);
        const response = await axios.post('http://localhost:4000/login', formData);

        if(response.data.message === 'Login success'){
          setMessage( 'Login success');
          const {token} = response.data;
          localStorage.setItem('token', token);
          Navigate('/recipes')
        }
        else if(response.data.message === 'Password Does Not Match'){
          setMessage('Password Does Not Match');
        }
        else if(response.data.message ==='user not exists please signup first'){
          setMessage('user not exists please signup first');
        }
        else if(response.data.message ==='please fill all feilds'){
          setMessage('please fill all feilds');
        }
        else{
          setMessage('somethig went wrong')
        }




      }
      catch(error){
        console.log(error);
      }
      finally{
        setLoading(false);
      }};

  return (
    <div className="signin-main-div">
      <div className="sign-in">
        <div className="signin-items">
            <h2>Login or Create a New Account</h2>
          <form onSubmit={handleSubmit}>
            
          
          <input
           type="email"
            placeholder="Email" 
            name='email'
            value={formData.email}
            onChange={handleChange}
            />


          <input
           type="password"
            placeholder="Password"
            name='password'
            value={formData.password}
            onChange={handleChange}
            />

<div className='notification'> {message}</div>
          
          <button type='submit'>
            {loading ? 'Logging .....' : 'Login'}
            </button>
          <p className="opposite-btn"><Link to='/SignUp'>Don't Have Account?</Link></p>
          


          </form>
          

        </div>
      </div>
    </div>
  )
}

export default Login