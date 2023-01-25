import {useState,useEffect,axios,useNavigate } from 'react';


const Delete = (e) => {


  console.log("딜리트 작동");
  const navigate = useNavigate();
   e.preventDefault();
    if (window.confirm('정말 탈퇴하시겠습니까?')) {
      
      setTimeout(function (){
        axios
        .delete('http://localhost:5500/data/1')
        .then(() => {
          window.location.reload();
          alert('그동안 이용해주셔서 감사합니다.');
          navigate('/');
        })
        .catch((err) => alert(err.response.data.message));
      }, 3000)
      } 

      return console.log('elfflwmwfmfmf')
  };
export default Delete;