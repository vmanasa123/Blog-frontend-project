import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import "../Layout/layout.css"
import "../stylee/Subhead.css"
import Logo from "../Common/Logo/logo"
import NavBar from "../Common/Navbar/navbar"

function Food() {
  const navigate = useNavigate();
  const handleNavigation = (item, index) => {
    console.log(item);

    navigate(`/food/a/${index}`, { state: item });
  }

  const [Fooddata, setFooddata] = useState([])
  useEffect(() => {
    const url = "https://blog-backend-application.onrender.com/food"
    //const url="https://blog-backend-project-8uef.onrender.com/food"
    
    fetch(url).then(res => res.json())
      .then(res => { 
        setFooddata(res)
      })
  }, [])


  return (
    <>
      <Logo />
      <NavBar />
      <hr className="hrtag" />

      <div >
        <div className='Subhead'>Food<span className='unred'>_____</span>
          <span className='unred1'>_____</span><span className='topposts'>Top Posts</span>
        </div>

      </div>


      <div className='container'>
        <div className='child1'>
          <div className='one'>
            {Fooddata.slice(0, 7).map((item, index) => {
              return (
                <div className="one" key={index}>
                  <img className="img-size"
                    onClick={() => handleNavigation(item, index)} src={item.urlToImage} alt={"images"} />
                  <div className="content">
                    <h3 id="title">{item.title}</h3><br />
                    <p id="middle"> {item.content}</p>
                    <p id="last">{item.publishedAt}</p>
                  </div>
                </div>)
            })}

          </div>
          {/* <div className='two'>
            <img src={arrow.svg} alt={"down-arrow"}/>
            LOAD MORE
              </div> */}
        </div>

        <div className='child2'>
          <div className='a'>
            {Fooddata.slice(7, 8).map((item1, index1) => {
              return (
                <div className="a" key={index1}>
                  <img className="img-size1"
                    onClick={() => handleNavigation(item1, index1)}
                    src={item1.urlToImage} alt={"images"} />
                  <div className="content1">
                    <h3 id="title1">{item1.title}</h3><br />

                    <p id="last1">{item1.publishedAt}</p>
                  </div>
                  <div className="no1"><h1>1</h1></div>
                </div>)
            })}

          </div>


          <div className='b'>
            {Fooddata.slice(8, 11).map((item2, index2) => {
              return (
                <div className="b" key={index2}>
                  <img className="img-size2"
                    onClick={() => handleNavigation(item2, index2)}
                    src={item2.urlToImage} alt={"images"} />
                  <div className="content2">
                    <h3 id="title2">{item2.title}</h3><br />

                    <p id="last2">{item2.publishedAt}</p>
                  </div>
                  <div className="no2">
                    <h1>{index2 + 2}</h1>
                  </div>


                </div>)
            })}

          </div>
          <div className='c'>
            <p className="add">Advertisement</p>
          </div>

        </div>

      </div>

    </>
  )
}

export default Food;