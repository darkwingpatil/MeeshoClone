import React from 'react'
import data from "../db.json"
import{Grid} from "./styled"
import { v4 as uuidv4 } from 'uuid';
import { useSelector,useDispatch } from 'react-redux'
import {currcart} from "../Redux/Cart/Action"
import { useNavigate } from 'react-router-dom'
import{Profile,Profilebutton,InputsSign,Alldone,Childdel,Chilrating,Aftersub,AfterCont} from "./styled"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import{isAuth} from "../Redux/Profile/Action"
import{showlogin} from "../Redux/Profile/Action"
import styles from "./Landing.module.css"
import List1 from "./Signup/Footer"


export const Productdetail = () => {
const dispatch=useDispatch()
const state=useSelector((state)=>state.cart)
console.log(state,"inpdp")
console.log(data,"inpdp now seeing")
const clickeddata=(ele)=>{
    dispatch(currcart(ele))
}
const{auth,number,showlog}=useSelector((state)=>state.auth)
const navigate=useNavigate()
const [showsign,setsign]=React.useState(false)
  return (
      <Alldone>

<Profile see={showlog} onMouseLeave={()=>dispatch(showlogin(false))} className="hogya">
          <h3 style={{textAlign:"left",marginLeft:"5px"}}>Hello User</h3>
          <p style={{textAlign:"left",marginLeft:"5px"}}>{auth?`+91 ${number}`:"To access your Meesho account"}</p>
          {
            auth?
            <div></div>
            :
            <Profilebutton onClick={()=>{
              navigate("/login")
            }}>Sign Up</Profilebutton>
          }
          
          <hr style={{width:"90%"}}/>
          <InputsSign><ShoppingBagIcon/>
          <h3 style={{marginTop:"0%"}}>My Orders</h3>
          </InputsSign>
          {
            auth?
            <Profilebutton onClick={()=>dispatch(isAuth(false))}>Logout</Profilebutton>
            :
            <div></div>
          }
        </Profile>

        <>
    {/* box one */}
    <div className={styles.l_box_one}>
        <div className={styles.l_left_box}>
          <h1 className={styles.l_heading_one}>Lowest Prices</h1>
          <h1 className={styles.l_heading_one}>Best Quality Shopping</h1>
          <p className={styles.l_heading_two}>30+ Crores worth Rewards | 500 Winners every Hour</p>

          <div className={styles.l_Download_button}>
            <img src="https://images.meesho.com/images/pow/playstore-small-icon.webp" alt="" />
            <p className={styles.l_down_meesh}>Download the Meesho App</p>
          </div>
        </div>

        <div className={styles.l_right_box}>
            <img 
            className={styles.l_right_box_img}
            src="https://images.meesho.com/images/marketing/1651230340362.webp" alt="" />
        </div>
    </div>
    
    {/* line cat */}
    <div className={styles.l_cat_line}>
      <div className={styles.l_cat0}></div>
      <div><h2 className={styles.l_cat1}>Top Categories to choose from</h2></div>
      <div className={styles.l_cat2}></div>
    </div>

    {/* box 2 begins */}
    <div className={styles.l_box_two}>

      <div className={styles.l_imgs_box2}>
        <div className={styles.b_two_img1}>
            <img src="https://images.meesho.com/images/marketing/1651230292618.webp"/>
        </div>

        <div className={styles.b_two_img2}>
            <img src="https://images.meesho.com/images/marketing/1651230282672.webp"/>
        </div>

        <div className={styles.b_two_img3}>
            <img src="https://images.meesho.com/images/marketing/1651230271787.webp"/>
        </div>
      </div>
      
    </div>

    {/* essentials box */}


    {/* reseller */}
    <div className={styles.l_box_four}>

      <div className={styles.l_b4_sub_box}>
        <p className={styles.box4_head1}>Become a Reseller and</p>
        <p className={styles.box4_head2}>Start your Online Business</p>
        <p className={styles.box4_head3}>with Zero Investment</p>

        <div className={styles.box4_download_imgs}>
          <img
          className={styles.box4_d_img1}
            src="https://images.meesho.com/images/pow/playstore-icon.webp" alt="" />

          <img
          className={styles.box4_d_img1}
            src="https://images.meesho.com/images/pow/appstore-icon.webp" alt="" />
        </div>
      </div>

    </div>
    </>
    <Aftersub >Products for you</Aftersub>
      <Grid onMouseEnter={()=>dispatch(showlogin(false))} >
      
        {
            data.mensTshirt.map((ele)=>{
                return(
                    <AfterCont key={uuidv4()} onClick={()=>navigate(`/men/mensTshirt/${ele.id}`)}>
                        <img src={ele.imgUrl}/>
                        <p style={{color:"#b7a499"}}>{ele.type}</p>
                        <div style={{display:"flex",justifyContent:"center",gap:"5px"}}>
                        <h3>₹{ele.rate}</h3>
                        <p style={{color:"#b7a499"}}>onwards</p>
                        </div>
                        <Childdel><p>Free delivery</p></Childdel>
                        <div style={{display:"flex",justifyContent:"center",gap:"20px",margin:"5%"}}>
                        <Chilrating><p>{ele.rating}</p></Chilrating>
                        <div style={{marginTop:"5px"}}><p style={{color:"#b7a499"}}>{ele.review}</p></div>
                        </div>
                        {/* <button onClick={()=>clickeddata(ele)}>AddtoCart</button> */}
                    </AfterCont>
                )
            })
        }
                
    </Grid>
        <Grid onMouseEnter={()=>dispatch(showlogin(false))}>
        {
            data.jeans.map((ele)=>{
                return(
                    <AfterCont key={uuidv4()} onClick={()=>navigate(`/women/jeans/${ele.id}`)}>
                        <img src={ele.imgUrl}/>
                        <p style={{color:"#b7a499"}}>{ele.type}</p>
                        <div style={{display:"flex",justifyContent:"center",gap:"5px"}}>
                        <h3>₹{ele.rate}</h3>
                        <p style={{color:"#b7a499"}}>onwards</p>
                        </div>
                        <Childdel><p>Free delivery</p></Childdel>
                        <div style={{display:"flex",justifyContent:"center",gap:"20px",margin:"5%"}}>
                        <Chilrating><p>{ele.rating}</p></Chilrating>
                        <div style={{marginTop:"5px"}}><p style={{color:"#b7a499"}}>{ele.review}</p></div>
                        </div>
                        {/* <button onClick={()=>clickeddata(ele)}>AddtoCart</button> */}
                    </AfterCont>
                )
            })
        }
    </Grid>
    <Grid onMouseEnter={()=>dispatch(showlogin(false))}>
        {
            data.data.map((ele)=>{
                return(
                    <AfterCont key={uuidv4()}  onClick={()=>navigate(`/kids/data/${ele.id}`)}>
                        <img src={ele.imgUrl}/>
                        <p style={{color:"#b7a499"}} id="uu1">{ele.type}</p>
                        <div style={{display:"flex",justifyContent:"center",gap:"5px"}}>
                        <h3>₹{ele.rate}</h3>
                        <p style={{color:"#b7a499"}}>onwards</p>
                        </div>
                        <Childdel><p>Free delivery</p></Childdel>
                        <div style={{display:"flex",justifyContent:"center",gap:"20px",margin:"5%"}}>
                        <Chilrating><p>{ele.rating}</p></Chilrating>
                        <div style={{marginTop:"5px"}}><p style={{color:"#b7a499"}}>{ele.review}</p></div>
                        </div>
                        {/* <button onClick={()=>clickeddata(ele)}>AddtoCart</button> */}
                    </AfterCont>
                )
            })
        }
    </Grid>
    <List1/>
      </Alldone>
    
  )
}
