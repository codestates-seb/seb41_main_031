import styled from "styled-components";
import { Link } from "react-router-dom";
const Signup = styled.button `

box-shadow:inset 0px 1px 0px 0px #54a3f7;
	background:linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);
	background-color:#007dc1;
	border-radius:6px;
	border:1px solid #124d77;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
    height : 45px;
	text-decoration:none;
	text-shadow:0px 1px 0px #154682;

    
`


function SignupButton(){


		return <Link to = '/signup'>
 			    <Signup>Sign up</Signup>
     	      </Link>

}

export default SignupButton