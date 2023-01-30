// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBasketball } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import logo from "../Asset/yadon.png";
import { useSelector } from "react-redux";
import axios from "axios";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FcAlarmClock } from "react-icons/fc";
import { HiLocationMarker } from "react-icons/hi";
import Map from "../Component/Map";
import styled, { keyframes } from "styled-components";
import DummyData from "../Asset/DummyData"; //이름 바꾸기

function PostDetail({ openModal }) {
  const [Joindata, setJoindata] = useState([]);
  const [Joinmemberdata, setJoinmemberdata] = useState([]);
  const data = useSelector((state) => state);
  const auth = window.localStorage.getItem("Authorization");
  useEffect(() => {
    const promise = DummyData;
    const getData = () => {
      promise.then((dummyData) => {
        setJoindata(dummyData);
      });
    };
    getData();
  }, []);

  useEffect(() => {}, []);

  console.log("dddd" + data.postid);

  const filteredData = Joindata.filter((item) => item.postId === data.postid);

  return (
    <>
      <Postupdiv>
        {filteredData.map((item) => (
          <div key={item.id}>
            <i class="fa-solid fa-circle-xmark fa-1x" onClick={openModal}></i>
            <sprotsnamediv>{item.event}할 사람 구해요</sprotsnamediv>
            <Contnentdiv>
              <Viewinputdiv>
                <span1>종목</span1>
                <contentboxdiv>{item.event}</contentboxdiv>
                <span1>
                  <FaRegCalendarAlt className="calendar" />
                  날짜와 시간
                </span1>
                <contentboxdiv>{item.date}</contentboxdiv>
                <contentboxdiv>{item.time}</contentboxdiv>
                <span1>운동장소</span1>
                <contenttextdiv>
                  <HiLocationMarker className="location" />
                  {item.location}
                </contenttextdiv>
                <sidemap>{<Map />}</sidemap>
              </Viewinputdiv>

              <Postinputdiv>
                <joindiv>모집인원</joindiv>
                <joinpeplecountdiv>모집중</joinpeplecountdiv>
                <joinpeplediv>
                  <joinpeoplebox>
                    <joinpeoplimg>
                      <img src={logo} alt="imgefile"></img>
                    </joinpeoplimg>
                    <joinpeoplname>{item.nickname}</joinpeoplname>
                  </joinpeoplebox>
                  <joinpeoplebox>
                    <joinpeoplimg>
                      <img
                        src={
                          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRUVFRYVGBgYHBwYGBgaFRkYGRgcGRkaGhkcHBoeIy8lHB4rIRYcJjomKy8xNTU1HCU7QDszPy40NTEBDAwMEA8QHxISHjQrJCs0NDQ0NDQ1NDQ0NDE0NDE0NDQ0NDQ0NDQ0NDQ0PTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EAEYQAAIBAgQDBQYCBwIOAwAAAAECAAMRBBIhMQVBUQYiMmFxE0JSgZGhgrEUI2JykrLBU9EHFSQzQ3ODk6LC0+Hw8RZUs//EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACMRAQEBAQACAgIBBQAAAAAAAAABAhEDIRIxE0EEIjJRYXH/2gAMAwEAAhEDEQA/APs0REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQMSt4vxanQUF7szXyourNbc66BRcXJsNQNyAZ1aoFVmOgUEk+QFz+U+V1+IvVZqreNtd/AvuoPJQfmSTuTL+PHyqZOuirdrK97hKKjoc7n+IFfylpwPtMlZhTdclQ3yi+ZXtqcrWHeAF8pF7Xtext88r4sAkFttT5DqfhGm5nk3PhZlPusrFWU8mVhqCOs6L4M2evtNkfSuKdo6VJmRb1HG6r4VPR32U7aC7ag2tOexfaDEP74pj4UUX9C7XJ9VyyqRAAANp6LaWkZ8Un2mZhVJfxs7/vu7/zE2mEcpbI7pbXuVHQfMKQD6GeS08M4Ev8AGf4SucF2lxFPxFay88wCN8mQW081JPWWuI7YUjTBpa1mNhTfQpbd3AOqC41BsSQLjUjinri24+okWombW9iNVYbg/wDnLYyL4M32iyLbG8Wrs12rVb/s1GpqPIKhAt63PmZZdne1FRKi0q750chUdgA6OxsoJFsyE2Fz3gTqSD3eNqYolgh0YAl7cxcAZSdg3XlYjfUR3e5KMSVINrnW2zC/Pca76ydYzZziLx97iV3AcS1TDYeo3iemjN6lQT95YziVIiICIiAiIgIiICIiAiIgIiICIiBV9o1JwmKC7mjUt65GtPlpE+xMoIIOoOk4HiHD1oHJWAC7JUbRWXZQW2DgWBB33HQbeLcz3rTx5lvOuVwQ7inmwDE9SwuTPOH0Z15K/d8gUVrfVjLzGUaCDVwDyUEMx8go1JmnDcFbJmY2ZiWYdL7L5kCwv5Tf8mV/w6akr2trvYDqSdAAOZPSSMRRqqpZqdVEGpZqbqoHViR3R5m06DsfwpVL1mGZlYoh5KAozsvRiWK36L5m/WZ5lrzcvplq2Xj5OxJ52H3/AO01l1GwufrLvjfA8ldkSy03XOi/CQ1nQDkoJQj9+2gUSD/iphcl0VRqT0HO99AJtnyZs71pnN1OyIDOT7p+3981kgAtYiwJsOf9DLehwdn1Rarj4hlRT5guylh5qCJsxHCiiOTTqg5Tlbuut7G2iEsBfmQBF82ZPR8f9xD7Q9m61CkMQ2Vwo/WZA10VrZr38SqbEtpa21rkU9HCO7KqLd2IRL82Y6D05k8gCeU+wpUWqgYWZKi36hlcbehBtKPsPwimiMxzNVpvVoZmIOUU6jIuUDQXUKSfEb6kznnm1z2z7P26Xh+FFKlTpLtTRUB8lUKD9pKiJiqREQEREBERAREQEREBERAREQEREDAlb2hqsuFxDLbMKT5b7Zshy3+dpZSr7SNbDv5lB9aij+sJn24zAcORALKosAAAALAaDaTXaYzTG80enJxbdmKwy1U5o9wOZVwGDfxZx+GXc4v9INJlqKe/4Qlifag6lMoBJOlwQCVtfbMDdNiq1UDRsOpAJF0at5i4uidLgsehUytntw+bPx1/1C49Xdq1NFpOXUVAACpBUmlldmBsik5rZrMcjWB2m7B8IAIeqQ7DUKNEQ+S+837TfILcyVhqKoLKLa3OpJY8yzHVm8ySZvLyZFZrXPj+ntppM81qwUFmNgNzyHK56DzmKtQIrMxsFBJPQDeShpakyFmp3s1y6BsuYndkOyP9m52PeGvsRWLDFllZHbEu5RhZlD06ZGmxFwRmF1JBsTJYM04tWAzpYVEBZD575T+w1rEfPcAitiHTxNVCqGVXGzAMPQi4/ObZVUiIgIiICIiAiIgIiICIiAiIgIiIGJWdox/k9T8J+jKf6SzlN2qrZMM/7TUk/wB5VRP+aE5+45szKiZtMzR6bbwpQatQndUQL5Kxctb1Ki/7g6S2nNYlWuHRsrrcDmGBtdSOe1xzHzIMGtx+qpsyEdGNU+z+bBCV/EB5Xhx+bOpq12TEDeRqmNQba+k5gYiu6hlNHcEhGNXML6hXYIoa211Ivv1nqlggwJq53uSQtQggL7oKLZCbC+x1J1hj1Y1uOo11UhuRCKahHUNlBt85H/THOi02tyzMii3LQEkfSbR0mutWVBd2Cjlc2v5DqZKWUxlZfcB/dqXP0YKPvJfDOJtiO6lN8xRW7yWVFqA5GZvDbQmwJOh0lLWxrMLUwVv77LqP3UOt/NrW00adv2RoKmEoEAAuiOx5szKLsTzJ0ldXhrNzO1b0KQVVQbKoUegFh+U2xEooREQEREBERAREQEREBErOIcaoUGVarlSwuAEdrC9rnKDlF+ZtsehtOp1AwDKQVIBBBuCDqCCNxA2xEQEREDE5XjtYV2FMapScMxt4qi6qB5KbG494W0ykG249jTSpHKbO5CJtozX71jvlUM1ueUyjoUwqqo2AsNbn1J5nzlpG3hx29qKy20M8O0k4gyLeWdsvY8iasRhc2q7/AJySADM5ITxztfAoGLFFD/EBlb+Ma/ebKSEDx1PnVqH82MvTTB31mpsGh6j0hS4l/SpNLq9T/e1B9g08pQVSSFAJ3a3ePq25locCOTfaYPDz8Q+kkmJPqK4npOh7K8cNNaeHrEFQFSm9rWIAVVflrsG9AddTWDAdW+0NgFIIbUEWItoQdwZF9q68fynK+kxKPs5jy6mm5JenbUm5dDfIxPM6EHzW/MS8mbh1Lm8rMREIIiICIiAiIgIiIHzrtlXIxpB29lT/AJ6n95nvs3x4UHFNz+pc6E/6J2O/kjE69Cb7FiIv+EW6Yqm9tHpAfNHe/wD+izm3xS29eU685zrElWn0+3zM4LsT2oU5cNVY32oux36U2PxD3TzGm4u3eTl1m5vKqzERIHJ9pKpbEU05Ihcj9p2yqfkEcfiM0pUvHHT/AJW/+po/z15oonWXn07vFn+iFRrmanW89Yl1Q3JAvNAxtM+8JaZtaTUkZpVBnZOagHfcHn/SSLyvS36Rmv4qRC/hcZj/AMSSdeQtHsQRMLPQMJeQswZlpgiBDWoxqsvuhb/M2t+TfaSQJoQ/rXHLIjfMtUB/lWeOJNdVp7GqwTT4Tcv6XVWF/OFLr4y2pfCaL1XXEU3NNFDqjqFLVFe2bLmBXJdFINjmKgjTVrNsSmYg16txe7e0YLddwPdLCxuANLa2ns3VVRMuY2RAxyrcC/2Ck2GptK5+HI7+yvnVLGu5ABqNoyUQB4KYuHKDlkBzZmkPN1q6vaVuJYtCj4dqmIRjYqyU2FrE3VwyFRoRcl9SNJb8L7RhyFr0auHqE2AfK1NiSAAtVCVuSQAGyknYTW9REBJKICbk6KCx/Njb1Mivii4ISkzKQbmpamhHMMGBe34CJFivXXSorcWzf5kAj+0a+T1UDWp8iFPxTn+E+3qKwqlf0e/6mmM12Ww8bMbsl7lVIGh15KsrGV76D5+cSJ6tuEcQZ2dHKllAYFVKhlJIPdJNiCOvMS4nF8PqlcRhyASHL028lam1S5/FRQfinaSKQiIkJIiIHB/4UcKTTw9UAnI7Ix+Fai3ufxU0X8U+dWn27j/D/wBIw9Wjpd1OQnYOO8h+TAH5T4zgqZJuQRbcHcHmCORB0m/i1zNXxPleNtLAXGuk7js12pZLUcU112SuTt+zV/o/P3rEXbmFmSZXV+X26L4c8fYJmfLOE8brYewRg1P+yfwD9xhqn3X9m+svMZ23V0NOijrXYa5lBWmpuDUzC6tscq7k2uALkZ8rC+Oy8VuLx2fHVmucr3opc7HDltAPMmu1+gEzjsZk0HiP2kAYN8i5AbplZCTzTYEnfMLqT0YyHWxGdi+uvI7jyPQzbx5lvt0W3GORvqVS41NzvI9oUz0wnVPTnesLXyVKRJ0zZD6OLD/jCfSdKyzkMUpKnXXkehGoPyM6vhmI9rTR/iUE+RtqJh5s8vXR4derG5BPdp7VJ7CTFva0hZ6yz2RF4R1V4khKiuSArKUPXMO+n2D/AGlHhsX7TH0wPCpJ0IsbIVJbnfvAC3TXla27S0s1B+9lsyNmG62qJc/S+nPbnKDs3hj36jqVe70wOmU5XI9WX6KOsenP/I1ycfR6qBlIYAg8jt1H35yFhqbIi0kOdxq9RrkZ27zM2t2Ylrhb6C1yBa+OGVWKIj3LEZvNEPgLHqSNB5HoZY0KCooAFhy876kk7kk6knUyOOKNVDBqpzm7PtnbVrHcDkq6eFbCeOIUM9N0AHfRlsdjcEWPkdj5GSSZoxOICIXa5Attvqbf1geMVWtoP/UhETe1Fns6nuuAcpFiNORH5H68porXS11c32yo7/XKDb52gaMRRVvZq4zD2iaejAggjUEbgjUWvL7CcTNOotGqxKvpSqHfN/ZuebfC3O4B71i1Th8I7ujuuRUJZVJBZmysoLWJAADEgXJvba1jOxGFVwFcXF79PuNvWQnrp4nz5ONYqiz02re0KNlvUpoQRYMp7gU3KsL673l7wrtGzsiVKYBckIyMSCQrOcykXXRTsW+Uiyp66WIiQlifMO03ChQxNQgWSveqvQMSPar/ABEN/tPKfT5UdoeEjEUiugdTmpt0YAix8iCVPk3UCTLxbGvjrr5nPLvaa69QglSCGBIZTupBsQfMEESLWrWBY3sNdNT6AczNJHXdRJTM7BEF3bboAN2boouPqBuZ0eA4YlMfEx1ZjzPX/wA2mvg3D/ZJdgPaPYud9eSA/CtyB8zzMuaVHrIaScnajkTnuK4X2b5wO451/Yc9egf+a/xCdW9KQ8TRDKyMAVYEEdQZbOvjew1mbnHKtPdNtLGYxOFeibOcyX7j+uyv0blfY+R0nkm0686mp2OPWbm8rTi30tLrslSZqbhKhUh30YB07zZhpow0YaBgPKc/iKo3JAA5mdD2NosV9r3Ajg2y3JcFro7HYWUWsL+LU6WHN/K1yfas1Zexelaw9xX80cX/AIXy2+pnlqlT+wq/xUf+pLBWm0Gck8taTzaVPtH/APr1f4qP/Unk+2O1IL+/UUfZA35y5M1MYvk0fm0ocfgXZGWo4yt3SqJa4O4ZmLXHoFlJhK4WgjWZiFHdUZndwO8qgas5YHTe86HilfvKii7E5UW9szHlfkAASTyAJ5SZwnhCUASO87Es72tqxuwQe4l+Q33NzcyfHdX3WO9XX3WeAh/ZA1EZHJu2awJNhsL3CgWUA2NlFxJT4u7hGUqTfLrdWtqbH4rC9iBztcAkbiZqr084texBDA9CpB/7HyJmrNsEpuG493qMrLdSSbEWKW2/p85dWkeqjZu4FUt4nIvYDTQbs3S+g312KUsbK9dEGZ2VQTYZiBc8gOp8pGPEL6pSrv8AgyfT2pS49JmiaSFmBZ3HdZlVqtS/NWKA5P3dB5TfQxyOcoDBgL5XRka17XswFxfS4gaBjiPFRrqPiyo//DTZm+030MSjg5HVrGzWIJU9GG6nyOs94mmHUqRbmCOR5GV9DhxKlyzLUFwj6Fgo91vjS/un5WNiHPQqe0FlrknT9Wt+ndZ/v3h9p0nZbhDIPbVAQ7AhUP8Ao0Ygm4+M5RfpYDqTA7N4IYivUr1l79BhTyXORagGcsAfEMtRCpO1777dnIt/SZP2zERKrEREDhu3XACb4qipLD/PKo1ZQAA4HNlAAI3KjTVQDx3CKIetTG6qDU6g5LZdf3nU/hn2mcBiuGJRxuI9mpVGpUny+6rPUr58o5A5FNtrmXzr1xv4dd1JW4SejgiV5M9LUtJdms9TmMjYhZ5Feeaj3hXMsamAIIIBB0IOoPrOYTgqd9Fd0yOVFiGXKQHTutfQK4XQjwzpyZFw7EV6hFPOMlMmzDOCWqLcK1gwsmut9NAZXermdlZ+edz1X8F4G61RUzOMii3tFRkzksHyBcpIy5bMSCLnzEvcLwpEUBRkIvrTJQeVxs9hYXYHaSKOLRzlVu98DAo4/AwDW+U3zm1vWr7ciN7CqPDVB/1lIP8AyFJtzVh/ZN599Pt3vzm68ZpWXg1Bqx3NFfRXf+qyNiS4BJq26ZKar/OXm+viQu+/SVVesWNzJ90RHosGDo7iopurMxYXIIIKXAIIJBtbyIk/h/aQOSlRQlRTlZb6E5Q3cawDizA7XF9QJFqVFUXYgDqTaUeBxC1nxSMl0FQEB00YBEQ6MNwyE2OozL1E28dv0pY7n/GC87ibKeLQ6XnJUKZSwV3yj3S+cHyu92A8gRLDD8ySSSb6nboBbYTVVeYioxYU0NmIzM2+RNrgHQsSCBfTQnXLY5xYzMlO5AYMzkEglEyjKCNrl116BttxB4FiQyszbucwPVB3aYHQZQDbqzdZNxm2exuLrcclJBJt+EQM1cQFARAAFFgFACqBsABoJV4k2KVfeptmv1U6OPMFbm3VVPKbr/8AuaMQM5Wktsz2zDogIzseml1Hmw87BfETBNrTImGECA3FRhsR3lZkrpmbKblGpMFLBbd661EB1vamLAzq6FZXUMhDKwuCDcEeRnC9oKgzoml1VmJ5qHIAHoch/hEuex6tlci/smCMh91nObOy9VIyG40Jud7yLP2mV08REqsREQMTjO0VTLizm0V6NOx80qVc32dfrOznK9ucGTSWuouaJOfypvbOfwlVY+SmTPtfx6+OpVdeYaU9LEsuxkhceOY+kvx6HyicpmwyIuMTzmHx68hCexJtGAcCrV1Hhpr9DUb/AJxK6pjmOg0kTA5wHcAMHYtbZrABAQx0YEICAbb7zPy/28c/n1OcdTWCOLOEYdGAI+8jtQRfBVqJ6PnHoFqBwo8ltKlcWtwCSjHQK/dJPQX0b8N5uM5+OTqY+KddnRvWkb/Mq4H2katja52NMfJv754iOCOwrH36Y/2bN/ziBRc+Ko3nkRVB/iDEfIyRIWL4nTQatmN7ZUGZieQ00B9bbSR4xQSipcC7m4RnYu1yD7zEkKACSByBmrhtApSUDRiCxLC5u2ve620HykHiDM6O7CxKlQg1yK3i23YjUnyAG1zZUOIUHW/taYPNc63v5C+onTjPJ7TvNnI906l9CMrDcb/MH3h5/Wx0m8NI+GrGq6UqKs7te3dKKLC5ZmYaKOoB5dRL2v2XxCjMDSfqi3Rl8gzaP6nJF9M+VWcJqfqqfVVVT5FQAR8iDLqhxMLlV7i5sGtpfleUVPB16Dk1KLpSci7HIQlRmCi+Vj3XZhtsxN99JD4pV8V1HxFTl9S2wHqRJiKvKnDqT62Yc+5UdAT5hGAPzmXWnQRnNlVRdm1ZjbQXOpY8huZTjFFdQ3mJB7QcSdqKjLcB1Z7fCoYg+gbIfK14k98THp+LvVJzsUT3UVracs7jVm6gHLysbXMSljmw75wzZAe+pY5Sh0ZiNrrfNffu25yDSrK2qmba1nBB5ix8wRadnwzzkacnOO94RwBH/wAoxClqj2YI/hRR4AU2Jt3u9fKSbWnTyDwbFGrh6FU6F6auR5soJ+8nTgqpERAREQEwRMxA+YdqMCMLVAp96my5ygsGoi9hYk2KHWw0IytuLAV1KsraBgTzGzD1U6j5ydi8Z7d3rHUOSU6ZBon1UAkdWMjUsMq6LcDkLkgeSg+EeQ0mk+nbiWZnWYnrJPQp30te+lrXvJaIBZqreyoqzXDF2QA2VbZgt2Us2uuU3AuRci0nrxBFIR/1TgDuPdLDYWDAEDkMwX0lnwXDlK+HO3fKhR0NKpf0AH5TucZgqdVclWnTqKd1dA6/QgiZbz2uTzdmvbgHS4sRcHkRcEf1mgYRB4QV8kdkH0UgfadovZbCqLJT9mPhpu9Ndf2UYL9p5fs0h2qVl8gUP3ZCZT41i439HPJ3HzU/mphqBALNUfKNSSaagepCi31nZDszTvc1KxHTOqj6qoP3lR2s4NRp0VYUr2dS9Rg1V0UXN8zXZVzBb20A30vEwme7xyOJxNMnKiNVJ5uXNL6tcN6KNeomilSN8zHM1rA2Cqo+FFGiL5bmwuTJppjysdQQdD6HnM+yE2zmR148cjQZs4XSOIqrRRgpYE53BCabhRoXbnlB2B1Fp6ZVHLoANySTYADmSSBD02LLSKMjue7mtpbUurIxF1y30YEHLtcGXtN3k++PovBeBUsMpyXLt46jWzN5dFXyH3Ost5zXCeMOmSlXOcGyLXNgS2wFRRoCx2YaEm1hpfpZlXH3ql7WLfC1PJqbH0WqjH7CcUCes+kYzDLUpvTcXV1KMPJgQfsZxa8AxJ7nswCLAu7qEPIsoUsx6hSq9LjeJUVSLSyk5EuzGyovvsbmwA2J1ubdSdpf4PsviHUGq1OiTYlFvWYXGwc5QGHWzDSdBwfgiUO946hFmcixt8Kj3V0Gm5sLk2lvFpI4niH+D+kVvh3am41OY5kck3JZRbKTrqtgL+Ezmv8A4pxA1FphFUX71QsrU8vO1iGJ/D8huPrcS08mpORbqJwzBijRp0gSwRFS53OUWufWTIiUQREQEREBIuPLClUK+LI2X97KbfeSp4dbgg7GBwvCuyzPRpu1UoWVWCKi2RSoKqcwJJA0JuJFxfD2ovkqMtirOjjQMiFQ+YHwFS631IIYEHcDqOH4sJTSic71qaimyqt2JQZQ5JsqKwXMCxAN7b6TVxTs+2JDNUqGm2R6aKgVlVXtfMXUliSqkkZdgOVzaarXPl1L7+lRheB1HUMKaqDqoqOysQdiVVTlv0OvUA6TXTRkYpVp+zcDMLMGRl2LI4AuAdCCFYaXFiCeko8XT2avUYI/hanqXFRR30VAMztcG2UHMLEXBE0vwn9JqpXrh1RFZadEm2YMysxrAb3yJZL2sDmvmyq+VWnn1L7+mns5hM7e3PhAK0v2r+Kp6G2VT0zHUMJ00RK1lrV1e1mIiFSYmYgUWN7M4dyWCmmxJJamctydyUsVY+ZUnzlLi+yFUa06iP0VwaZ/iXMCfwidtEmWxbO9Z+q+apwnEJWRqlB8iBjnTLUUsQFWyoS9rM+pQDQS3w+CTEXTOotrowDow2IG6sPMTs5pr4VH0dEb95Qfzj5GtXV7XNYDhjstRKnsahUlHVlamGVhcNcFtGRhpYWOYcp0HDqLpSRXbOygKW1Ja2gJJ3NrXOlzc2G094XB06eb2aImY3bKoW5sBc23NgB8pJkKkREBERAREQEREBERAREQEREBERA0CguYvkXMRYtlGYgbAne3lN8RAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/9k="
                        }
                        alt="imgefile"
                      ></img>
                    </joinpeoplimg>
                    <joinpeoplname>김상완</joinpeoplname>
                  </joinpeoplebox>
                  <joinpeoplebox>
                    <joinpeoplimg>
                      <img
                        src={
                          "data:image/jpeg;base64,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"
                        }
                        alt="imgefile"
                      ></img>
                    </joinpeoplimg>
                    <joinpeoplname>장경욱</joinpeoplname>
                  </joinpeoplebox>
                </joinpeplediv>
              </Postinputdiv>
            </Contnentdiv>
          </div>
        ))}
        <Postbuttondiv onClick={openModal}>모임 참가하기</Postbuttondiv>
      </Postupdiv>
    </>
  );
}

