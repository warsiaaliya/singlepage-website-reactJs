import React from 'react';
import './index.css';


const Home =()=>{
	
	const bg={background:'rgba(0,0,0,0.7)url(/images/bg_img.jpg)', backgroundSize:'cover'}

	return(
	<>  

		<nav className="navbar background h-nav"   style={bg}>
          <ul className="nav-list v-class">
            <div className="logo"><img src="images/logo1.png"  alt="logo" width="70px" height="70px"/></div>
            <li><a href="#home">home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#services">services</a></li>
            <li><a href="#contact">contact us</a></li>
          </ul>

            <div className="rightnav v-class">
            <input type="text" name="search" id="search"></input>
            <button className="btn btn-sm">search</button>

            </div>

            <div className="burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            </div>
        </nav>

        <section className="background firstSection" id="home" style={bg}>

        <div className="box-main">

            <div className="firstHalf">
                <p className="text-big">The Future of Education is here</p>
                <p className="text-small">In this world of 7 billion people we need to supply education as vast as possible.This is the future of an educated world and we are proud to say that the future of education is here.
                </p>

                <div className="buttons">
                    <button className="btn btn-sm">Subscribe</button>
                    <button className="btn btn-sm">Watch Video</button>
                </div>
            </div>

            <div className="secondHalf">
                <img src="images/logo1.png" alt="laptop image" width="80%"></img>
            </div>

        </div>

        </section>


        <section id="about" className="section">
   
        <div className="paras">
            <p className="sectionTag text-big">All you need in new Era of Information technology is here.
            </p>
            <p className="sectionSubTag text-small">Education is the process of facilitating learning, or the acquisition of knowledge, 
            skills, values, morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion
            and directed research. Education frequently takes place under the guidance of educators, however learners can also
            educate themselves. Education can take place in formal or informal settings and any experience that has a formative
            effect on the way one thinks, feels, or acts may be considered educational.Formal education is commonly divided 
            formally into such stages as preschool or kindergarten, primary school, secondary school and then college, university,
            prenticeship.

 
                
            </p>
        </div>

        <div className="thumbnail">
            <img src="https://source.unsplash.com/900x900/?coding,apple" alt="laptop image" classNmae="imgFluid"/>
        </div>

        </section>


        <hr/>

        <section className="section section-left" >
   
        <div className="paras">
            <p className="sectionTag text-big">Transforming Education.
            </p>
            <p className="sectionSubTag text-small">Education, discipline that is concerned with methods of teaching and
            learning in schools or school-like environments as opposed to various nonformal and informal means of 
            socialization (e.g., rural development projects and education through parent-child relationships).Education
            can be thought of as the transmission of the values and accumulated knowledge of a society.
            In this sense, it is equivalent to what social scientists term socialization or enculturation.
            Children—whether conceived among New Guinea tribespeople, the Renaissance Florentines, or the middle 
            classes of Manhattan—are born without culture.
            
            </p>
        </div>

        <div className="thumbnail">
            <img src="https://source.unsplash.com/900x900/?coding,apple,html" alt="laptop image" class="imgFluid"/>
        </div>

        </section>


        <hr/>



        <section id="services" className="section">
   
        <div className="paras">
            <p className="sectionTag text-big">Lets grow together.
            </p>
            <p className="sectionSubTag text-small">One of the most oft-used terms after the pandemic is the term “new normal.” 
            The new normal in education is the increased use of online learning tools. The COVID-19 pandemic has triggered 
            new ways of learning. All around the world, educational institutions are looking toward online learning platforms
            to continue with the process of educating students. The new normal now is a transformed concept of education 
            with online learning at the core of this transformation. Today, digital learning has emerged as a necessary 
            resource for students and schools all over the world. For many educational institutes, this is an entirely 
            new way of education that they have had to adopt. Online learning is now applicable not just to learn academics 
            but it also extends to learning extracurricular activities for students as well. In recent months, the demand 
            for online learning has risen significantly, and it will continue doing so in the future.
               
            </p>
        </div>

        <div className="thumbnail">
            <img src="https://source.unsplash.com/900x900/?javascripy,apple" alt="laptop image" class="imgFluid"/>
        </div>

        </section>



        <section id="contact" className="contact">

        <h2 class="textcenter">Contact Us</h2>

        <div className="form">
            <input className="form-input"  type="text" name="name" id="name" placeholder="Enter Your Name"></input>
            <input className="form-input" type="text" name="name" id="name" placeholder="Enter Your Phone"></input>
            <input className="form-input" type="Email" name="name" id="name" placeholder="Enter Your Email"></input>
            <textarea className="form-input" name="text" id="text" cols="30" rows="7" placeholder="Elaborate your concern"></textarea>
            <button className="btn btn-dark btn-sm">Submit</button>
            
        </div>

        </section>

        <footer className="background" >
        <p className="text-footer">
            copywrite &copy; 2027 - All right reserved 
        </p>
        </footer>

	</>

	);
}

export default Home;