import React, {useState} from 'react'
import "../Styles/SignUp.css"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const SignUp = () => {


    const navigate = useNavigate();
    const [formData , setFormData] = useState({
        username : "",
        email : "",
        password : ""
    });
    
    const [message, setMessage] = useState('');
      const [loading, setLoading] = useState(false);
    
    
    
      const handleChange = (e) =>{
    
        const {name, value} = e.target;
        setFormData({ ...formData , [name] : value});
      };
    
    
      const handleSubmit = async (e) =>{
        e.preventDefault();
    
        try {
          setLoading(true);

          const response = await axios.post('http://localhost:4000/api/register', formData);
          console.log(response.data.message)
          if (response.status === 201) {
            setMessage('User created successfully');
            navigate ( '/login')
    
    
          } else if (response.data.message === "User already exists") {
            setMessage('User with this email already exists');
          } else if (response.data.message === 'All credentials required') {
            setMessage('Please provide all fields.');
          } else {
            setMessage('Something went wrong');
          }
        } catch (error) {
          console.error(error);
    
        } finally {
          setLoading(false);
        }};

  return (
    <div className="signup-main-div">
    <div className="sign-up">
      <div className="signup-items">
        <h2 >Login or Create a New Account</h2>
        <form onSubmit={handleSubmit}>

          
        <input type="text"
         placeholder="Name"
         name='username'
         value={formData.username}
            onChange={handleChange}
         />

        <input type="email"
         placeholder="Email" 
         name='email'
         value={formData.email}
            onChange={handleChange}
         />


        <input type="password"
         placeholder="Password"
         name='password'
         value={formData.password}
            onChange={handleChange}
         />
<div className='notification'> {message && `${message}`}</div>
        <button type='submit' disabled={loading}>Create Account</button>
        <p className="opposite-btn"><Link to='/login'>Already Have Account?</Link></p>
        


        </form>
        

      </div>
    </div>
  </div>
  )
}

export default SignUp