import React from 'react'
import styles from "../CSS/Landing.module.css"


export const LandingOffers = () => {
  return (
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
    <div className={styles.l_box_three}>

      <div className={styles.b_three_div_one}>
        <h1>Essentials</h1>
        <img src="https://images.meesho.com/images/marketing/1651230232416.webp" alt="" />
      </div>

      <div className={styles.b_three_div2}>
        <div className={styles.box_three_img1}>
          <img src="https://images.meesho.com/images/marketing/1651230112989.webp" alt="" />
        </div>

        <div className={styles.b_three_btn1}>
          <img src="https://images.meesho.com/images/marketing/1651230071039.webp" alt="" />
        </div>
      </div>

      <div className={styles.b_three_div3}>
        <div className={styles.box_three_img2}>
          <img src="https://images.meesho.com/images/marketing/1651230219898.webp" alt="" />
        </div>

        <div className={styles.b_three_btn2}>
          <img src="https://images.meesho.com/images/marketing/1651230198152.webp" alt="" />
        </div>
      </div>

      <div className={styles.b_three_div4}>
        <div className={styles.box_three_img3}>
          <img src="https://images.meesho.com/images/marketing/1651230181930.webp" alt="" />
        </div>

        <div className={styles.b_three_btn3}>
          <img src="https://images.meesho.com/images/marketing/1651230164934.webp" alt="" />
        </div>
      </div>

    </div>

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
  )
}