const Postupdiv = styled.div`
  position: relative;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 20px;
  align-items: center;
  text-align: center;
  border: solid 1px rgba(0, 0, 0, 0.7);
  box-shadow: 5px 5px 5px 5px gray;
  padding-top: 20px;
  sprotsnamediv {
    font-weight: bold;
    font-size: 30px;
  }
  i {
    position: absolute;
    top: 10px;
    right: 15px;
    color: black;
  }
`;

const Contnentdiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 20px;
`;

const Viewinputdiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
  text-align: left;
  sidemap {
    width: 300px;
    padding: 0px 20px;
    height: 140px;
  }
  span1 {
    margin: 10px 0px 10px 20px;
    width: 300px;
    font-size: 20px;
    font-weight: bold;
  }
  contentboxdiv {
    width: 300px;
    height: 45px;
    border: solid 1px rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    font-size: 20px;
    margin: 10px 0px 10px 0px;
    padding: 10px 0px 0px 15px;
    box-shadow: 5px 5px 5px 5px gray;
  }
  contenttextdiv {
    width: 300px;
    margin: 0px 0px 10px 40px;
    font-size: 10px;
  }
`;

const Postinputdiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 20px 30px;
  joindiv {
    font-size: 20px;
    font-weight: bold;
    margin: 0px 0px 10px 0px;
  }
  joinpeplecountdiv {
    font-size: 10px;
  }
  joinpeplediv {
    display: flex;
    flex-direction: column;
    text-align: left;
    joinpeoplebox {
      display: flex;
      flex-direction: row;
      margin: 10px 0px 10px 0px;
      joinpeoplname {
        margin: 7px 0px 0px 5px;
      }
      joinpeoplimg {
        img {
          width: 40px;
          height: 40px;
          border-radius: 100px;
        }
      }
    }
  }
