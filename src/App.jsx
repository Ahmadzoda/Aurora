import './App.css';
import Switcher from "./Switcher"
import Firstcard from './Components/Firstcard';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './i18next';
// import Secondcard from './Components/Secondcard';

//Pictures
import buttons from "./Pictures/buttons.png"
import aleksandr from "./Pictures/aleksandr.png"
import lamp1 from "./Pictures/lamp1.png"
import lamp2 from "./Pictures/lamp2.png"
import lamp3 from "./Pictures/lamp3.png"
import lamp4 from "./Pictures/lamp4.png"
import grayImage1 from "./Pictures/gray-image1.png"
import grayImage2 from "./Pictures/gray-image2.png"
import grayImage3 from "./Pictures/gray-image3.png"
import grayImage4 from "./Pictures/gray-image4.png"
import grayImage5 from "./Pictures/gray-image5.png"
import grayImage6 from "./Pictures/gray-image6.png"
import map from "./Pictures/map.png"



function App() {

  const [ lng, setLng ] = useState('ru')
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => (
    i18n.changeLanguage(language)
  );

  const handleChange = (event) => {
    const { value } = event.target
    changeLanguage(value)
    setLng(value)
  }

  return (
    <div className="App">
    <div className="container">
     
     <div className="black-div bg-[black] w-[100%] h-[auto]">
     <ul className=' ull flex justify-evenly flex-wrap text-white pt-[30px] pb-[30px]'>
      <li>{t("text1")}</li>
      <li>{t("text2")}</li>
      <li>{t("text3")}</li>
      <li>{t("text4")}</li>
      <li>{t("text5")}</li>
      <li><select value={lng} onChange={handleChange} className='text-black'>
        <option value="ru">RU</option>
        <option value="en">EN</option>
        <option value="tj">TJ</option>
        </select></li>
     </ul>
     </div>

      <div className="white-div dark:bg-[#B31918]">
        <div className="white flex justify-evenly flex-wrap pt-[20px] pb-[15px]">
          <div className="white-left "><h1 className='text-[#B31918] text-3xl font-medium dark:text-white'>{t("text6")}</h1></div>
          <div className="white-middle  pt-[8px]">
            <ul className=' flex justify-evenly flex-wrap gap-[30px] text-lg'>
              <li className='text-[#B31918] font-medium dark:text-white'>{t("text7")}</li>
              <li>{t("text8")}</li>
              <li>{t("text9")}</li>
              <li>{t("text10")}</li>
              <li><Switcher/></li>
            </ul>
          </div>
          <div className="white-right pt-[5px]"><button className='w-[100px] h-[30px] text-[#B31918] border border-[#B31918] dark:border-[white] dark:text-white'>{t("text11")}</button></div>
        </div>
      </div>

      <div className="content">
        <div className="content-text flex justify-start pt-[110px] pl-[300px]"><h1 className='text-4xl text-white font-medium w-[100px]'>{t("text12")}</h1></div>
        <div className="content-title flex justify-start pt-[20px] pl-[300px]"><p className='text-lg text-white w-[450px]' >{t("text13")}</p></div>
        <div className="content-button flex justify-start pt-[20px] pl-[300px]"><button className='w-[230px] h-[35px] text-white bg-[#B31918]'>{t("text14")}</button></div>
      </div>

      <div className="us-pictures dark:bg-[#B31918]">
      <div className="pictures flex justify-center">
        <div className="picture">
        <div className="picture-button pt-[150px] pl-[30px]"><button className='text-white w-[230px] h-[30px] bg-[#B31918]'>{t("text15")}</button></div>
          <div className="picture-title pt-[10px] pl-[30px]"><p className='text-white w-[300px] text-sm'>{t("text16")}</p></div>
        </div>

        <div className="picture1">
          <div className="picture-button pt-[150px] pl-[30px]"><button className='text-white w-[230px] h-[30px] bg-[#B31918]'>{t("text17")}</button></div>
          <div className="picture-title pt-[10px] pl-[30px]"><p className='text-white w-[300px] text-sm'>{t("text18")}</p></div>
          </div>

          <div className="picture2">
          <div className="picture-button pt-[150px] pl-[30px]"><button className='text-white w-[230px] h-[30px] bg-[#B31918]'>{t("text19")}</button></div>
          <div className="picture-title pt-[10px] pl-[30px]"><p className='text-white w-[300px] text-sm'>{t("text20")}</p></div>
          </div>

          <div className="picture3">
          <div className="picture-button pt-[150px] pl-[30px]"><button className='text-white w-[230px] h-[30px] bg-[#B31918]'>{t("text21")}</button></div>
          <div className="picture-title pt-[10px] pl-[30px]"><p className='text-white w-[300px] text-sm'>{t("text22")}</p></div>
          </div>
      </div>
      </div>

      
       <div className="buttons flex justify-around gap-[300px] pt-[40px] flex-wrap dark:bg-[#B31918]">
        <div className="button-left flex justify-center"><h1 className='text-2xl font-medium dark:text-white'>{t("text23")}</h1></div>
        <div className="button-right flex justify-center"><img className='w-[70%]' src={buttons} alt="" /></div>
       </div>


      <div className="all-people dark:bg-[#B31918]">
      <div className="people flex justify-center gap-[25px] pt-[30px] ">
        <div className="person1">
          <div className="person-button pt-[10px] pl-[20px]"><button className='bg-white w-[100px] h-[50px] font-medium'>{t("text24")}</button></div>
          <div className="person-text"><h1 className='text-white text-xl pt-[140px] pl-[20px]'>{t("text25")}</h1></div>
          <div className="person-title pl-[20px]"><p className=' text-[gray]'>{t("text26")}</p></div>
        </div>
        <div className="person2">
        <div className="person-button pt-[10px] pl-[20px]"><button className='bg-white w-[100px] h-[50px] font-medium'>{t("text27")}</button></div>
          <div className="person-text"><h1 className='text-white text-xl pt-[85px] pl-[20px]'>{t("text28")}</h1></div>
          <div className="person-title pl-[20px]"><p className=' text-[gray]'>{t("text29")}</p></div>
        </div>
        <div className="person3">
        <div className="person-button pt-[10px] pl-[20px]"><button className='bg-white w-[100px] h-[50px] font-medium'>{t("text30")}</button></div>
          <div className="person-text"><h1 className='text-white text-xl pt-[85px] pl-[20px]'>{t("text31")}</h1></div>
          <div className="person-title pl-[20px]"><p className=' text-[gray]'>{t("text32")}</p></div>
        </div>
      </div>
      </div>

       <div className="text-form flex justify-start pl-[180px] pt-[30px] dark:bg-[#B31918]"><h1 className='text-xl font-medium dark:text-[white]'>{t("text33")}</h1></div>
       <div className="title-form flex justify-start pl-[180px] pt-[10px] dark:bg-[#B31918]"><p className="font-medium text-[#4f4f4f] w-[600px] dark:text-[#bcbaba]">{t("text34")}</p></div>


       <div className="all-photo dark:bg-[#B31918] ">
       <div className="photos flex justify-center flex-wrap gap-[70px] pt-[40px] ">
          <div className="photo2">
            <div className="photo-text pt-[100px] pl-[50px]"><h1 className='text-white text-2xl font-medium '>{t("text35")}</h1></div>
            <div className="photo-button pt-[20px] pl-[50px]"><button className='text-white bg-[#B31918] w-[160px] h-[30px]'>{t("text36")}</button></div>
          </div>
 
          <div className="photo3">
          <div className="photo-text pt-[100px] pl-[50px]"><h1 className='text-white text-2xl font-medium '>{t("text38")}</h1></div>
            <div className="photo-button pt-[20px] pl-[50px]"><button className='text-white bg-[#B31918] w-[160px] h-[30px]'>{t("text36")}</button></div>
          </div>

          <div className="photo4">
          <div className="photo-text pt-[100px] pl-[50px]"><h1 className='text-white text-2xl font-medium '>{t("text37")}</h1></div>
            <div className="photo-button pt-[20px] pl-[50px]"><button className='text-white bg-[#B31918] w-[160px] h-[30px]'>{t("text36")}</button></div>
          </div>

          <div className="photo5">
          <div className="photo-text pt-[100px] pl-[50px]"><h1 className='text-white text-2xl font-medium '>{t("text39")}</h1></div>
            <div className="photo-button pt-[20px] pl-[50px]"><button className='text-white bg-[#B31918] w-[160px] h-[30px]'>{t("text36")}</button></div>
          </div>
   
       </div>
       </div>
 
        <div className="red-button flex justify-center pt-[30px] pb-[60px] dark:bg-[#B31918]"><button className='bg-[#B31918] text-white w-[180px] h-[30px] dark:border border-white' >{t("text40")}</button></div>


        <div className="all bg-[#edecec] h-[auto] w-[100%] dark:bg-[#B31918]">
        <div className="buttons flex justify-around gap-[300px] pt-[40px] flex-wrap">
        <div className="button-left flex justify-center"><h1 className='text-2xl font-medium dark:text-[white]'>{t("text41")}</h1></div>
        <div className="button-right flex justify-center"><img className='w-[70%]' src={buttons} alt="" /></div>
       </div>

        <div className="teachers flex justify-center flex-wrap gap-[10px] pt-[40px]">
          <div className="teacher1">
           <div className="teacher-text pt-[350px] pl-[20px]"><h1 className='text-[white] text-2xl font-medium'>{t("text42")}</h1></div>
           <div className="teacher-title pl-[20px] "><p className='text-[gray] text-lg font-medium'>{t("text43")}</p></div>
          </div>

          <div className="teacher2">
          <div className="teacher-text pt-[350px] pl-[20px]"><h1 className='text-[white] text-2xl font-medium'>{t("text44")}</h1></div>
           <div className="teacher-title pl-[20px] "><p className='text-[gray] text-lg font-medium'>{t("text45")}</p></div>
          </div>

          <div className="teacher3">
          <div className="teacher-text pt-[350px] pl-[20px]"><h1 className='text-[white] text-2xl font-medium'>{t("text46")}</h1></div>
           <div className="teacher-title pl-[20px] "><p className='text-[gray] text-lg font-medium'>{t("text47")}</p></div>
          </div>

        </div>


        <div className="buttons flex justify-around gap-[300px] pt-[80px] flex-wrap">
        <div className="button-left flex justify-center"><h1 className='text-2xl font-medium dark:text-[white]'>{t("text48")}</h1></div>
        <div className="button-right flex justify-center"><img className='w-[70%]' src={buttons} alt="" /></div>
       </div>

        <div className="mans flex justify-center flex-wrap gap-[15px] pt-[30px]">
          <div className="man">
            <div className="man-button flex justify-center pt-[330px]"><button className='bg-white w-[200px] h-[30px]' >{t("text49")}</button></div>
          </div>

          <div className="man">
            <div className="man-button flex justify-center pt-[330px]"><button className='bg-white w-[200px] h-[30px]' >{t("text49")}</button></div>
          </div>

          <div className="man">
            <div className="man-button flex justify-center pt-[330px]"><button className='bg-white w-[200px] h-[30px]' >{t("text49")}</button></div>
          </div>

          <div className="man">
            <div className="man-button flex justify-center pt-[330px]"><button className='bg-white w-[200px] h-[30px]' >{t("text49")}</button></div>
          </div>


        </div>

         <div className="aleksandr flex justify-center gap-[20px] pt-[120px]">
          <div className="left flex justify-center"><img className='w-[80%]' src={aleksandr} alt="" /></div>
          <div className="right">
            <div className="right-text flex justify-center"><h1 className='text-xl font-medium dark:text-[white]' >{t("text50")}</h1></div>
            <div className="right-title flex justify-center"><p className='text-[gray] '>{t("text51")}</p></div>
            <div className="right-titl flex justify-center pt-[40px]"><p className='w-[600px] text-base dark:text-white'>{t("text52")}</p></div>
            <div className="right-title flex justify-center pt-[30px]"><p className='text-[gray]'>{t("text53")}</p></div>
          </div>

         </div>

        </div>
        
        
        <div className="Firstcard flex justify-center flex-wrap gap-[10px] pt-[80px] dark:bg-[#b38787] pb-[50px]">
          <Firstcard img={lamp1} text={t("text54")} title={t("text55")} />
          <Firstcard img={lamp2} text={t("text56")} title={t("text57")} />
          <Firstcard img={lamp3} text={t("text58")} title={t("text59")} />
          <Firstcard img={lamp4} text={t("text60")} title={t("text61")} />
        </div>
          

          <div className="my-text pl-[160px] pt-[40px] dark:bg-[#B31918]"><h1 className="text-[#222222] text-2xl font-medium w-[500px] dark:text-white">{t("text62")}</h1></div>

         <div className="of dark:bg-[#B31918]">
         <div className="Secondcard flex justify-center flex-wrap gap-[100px] pt-[30px] ">
            <div className="second">
            <div className='secondcard flex justify-center'>
        <div className="second-card w-[270px] h-[240px] bg-[#e1e0e0]">
            <div className="second-image flex justify-center"><img className='w-[90%] pt-[80px]' src={grayImage1}alt="" /></div>
        </div>
        </div>
            </div>

            <div className="second">
            <div className='secondcard flex justify-center'>
        <div className="second-card w-[270px] h-[240px] bg-[#e1e0e0]">
            <div className="second-image flex justify-center"><img className='w-[60%] pt-[50px]' src={grayImage2}alt="" /></div>
        </div>
        </div>
            </div>

            <div className="second">
            <div className='secondcard flex justify-center'>
        <div className="second-card w-[270px] h-[240px] bg-[#e1e0e0]">
            <div className="second-image flex justify-center"><img className='w-[50%] pt-[50px]' src={grayImage3}alt="" /></div>
        </div>
        </div>
            </div>

            <div className="second">
            <div className='secondcard flex justify-center'>
        <div className="second-card w-[270px] h-[240px] bg-[#e1e0e0]">
            <div className="second-image flex justify-center"><img className='w-[90%] pt-[80px]' src={grayImage4}alt="" /></div>
        </div>
        </div>
            </div>

            <div className="second">
            <div className='secondcard flex justify-center'>
        <div className="second-card w-[270px] h-[240px] bg-[#e1e0e0]">
            <div className="second-image flex justify-center"><img className='w-[80%] pt-[80px]' src={grayImage5}alt="" /></div>
        </div>
        </div>
            </div>

            <div className="second">
            <div className='secondcard flex justify-center'>
        <div className="second-card w-[270px] h-[240px] bg-[#e1e0e0]">
            <div className="second-image flex justify-center"><img className='w-[90%] pt-[100px]' src={grayImage6}alt="" /></div>
        </div>
        </div>
            </div>

        
          </div>

          <div className="cont-white ">
          <div className="contact m-[auto] bg-[white] w-[750px] h-[280px] mt-[60px] mb-[40px] flex justify-center gap-[30px]">
            <div className="contact-left">
              <div className="cont-text flex justify-center"><h1 className="font-medium text-xl pt-[30px]">{t("text63")}</h1></div>
              <div className="contact-title flex justify-center"><h2 className="font-medium text-lg pt-[30px] ">{t("text64")}</h2></div>
              <div className="contatc-title flex justify-center"><p className='text-[gray] pt-[20px]  w-[350px]'>{t("text65")}</p></div>
            </div>

            <div className="contact-right">
              <form action="">
              <div className="inm pt-[30px] flex justify-center">  <input  className=' inp w-[320px] h-[35px] pl-[20px]' type="text"  name="" id="" placeholder={t("text66")} /></div>

                <div className="inputs flex justify-center gap-[20px] pt-[20px]">
                  <div className="inp-left"><input className='inp w-[150px] h-[35px] pl-[20px]' type="text" placeholder={t("text67")} name="" id="" /></div>
                  <div className="inp-left"><input className='inp w-[150px] h-[35px] pl-[20px]' type="text" placeholder={t("text68")} name="" id="" /></div>
                </div>

                <div className="how flex justify-center pt-[20px]">
                  <div className="how-left"><p className='text-sm w-[200px] text-[#3a3a3a] '>{t("text69")}</p></div>
                  <div className="how-right pt-[60px]"> <button className=" bg-[#B31918] w-[100px] h-[30px] text-[white] ">{t("text70")}</button></div>
                </div>

              </form>
            </div>

          </div>
          </div>

          <div className="maps bg-[#d5d4d4] w-[100%] h-[auto] dark:bg-[gray]">
           <div className="map flex justify-center gap-[200px] pt-[50px] pb-[50px]">
           <div className="map-left pt-[20px]">
            <div className="map-text flex justify-center"><h1 className=' text-xl font-medium'>{t("text71")}</h1></div>
            <div className="map-title flex justify-center pt-[10px]"><p className='text-[#363636]'>{t("text72")}</p></div>
            <div className="map-title flex justify-center pt-[10px]"><p  className='text-[#363636]'>{t("text73")}</p></div>
            <div className="map-title flex justify-center pt-[10px]"><p  className='text-[#363636]'>{t("text74")}</p></div>
           </div>
           <div className="map-right flex justify-center"><img className='w-[70%]' src={map} alt="" /></div>
           </div>

          </div>
         </div>

          
          <div className="footer bg-[black] w-[100%] h-[auto]">
            <div className="finish flex justify-center flex-wrap gap-[150px] pt-[60px]">
              <div className="finish-left text-white">
                <p className='pb-[25px]'>{t("text75")}</p>
                <p>{t("text76")}</p>
                <p>ОГРН: 1197746243441</p>
                <p>{t("text77")}</p>
              </div>

              <div className="finish-left text-white">
                <p>{t("text78")}</p>
                <p>{t("text79")}</p>
                <p>{t("text80")}</p>
                <p>{t("text81")}</p>
                <p>{t("text82")}</p>
              </div>

              

            </div>

            <div className="finish-text flex justify-center pt-[60px] pb-[20px]"><h1 className="text-white">{t("text83")}</h1></div>

          </div>






        

    </div>
    </div>
    
  );
}

export default App;
