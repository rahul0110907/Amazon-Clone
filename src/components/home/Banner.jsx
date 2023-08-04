import React, { useState } from 'react'
import Slider from "react-slick";
import bannerImgOne from '../../assets/bannerImgOne.jpg'
import bannerImgTwo from '../../assets/bannerImgTwo.jpg'
import bannerImgThree from '../../assets/bannerImgThree.jpg'
import bannerImgFour from '../../assets/bannerImgFour.jpg'
import bannerImgFive from '../../assets/bannerImgFive (1).jpg'


const Banner = () => {

    //for banner carousal we use react-slick
    const [dotActive, setDocActive] = useState(0);
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      beforeChange: (prev, next) => {
        setDocActive(next);
      },
      appendDots: (dots) => (
        <div
          style={{
            position: "absolute",
            top: "70%",
            left: "50%",
            transform: "translate(-50%, 0)",
            width: "210px",
          }}
        >
          <ul
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {dots}
          </ul>
        </div>
      ),
      customPaging: (i) => (
        <div
          style={
            i === dotActive
              ? {
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  background: "#131921",
                  padding: "8px 0",
                  cursor: "pointer",
                  border: "1px solid #f3a847",
                }
              : {
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#232F3E",
                  color: "white",
                  padding: "8px 0",
                  cursor: "pointer",
                  border: "1px solid white",
                }
          }
        >
          {i + 1}
        </div>
      ),
      responsive: [
        {
          breakpoint: 500,
          settings: {
            dots: true,
            appendDots: (dots) => (
              <div
                style={{
                  position: "absolute",
                  top: "60%",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                  width: "150px",
                }}
              >
                <ul
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  {dots}{" "}
                </ul>
              </div>
            ),
            customPaging: (i) => (
              <div
                style={
                  i === dotActive
                    ? {
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        background: "#131921",
                        padding: "8px 0",
                        cursor: "pointer",
                        border: "1px solid #f3a847",
                      }
                    : {
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#232F3E",
                        color: "white",
                        padding: "8px 0",
                        cursor: "pointer",
                        border: "1px solid white",
                      }
                }
              >
                {i + 1}
              </div>
            ),
          },
        },
      ],
    };
  return (
    <div className='w-full' >
    <div className='w-full h-full relative'>
        
    <Slider {...settings}>
      <div>
    <img src={bannerImgOne} alt='one'/>
    </div>
    <div>
    <img src={bannerImgTwo} alt='two'/>
    </div>
  <div>
  <img src={bannerImgThree} alt='three'/>
  </div>
   <div>
   <img src={bannerImgFour} alt='four'/>
   </div>
   <div>

   <img src={bannerImgFive} alt='five'/>
   </div>
  
     
    </Slider>
    </div>
  </div>
  )
}

export default Banner