`;

const Postbuttondiv = styled.button`
  /* background-color: yellow; */
  width: 100%;
  height: 60px;
  font-weight: bold;
  border: none;
  border-radius: 0 0 10px 10px;
  color: white;
  font-size: 30px;
  background-color: #ff4c29;
`;
export default PostDetail;

// <MainBox>
//   <Main>
//     <Header>농구하실 분 구해요~~</Header>
//     <MiddleBox>
//       <LeftBox>
//         <EventsBox>
//           <span className="Events">종목</span>
//           <Events>농구</Events>
//         </EventsBox>
//         <DateTimeBox>
//           <span>날짜와 시간</span>
//           <Date>
//             <FaRegCalendarAlt className="calendar" />
//             2023년 1월 22일
//           </Date>
//           <Time>
//             <FcAlarmClock className="clock" />
//             19:00시쯤
//           </Time>
//         </DateTimeBox>
//         <MapBox>
//           <span>운동종목</span>
//           <MapContents>
//             <span>
//               <HiLocationMarker className="location" />
//               한강 시민공원 농구장
//             </span>
//             <Place>
//               <Map />
//             </Place>
//           </MapContents>
//         </MapBox>
//       </LeftBox>
//       <RightBox>
//         <PeopleBox>
//           <PartyPeople>
//             <span className="people">모집인원</span>
//           </PartyPeople>
//           <Party>
//             <span className="Continue">모집중</span>
//             <span className="PartyCount">5/10</span>
//           </Party>
//           <People>
//             <PeopleImage />
//             <Who>
//               <span>누구</span>
//             </Who>
//           </People>
//         </PeopleBox>
//       </RightBox>
//     </MiddleBox>
//     <BottomBox>
//       <AttendButton>모임 참가하기</AttendButton>
//     </BottomBox>
//   </Main>
// </MainBox>

// const Rotate = keyframes`
// 0%{
//     transform: rotate(0deg);
//     border-radius: 0px;
// }
// 50%{
//     border-radius: 100px;
// }
// 100%{
//     transform: rotate(350deg);
//     border-radius: 0px;
// }
// `;

