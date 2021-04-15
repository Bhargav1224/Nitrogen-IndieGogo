import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
export const Dropdown=()=>{
    return(
        <div style={{marginBottom:'5px',borderTop:'1px solid black'}}>
          <div className={styles.drop1}>
              <div>
                  <p className={styles.p21}>Explore All Project</p>
                  <img src="https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_2.0,f_auto/homepage/crowdfunding-bg-desktop-sm.jpg" alt="blank" className={styles.img1} />
              </div>
              <div>
              <p className={styles.p21}>Our top 10 Finds</p>
              <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1618336553/dx7ssf5krfnevw6q8eij.jpg" alt="blank" className={styles.img2}/>
              </div>
              <div>
                  <p className={styles.p21}>Team favourite</p>
                  <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1618332231/kf6uqtwoyhrzyuadrjjd.jpg" alt="blank" className={styles.img3}/>
              </div>
              <div>
                  <p className={styles.p21}>InDemand Stars</p>
                  <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1610645828/srw2ffyyagzenfu6pznr.png" alt="blank" className={styles.img4}/>
              </div>
              <div>
                  <p className={styles.p21}>Join the Convo</p>
                  <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1597692648/t5nvsqhmxvwgk8cgrtac.png" alt="blank" className={styles.img5}/>
              </div>
          </div>
          <div className={styles.drop2}>
              <div className={styles.row1}>
                  <p className={styles.row1p}>TECH AND INNOVATION</p>
                  <div className={styles.col11}>
                    <NavLink to='/' className={styles.customlink}>Audio</NavLink><br/>
                    <NavLink to='/' className={styles.customlink}>Camera Gear</NavLink><br/>
                    <NavLink to='/' className={styles.customlink}>Education</NavLink><br/>
                    <NavLink to='/' className={styles.customlink}>Energy and Tech</NavLink><br/>
                    <NavLink to='/' className={styles.customlink}>Fashion & Wearbles</NavLink><br/>
                    <NavLink to='/' className={styles.customlink}>Food & Beverage</NavLink><br/>
                  </div>
                  <div className={styles.col21}>
                     <NavLink to='/' className={styles.customlink}>Audio</NavLink><br/>
                    <NavLink to='/' className={styles.customlink}>Camera Gear</NavLink><br/>
                    <NavLink to='/' className={styles.customlink}>Education</NavLink><br/>
                    <NavLink to='/' className={styles.customlink}>Energy and Tech</NavLink><br/>
                    <NavLink to='/' className={styles.customlink}>Fashion & Wearbles</NavLink><br/>
                    <NavLink to='/' className={styles.customlink}>Food & Beverage</NavLink><br/>
                  </div>
              </div>
              <div className={styles.row2}>
                  <p className={styles.row2p}>CREATIVE WORKS</p>
              <div className={styles.col12}>
                    <NavLink to='/' className={styles.customlink}>Audio</NavLink><br/>
                    <NavLink to='/' className={styles.customlink}>Camera Gear</NavLink><br/>
                    <NavLink to='/' className={styles.customlink}>Education</NavLink><br/>
                    <NavLink to='/' className={styles.customlink}>Energy and Tech</NavLink><br/>
                    <NavLink to='/' className={styles.customlink}>Fashion & Wearbles</NavLink><br/>
                    <NavLink to='/' className={styles.customlink}>Food & Beverage</NavLink><br/>
              </div>
              <div className={styles.col22}>
                    <NavLink to='/' className={styles.customlink}>Audio</NavLink><br/>
                    <NavLink to='/' className={styles.customlink}>Camera Gear</NavLink><br/>
                    <NavLink to='/' className={styles.customlink}>Education</NavLink><br/>
                    <NavLink to='/' className={styles.customlink}>Energy and Tech</NavLink><br/>
                    <NavLink to='/' className={styles.customlink}>Fashion & Wearbles</NavLink><br/>
                      
              </div>
              </div>
              <div className={styles.row3}>
                  <p className={styles.row3p}>COMMUNITY PROJECTS</p>
                  <NavLink to='/' className={styles.customlink}>Audio</NavLink><br/>
                    <NavLink to='/' className={styles.customlink}>Camera Gear</NavLink><br/>
                    <NavLink to='/' className={styles.customlink}>Education</NavLink><br/>
                    <NavLink to='/' className={styles.customlink}>Energy and Tech</NavLink><br/>
                    <NavLink to='/' className={styles.customlink}>Fashion & Wearbles</NavLink><br/>
             
              </div>
          </div>
        </div>
    )
}

