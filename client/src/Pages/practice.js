if((form.email === data.Email)){
    alert('예전 이메일과 같습니다')
  }

  if(!(form.email === data.Email)&&isValid.isEmail)
  {
    setTimeout(function (){
      axios
      .patch(`http://localhost:5500/data/${1}`,{
        
       Email : form.email

      })
      .then(() => {
        window.location.reload();
        alert('이메일 변경이 완료되었습니다.');
        navigate('/mypage/editprofile');
      })
      .catch((err) => alert(err.response.data.message));
    }, 3000)
    } 

    if((form.region === data.Region)){
        alert('예전 지역과 같습니다')
      }


      if(!(form.region === data.Region))
    {
      setTimeout(function (){
        axios
        .patch(`http://localhost:5500/data/${1}`,{
          
         Region : form.region

        })
        .then(() => {
          window.location.reload();
          alert('지역 변경이 완료되었습니다.');
          navigate('/mypage/editprofile');
        })
        .catch((err) => alert(err.response.data.message));
      }, 3000)
      } 

      if(!(form.previouspassword === data.Password)){
        alert('예전 비밀번호와 일치하지 않습니다')
      }

      if((form.previouspassword === data.Password)){
        if(form.newpassword === data.Password){
          alert('새로운 비밀번호가 예전 비밀번호와 같습니다')
        }
      }

      if((form.previouspassword === data.Password)&&!(form.newpassword === data.Password)&&
        isValid.isPassword)
      {
        setTimeout(function (){
          axios
          .patch(`http://localhost:5500/data/${1}`,{
            
           Password : form.newpassword
  
          })
          .then(() => {
            window.location.reload();
            alert('비밀번호 변경이 완료되었습니다.');
            navigate('/mypage/editprofile');
          })
          .catch((err) => alert(err.response.data.message));
        }, 3000)
        } 