// const MainBox = styled.div`
//   width: 100%;
// `;
// const Main = styled.div`
//   box-sizing: border-box;

//   position: relative;
//   width: 630px;
//   height: auto;

//   background: #ffffff;
//   border: 1px solid #000000;
//   border-radius: 25px;

//   margin-left: 450px;
//   margin-bottom: 50px;
// `;
// const Header = styled.div`
//   margin-right: 240px;
//   margin-top: 50px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 1.6rem;
//   font-weight: bold;
//   position: relative;
//   .Basketball {
//     color: red;
//     margin-right: 25px;
//     margin-bottom: 20px;
//   }

//   animation: ${Rotate} 0.9s linear 1;
// `;
// const LeftBox = styled.div`
//   margin-left: 75px;
// `;

// const MiddleBox = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   .people {
//     overflow: hiddlen;
//     white-space: nowrap;
//   }
// `;

// const Events = styled.div`
//   box-sizing: border-box;
//   width: 340px;
//   height: 50px;
//   background-image: linear-gradient(
//     to right top,
//     #ffffff,
//     #fcfcfc,
//     #f9f9f9,
//     #f6f6f6,
//     #f3f3f3
//   );
//   border: 1px solid rgba(0, 0, 0, 0.2);

//   border-radius: 5px;

