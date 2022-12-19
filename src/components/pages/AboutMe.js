import React from 'react'; 
import '../../styles/AboutMe.css';
import myimage from '../../assets/images/charitha.jpg';
export default function AboutMe() {
  return (
    <div>
      <div>
        <img className="img-card"
          src={myimage}
          alt="myimage" ></img>

        <section>
          <div>
            <h2 className='head-1'>About Me</h2>
          </div>
          <br></br>
          <div className="text-1">
            <p> I am a kind and empathetic person who is very efficent and quick in my work.
              I always find ways to help others.
            </p>

            <p>
              With me learning to code I believe I can help more people around the world.
            </p>
            <p>
              In my free time I like to listen to music, sing, play with my dog, and write poetry.
            </p>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </section>
      </div>
    </div >

  )
}


