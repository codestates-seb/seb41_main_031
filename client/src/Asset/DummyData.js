import axios from "axios";

async function fetchData() {
  const result = await axios.get("http://localhost:5500/data");
  console.log(result.data);
  return result.data;
}

export default DummyData();

//   useEffect(() => {
//     console.log("Works!before");
//     setTimeout(function () {
//       console.log("Works!");
//       axios
//         .get("http://localhost:4000/data")
//         .then(async function (response) {
//           // response
//           setdata(response.data);
//           console.log(response.data); //데이터 전송 성공시
//         })
//         .catch(function (error) {
//           // 오류발생시 실행
//         })
//         .then(function (response) {
//           // 항상 실행
//         }); //컴포넌트가 리랜더링 될때마다 실행
//     }, 3000);
//   }, []);
//   return <>{console.log(`${data1.name}dddd`)}</>;