//   font-family: "Poppins";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 1rem;
//   line-height: 105px;
//   display: flex;
//   align-items: center;
//   color: #000000;

//   margin-top: 13px;
//   margin-bottom: 37px;

//   .Basketball2 {
//     color: red;
//     margin-left: 12px;
//     margin-right: 10px;
//     width: 1.5rem;
//     height: 1.5rem;
//   }
// `;
// const EventsBox = styled.div`
//   margin-right: 80px;
//   margin-top: 28px;
//   position: relative;
// `;
// const Date = styled.div`
//   box-sizing: border-box;
//   width: 340px;
//   height: 50px;
//   background-image: linear-gradient(
//     to right top,
//     #ffffff,
//     #fcfcfc,
//     #f9f9f9,
//     #f6f6f6,
//     #f3f3f3
//   );
//   border: 1px solid rgba(0, 0, 0, 0.2);
//   border-radius: 5px;

//   font-family: "Poppins";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 1rem;
//   line-height: 105px;
//   display: flex;
//   align-items: center;

//   color: #000000;
//   position: relative;

//   margin-top: 13px;
//   margin-bottom: 24px;
// `;
// const Time = styled.div`
//   box-sizing: border-box;
//   width: 340px;
//   height: 50px;
//   background-image: linear-gradient(
//     to right top,
//     #ffffff,
//     #fcfcfc,
//     #f9f9f9,
//     #f6f6f6,
//     #f3f3f3
//   );
//   border: 1px solid rgba(0, 0, 0, 0.2);
//   border-radius: 5px;

