import styled from "styled-components";
import { Link } from "react-router-dom";
const Login = styled.button `

box-shadow:inset 0px 1px 0px 0px #f29c93;
	background:linear-gradient(to bottom, #fe1a00 5%, #ce0100 100%);
	background-color:#fe1a00;
	border-radius:6px;
	border:1px solid #d83526;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	height : 45px;
	text-decoration:none;
	text-shadow:0px 1px 0px #b23e35;
`


function LoginButton(){


		return <Link to = '/login'>
 			    <Login>Log in</Login>
     	      </Link>

}

export default LoginButton
