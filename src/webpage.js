import React, { useState } from 'react'
import Navbarnav from './navbar'
import "./homepage.css"
import safeImage from "./img/safe.jpg"
import afterimg1 from "./img/hair1.jpg"
import afterimg2 from "./img/hair2.jpg"
import afterimg3 from "./img/hair3.jpg"
import person from "./img/person2.jpg"
import google from "./img/google-icon.webp"
import question1 from "./img/que.jpeg";
import Accordion from 'react-bootstrap/Accordion';
import Footer from './footer'


function Webpage() {

    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
      setShowMore(!showMore);
    };
  
    const [showMore1, setShowMore1] = useState(false);
  
    const handleToggle1 = () => {
      setShowMore1(!showMore1);
    };
  
    const [showMore2, setShowMore2] = useState(false);
  
    const handleToggle2 = () => {
      setShowMore2(!showMore2);
    };
  
    const [showMore3, setShowMore3] = useState(false);
  
    const handleToggle3 = () => {
      setShowMore3(!showMore3);
    };
  
    const [showMore4, setShowMore4] = useState(false);
  
    const handleToggle4 = () => {
      setShowMore4(!showMore4);
    };
    const [showMore5, setShowMore5] = useState(false);
  
    const handleToggle5 = () => {
      setShowMore5(!showMore5);
    };
  
  return (
    <>
    
    <Navbarnav/>

    <div class="container-fluid" style={{marginTop:'130px'}} >
<div class="container-fluid" >

<div class="container-fluid w-100">
<div class="row">
  <div class="col-md-12 ">
    <div class="container" >
 <h3 class="flex-item slideUp" id="para_1">Hair Transplant that look completely natural,<br/> just like real hair</h3>
 <div class="container-fluid ">     
  
  <button type="button" class="btn btn-light" id="button-2">I want to know the cost</button>
  
 </div>
 <img src={safeImage} class="flex-item slideUp" alt="Safe procedure" id="safe_img" style={{height: '45%', width:'42%',marginLeft:'60%', marginTop:'-230px'}}/>    
  
      
  </div>
  </div>
  </div>
  </div>

</div>
</div>


<br/><br/>

<div class="container-fluid text-center">
  
  <h3 class="natural">Natural results with our Nano FUE Transplant</h3>      

</div><br/><br/>


<div class="container text-center">
<div class="row">
<div class="col-md-4">
  <div class="thumbnail" id='image'>
    
      <img src={afterimg1} alt=""/>
      <div class="caption">
      <h3 >Stage 2 baldness </h3>
      <h5 >2210 grafts <br/>After 6 months </h5>
        
      </div>
    
  </div>
</div>
<div class="col-md-4">
  <div class="thumbnail" id='image'>
    
      <img src={afterimg2} alt="" width={400}/>
      <div class="caption">
      <h3 >Stage 3 baldness </h3>
      <h5 >3420 grafts <br/>After 7 months </h5>
      </div>
    
  </div>
</div>
<div class="col-md-4">
  <div class="thumbnail" id='image'>
    
      <img src={afterimg3} alt="" width={400}/>
      <div class="caption">
      <h3 >Stage 4 baldness </h3>
                  <h5 >4507 grafts <br/> After 9 months </h5>
      </div>
    
  </div>
</div>
</div>
</div><br/><br/>


<div class="container d-flex justify-content-center">

<button type="button" class="btn btn-light" id="button-2">Take Hair Test</button>
</div>
<br/>





<br/><br/>
<div class="container-fluid">
<div class="container-fluid reveal">
<div class="container bg-3 text-center"> 
<h3 class="natural_2">How is it possible for us?</h3> <br/><br/>

{/* <h3 class="margin">How is it possible for us?</h3><br/> */}
          
<div class="row">
  <div class="col-sm-4 shadow p-4 mb-4 bg-white border border-success rounded-circle" id="circle_content">
  <h2>Nano FUE Technique</h2>
    <p>Our advanced nano fue instruments are nearly 50% smaller than standard ones,
              allowing us to make extremely precise incisions, resulting in exceptionally natural and artistic hairlines.</p>
    {/* <img src="birds1.jpg" class="img-responsive margin" style={{width:'100%'}} alt=""/> */}
  </div>
  <div class="col-sm-4 shadow p-4 mb-4 bg-white border border-success rounded-circle"  id="circle_content"> 
  <h2>Crafted specially for you</h2>

    <p>We understand the uniqueness of each indivudual’s face shape and hair
      type. so, our doctor designs a personalized hairline tailored specifically to suit you,ensuring remarkablly
      natural apperance.</p>
    {/* <img src="birds2.jpg" class="img-responsive margin" style={{width:'100%'}} alt=""/> */}
  </div>
  <div class="col-sm-4 shadow p-4 mb-4 bg-white border border-success rounded-circle"  id="circle_content"> 
  <h2>Expert surgical team</h2>
  <p> our team is highly skilled and experienced,especially in using Nano
      instruments,thanks to years of training and treating countless patients, enabling us to consistently
      achieve excellent results</p>
    {/* <img src="birds3.jpg" class="img-responsive margin" style={{width:'100%'}} alt=""/> */}
  </div>
</div>
<br/>
</div>
</div>

  
<br/>
</div>
<br/><br/>






{/* ---------review-------------- */}

<br/>

<div id="carouselExampleControls" class="carousel slide shadow-sm  bg-white" data-bs-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active">
  <div class="container ">
<div id="pricing" class="container-fluid">

<div class="row slideanim">
  <div class="col-sm-4 col-xs-12">
    <div class="panel panel-default" id="review" >
      
      
    <div class="card-body thumbnail  shadow-none p-4 mb-4 bg-light border border-warning p-4">
    <img src={person} alt="" width={330} height={200}/>

      <h5 class="card-title mt-4"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></h5>
      <br/> <p class="card-text">Thank you very much for the wonderful job that you did for me.I think sometimes your work goes unnoticed.In spite &nbsp;&nbsp;
      <span style={{ display: !showMore ? 'inline' : 'none' }} id="dots">........</span>
      <span style={{ display: showMore ? 'inline' : 'none' }} id="more">  of the fact that you do charge a fee for your services, I think that it is nice to give a genuine and warm thank you. I am sure the surgery will be a success and I do appreciate all of your consultation and words of wisdom along the way.Again, thank you for everything.Thank You!</span></p>
      <button onClick={handleToggle} id="myBtn">{showMore ? 'Show less' : 'Read more'}</button>
      <p class="card-text"><small class="text-body-secondary"><h4> Gopinath</h4>
        <h5>Software engineer,
        Chennai</h5></small></p>
      <div class="container w-50" id="google">

      <img src={google} height={30} width={30} alt=''/>
      <p>Posted on<br/> Google</p>
      </div>
    </div>
  </div>
  
  </div>     
  <div class="col-sm-4 col-xs-12">
    <div class="panel panel-default" id="review">
      
      
    <div class="card-body thumbnail shadow-none p-4 mb-4 bg-light border border-warning">
    <img src={person} alt="" width={330} height={200}/>

      <h5 class="card-title mt-4"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></h5>
      <br/> <p class="card-text">Things are going well. Got the stitches out yesterday and it is healing nicely. No pain at all, no swelling,and the best part &nbsp;&nbsp;
      <span style={{ display: !showMore1 ? 'inline' : 'none' }} id="dots">........</span>
      <span style={{ display: showMore1 ? 'inline' : 'none' }} id="more">  is my worry lines and forehead wrinkles are almost gone. I’m sure they’ll be back but for now, I’m going with it, I can’t say enough about my whole experience with you all. The whole staff was so gracious and proficient and caring and they made me feel very comfortable. The best!!!!</span></p>
      <button onClick={handleToggle1} id="myBtn">{showMore1 ? 'Show less' : 'Read more'}</button>
      <p class="card-text"><small class="text-body-secondary"><h4> Gopinath</h4>
        <h5>Software engineer,
        Chennai</h5></small></p>
      <div class="container w-50" id="google">

      <img src={google} height={30} width={30} alt=''/>
    
      <p>Posted on<br/> Google</p>

      </div>

    </div>
  </div>
</div>

        
     
  <div class="col-sm-4 col-xs-12" >
    <div class="panel panel-default" id="review">
      <div class="card-body thumbnail shadow-none p-4 mb-4 bg-light border border-warning ">
    <img src={person} alt="" width={330} height={200}/>

      <h5 class="card-title mt-4"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></h5>
      <br/><p class="card-text">I must thank you from the bottom of my heart for the great job you have done on me.
       My results of Hair Transplant have been&nbsp;&nbsp;
       <span style={{ display: !showMore2 ? 'inline' : 'none' }} id="dots">........</span>
      <span style={{ display: showMore2 ? 'inline' : 'none' }} id="more">fantastic, and everyone who is meeting me after a few months are surprised to see the change in my face. It has brought so much of confidence in my life, and I am a changed personality.
I cannot express words of gratitude, and will be ever obliged of you.</span></p>
<button onClick={handleToggle2} id="myBtn">{showMore2 ? 'Show less' : 'Read more'}</button>

<p class="card-text"><small class="text-body-secondary"><h4> Gopinath</h4>
        <h5>Software engineer,
        Chennai</h5></small></p>
      <div class="container w-50" id="google">

      <img src={google} height={30} width={30} alt=''/>
    
      <p>Posted on<br/> Google</p>

      </div>

    </div>
  </div>
  </div>
</div>
      </div>
      
    </div>      
  </div>    


{/* -----------slide2------------ */}


  
  <div class="carousel-item">
  <div class="container">
<div id="pricing" class="container-fluid">

<div class="row slideanim">
  <div class="col-sm-4 col-xs-12">
    <div class="panel" id="review">
      
      

    <div class="card-body thumbnail shadow-none p-4 mb-4 bg-light border border-warning ">
    <img src={person} alt="" width={330} height={200}/>

      <h5 class="card-title mt-4"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></h5>
      <br/><p class="card-text">I must thank you from the bottom of my heart for the great job you have done on me. My results of Hair Transplant have 
      <span style={{ display: !showMore3 ? 'inline' : 'none' }} id="dots">........</span>
      <span style={{ display: showMore3 ? 'inline' : 'none' }} id="more">been fantastic, and everyone who is meeting me after a few months are surprised to see the change in my face. It has brought so much of confidence in my life, and I am a changed personality.
I cannot express words of gratitude, and will be ever obliged of you.</span></p>
<button onClick={handleToggle3} id="myBtn">{showMore3 ? 'Show less' : 'Read more'}</button>

<p class="card-text"><small class="text-body-secondary"><h4> Gopinath</h4>
        <h5>Software engineer,
        Chennai</h5></small></p>
      
      <div class="container w-50" id="google">

      <img src={google} height={30} width={30} alt=''/>
    
      <p>Posted on<br/> Google</p>

      </div>
     
    </div>
      
    </div>      
  </div>     
  <div class="col-sm-4 col-xs-12">
    <div class="panel panel-default" id="review" >
      
    <div class="card-body thumbnail shadow-none p-4 mb-4 bg-light border border-warning">
    <img src={person} alt="" width={330} height={200}/>

      <h5 class="card-title mt-4"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></h5>
      <br/><p class="card-text">I’ve been using the Minoxidil for about 6 months. I have noticed and can feel thicker, fuller hair on the top of my head! I also 
      <span style={{ display: !showMore4 ? 'inline' : 'none' }} id="dots">........</span>
      <span style={{ display: showMore4 ? 'inline' : 'none' }} id="more">have a huge difference in the amount of hair that comes out while washing my scalp in the shower. It’s so easy to use and has showed great results. I have standard hair loss on the top of my head and the Solution has managed to lessen the loss as well as thicken my hair.</span></p>
      <button onClick={handleToggle4} id="myBtn">{showMore4 ? 'Show less' : 'Read more'}</button>
      <p class="card-text"><small class="text-body-secondary"><h4> Gopinath</h4>
        <h5>Software engineer,
        Chennai</h5></small></p>
      <div class="container w-50" id="google">

      <img src={google} height={30} width={30} alt=''/>
    
      <p>Posted on<br/> Google</p>

      </div>

    </div>
      
    </div>      
  </div>       
  <div class="col-sm-4 col-xs-12" >
    <div class="panel panel-default" id="review">
      
    <div class="card-body thumbnail shadow-none p-4 mb-4 bg-light border border-warning">
    <img src={person} alt="" width={330} height={200}/>

      <h5 class="card-title mt-4"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></h5>
      <br/><p class="card-text">I’ve been using the Minoxidil for about 6 months. I have noticed and can feel thicker, fuller hair on the top of my head! I also have
      <span style={{ display: !showMore5 ? 'inline' : 'none' }} id="dots">........</span>
      <span style={{ display: showMore5 ? 'inline' : 'none' }} id="more"> a  huge difference in the amount of hair that comes out while washing my scalp in the shower.  It’s so easy to use and has showed great results. I have standard hair loss on the top of my head and the Solution has managed to lessen the loss as well as thicken my hair.</span></p>
      <button onClick={handleToggle5} id="myBtn">{showMore5 ? 'Show less' : 'Read more'}</button>
      <p class="card-text"><small class="text-body-secondary"><h4> Gopinath</h4>
        <h5>Software engineer,
        Chennai</h5></small></p>
      
      <div class="container w-50" id="google">

      <img src={google} height={30} width={30} alt=''/>
    
      <p>Posted on<br/> Google</p>

      </div>
      

    </div>
      
    </div>      
  </div>    
</div>
</div>
</div>


  </div>



<button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true" ></span>
  <span class=""><i class="fa-solid fa-chevron-left"></i></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class=""><i class="fa-solid fa-chevron-right"></i></span>
</button>


  </div>

</div>

<br/><br/>


{/* ------------questions--------- */}



<div class="container border-0" id=" question">
<Accordion>
    <Accordion.Item eventKey="0">
      <Accordion.Header>
        <img src={question1} height={25} width={25} alt='' id="question"/>
           &nbsp;<h4 class="mt-2"> Frequently Asked Questions</h4>
        </Accordion.Header>
      <Accordion.Body>
        <ul class="list-group border-0 mt-5">
        <li class="list-group-item border-0" style={{marginTop:"-25px"}}><h4>WHAT TYPE OF MAINTENANCE IS REQUIRED AFTER A HAIR TRANSPLANT?</h4>
        <p>After a hair transplant, you should take special care of your scalp in the days and weeks following the procedure. You should keep the area around the grafts clean and dry, avoid vigorous activities or exercise and exposure to direct sunlight, and be gentle and careful when washing, styling, and brushing your hair. Additionally, you should avoid any lotions, creams, or oils that may be irritating to the new grafts. Always reach out to your doctor if you have any questions or concerns.</p></li>
       
        <li class="list-group-item border-0"><h4>HOW LONG AM I REQUIRED TO SLEEP IN A HALF SEATED POSITION?</h4>
        <p>Only for the first 2-3 nights, as well as wearing your bandage and then you can sleep normally. Can clarify with the doctor when you come for the first follow up.</p>
</li>

        <li class="list-group-item border-0"><h4>WHEN CAN I START WEARING HATS AGAIN?</h4>
        <p>Typically, you should wait at least two weeks after your hair transplant before you start wearing hats again. You should also be sure to not wear hats that fit too tightly as this may cause too much pressure on the newly transplanted hair follicles.</p>
       </li>
      
       <li class="list-group-item border-0"><h4>HOW OFTEN SHOULD I COME FOR FOLLOW-UP APPOINTMENTS?</h4>
       <p>Follow-up visits should typically be scheduled with the doctor the next day or the day after for a lymphatic massage to reduce swelling and speed up the healing. Additional follow-up appointments may be required at regular intervals (e.g., every 1-3 months) for the first year or two after the transplant.</p>
</li>

        <li class="list-group-item border-0"><h4>WILL THE TRANSPLANTED HAIR FALL OUT AFTER SOME TIME?</h4>
        <p>After a month you will experience something called hair shock where some of the hair will fall off to start a new cycle and start growing back. Transplanted hair should grow for a lifetime, although it will require maintenance and care like any other hair.</p>
</li>

        <li class="list-group-item border-0"><h4>WHEN CAN I RESUME MY ACTIVITIES?</h4>
        <p>It's important to avoid any exercise or physical activity that could increase blood pressure and cause bleeding around the hair follicles. Most people can resume light exercise after a week, but it's best to wait 2-3 weeks before engaging in more intense workouts. You should also avoid swimming for at least two weeks after the procedure to allow your scalp time to heal. Chlorine and other chemicals in the water can irritate your scalp and increase the risk of infection.</p>
</li>

        <li class="list-group-item border-0"><h4>ARE THERE ANY LIMITATIONS TO MY DAILY ACTIVITIES AFTER THE PROCEDURE?</h4>
        <p>It is important that you follow your surgeon's directions closely after the procedure for a successful hair transplant. For the first week you should avoid strenuous physical activity, swimming, saunas, direct sun exposure and dust. After the first week, light physical activity and normal day- to-day activities can generally be resumed. However, any additional strenuous activity or exposing the area to sun, sweat or dust should be avoided.</p>
</li>

        <li class="list-group-item border-0"><h4>HOW LONG DOES IT TAKE FOR THE HAIR TRANSPLANT TO TAKE EFFECT?</h4>
        <p>The results of a hair transplant typically take effect within six to nine months. Your newly transplanted hair will start to thicken and grow after three to four months and the effect should be more visible after six to nine months.</p>
</li>

<li class="list-group-item border-0"><h4>WHEN CAN I START WASHING MY HAIR LIKE NORMAL?</h4>
      <p>Wait at least one week before washing your hair after a hair transplant. Avoid using hot water and vigorous scrubbing when washing your scalp. You can take a shower the same day after the procedure but do not wash or scrub your scalp. You can pour some soapy water (using shampoo we provide in your post-care kit) using the cup on your scalp, but DO NOT touch it the first week after your procedure.</p>
        </li>
        
      </ul>
      
      </Accordion.Body>
     
    </Accordion.Item>
    
  </Accordion>
</div>

<br/><br></br>



<br/><br/>

<a
      href="https:Wa.me://+919834512885"
      class="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fa-brands fa-whatsapp whatsapp-icon"></i>
    </a>
    <Footer/>
    </>
  )
}

export default Webpage