//   font-family: "Poppins";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 1rem;
//   line-height: 105px;
//   display: flex;
//   align-items: center;
//   position: relative;
//   color: #000000;

//   margin-bottom: 37px;
// `;
// const DateTimeBox = styled.div`
//   position: relative;
//   .calendar {
//     margin-left: 12px;
//     margin-right: 10px;
//     width: 1.5rem;
//     height: 1.5rem;
//   }
//   .clock {
//     margin-left: 12px;
//     margin-right: 10px;
//     width: 1.5rem;
//     height: 1.5rem;
//   }
// `;
// const Place = styled.div`
//   box-sizing: border-box;

//   width: 340px;
//   height: 150px;

//   background: url(.jpg), #ffffff;
//   border: 1px solid #000000;

//   border-radius: 5px;
//   position: relative;
//   .map {
//   }

//   margin-bottom: 28px;
// `;
// const MapBox = styled.div``;

// const RightBox = styled.div`
//   display: flex;
//   justify-content: center;

//   margin-bottom: 300px;
//   margin-right: 100px;
// `;
// const PeopleImage = styled.div`
//   width: 2.3rem;
//   height: 2.3rem;
//   border-radius: 70%;
//   overflow: hidden;
//   background-color: green;
// `;

// const People = styled.div`
//   display: flex;
//   font-size: 1rem;
//   margin-bottom: 10px;
//   bottom: 5px;
// `;

