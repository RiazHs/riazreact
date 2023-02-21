import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>riazhs - Is Fast Riaz Is Easy</title>
        <meta property="og:title" content="riazhs - Is Fast Riaz Is Easy" />
      </Helmet>
      <div className="home-container1">
        <h1 data-aos="fade-right" className="threed">
          lets see
        </h1>
        <h1 data-aos="fade-right" className="home-text1 A">
          lets see
        </h1>
        <h1 data-aos="fade-up-left" className="b">
          Riaz vai Nai
        </h1>
        <h1 data-aos="riaz" className="threed">
          lets see
        </h1>
        <div>
          <DangerousHTML
            html={`

<script type="text/javascript">
  VanillaTilt.init(document.querySelectorAll(".threed"), {
    max: 15,
    speed: 400,
    scale: 1.05,
    glare: true
  });
</script>


<style>
.A[data-aos="fade-right"].aos-animate{
position:relative;

}
.A[data-aos="fade-right"].aos-animate::before{
 	position: absolute;
   	content: '';
   	width: 100%;
   	height: 100%;
   	top: 0;
   	left:0;
   	background-color:blue;
   	z-index: 9;
   	animation: showText 02.96s cubic-bezier(1,0,0,1) 0.18s forwards;
   	transform-origin: 50% 100%;
}


 @keyframes showText {
   	0% {
   		transform: scaleX(1)
   	}
   	100% {
   		transform: scaleX(0)
   	}
   }
  

[data-aos="riaz"] {
 clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);

  
}
[data-aos="riaz"].aos-animate {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

}



















</style>




<script>
AOS.init({
 duration: 1200
});



</script>`}
          ></DangerousHTML>
        </div>
      </div>
    </div>
  )
}

export default Home
