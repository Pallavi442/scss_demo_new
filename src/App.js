import logo from './logo.svg';
import './App.scss';
import create from './assets/images/illustration-create-post.png';
import girl from './assets/images/illustration-ai-content.png';
import star from './assets/images/star.png';
import yourCo from './assets/images/yourCo.png';
import calender from './assets/images/calender.png';
import growth from './assets/images/growth.png';
import growth1 from './assets/images/growth1.png';
import person from './assets/images/person.png'


function App() {
  const text='>'
  return (
    <div className="app-container">
      <div className='main-container1'>
      <div className='main-div-1'>
       <p>Create and <br></br>schedule <br></br>content <br></br><span><i>quicker.</i></span></p>
       <img src={create}/>
      </div>
      <div className='main-div-2'>
        <p>Write your <br></br>content <br></br>using AI.</p>
        <img src={girl}/>
      </div>
      </div>

      <div className='main-container2'>
        <div className='sub-container1'>
          <div className='social-container'>
            <div className='social-media-container'>
              <h3>
              Social Media 10x <br></br> <i>Faster</i> with AI
              </h3>
              <img src={star}/>
              <p>Over 4,000 5-star reviews</p>
            </div>
            <div className='manage-media-container'>
              <div className='maintain-container-1'>
                <img src={yourCo}/>
                <p>  Manage <br></br>multiple <b></b>accounts and platforms.</p>
              </div>
              <div className='maintain-container-2'>
                <p>Maintain a<br></br> consistent <br></br>posting <br></br>schedule.</p>
                <img src={calender}/>
              </div>
            </div>

          </div>
          <div className='schedule-container'>
            <h3>Schedule to <br></br> social media.</h3>
            <img src={growth1}/>
            <p>Optimize post timings <br></br>to publish content <br>
            </br>at the perfect time<br></br> for your audience.</p>
          </div>
    </div>



        <div className='sub-container2'>
          <div className='sub-container2-div'>
            <div className='sub-container2-div1'>
            <h3>{text}56% </h3>
            <p>faster audience growth</p>
            <img src={person}/>
            </div>
            <div className='sub-container2-div2'>
              <img src={growth}/>
              <h3 style={{color:'white'}}>  Grow followers<br></br> with non-stop<br></br> content.</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