// const AttendButton = styled.button`
//   display: flex;
//   align-items: center;
//   margin: auto;
//   width: 630px;
//   height: 60px;

//   background: linear-gradient(195deg, #ff4c29, #f4a393);
//   border-radius: 0px 0px 25px 25px;

//   font-family: "Poppins";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 0.8rem;
//   line-height: 48px;
//   display: flex;
//   align-items: center;
//   text-align: center;

//   color: #f9fbff;

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   &:hover {
//     transition: all 1.1s;
//     background-color: rgb(196, 60, 33);
//   }
// `;
// const BottomBox = styled.div``;
// const PeopleBox = styled.div``;
// const Party = styled.div`
//   white-space: nowrap;
//   margin-bottom: 20px;
//   .Continue {
//     font-size: 0.8rem;
//     margin-right: 55px;
//   }
//   .PartyCount {
//   }
// `;
// const PartyPeople = styled.div`
//   margin-bottom: 20px;
//   font-weight: bold;

//   .people {
//   }
// `;

// const MapContents = styled.div`
//   margin-top: 11px;
//   font-size: 0.9rem;
//   .location {
//     width: 0.9rem;
//     height: 0.9rem;
//     margin-right: 3px;
//   }
// `;

// const Who = styled.div`
//   margin-top: 10px;
//   margin-left: 13px;
//   font-size: 1rem;
//   font-weight: bold;
// `;
