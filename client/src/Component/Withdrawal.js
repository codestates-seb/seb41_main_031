import styled from "styled-components";
import { useEffect, axios } from 'react-router-dom';




function Withdrawal(){


  const [username, setUsername] = useState("");
  const [data1, setdata] = useState([]);

  
    useEffect(() => {
        console.log("Works!before");
        setTimeout(function () {
          console.log("Works!");
          axios
            .get("http://localhost:4000/data")
            .then(function (response) {
              // response
              setdata(response.data);
              console.log(response.data); //데이터 전송 성공시
            })
            .catch(function (error) {
              // 오류발생시 실행
            })
            .then(function (response) {
              // 항상 실행
            }); //컴포넌트가 리랜더링 될때마다 실행
        }, 3000);
      }, []);

}

export default Withdrawal