import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons'

import styles from './Footer.module.css'

export const Footer=()=>{
    return(
    <div className={styles.maincontainer}>
       <div className={styles.container}>
         <div className={styles.col1}>
             <div className={styles.row1}>
                 <p className={styles.p1}>Explore</p>
                 <li className={styles.li1}>What we do</li>
                 <li className={styles.li1}>Funding</li>
                 <li className={styles.li1}>GoFundMe</li>
             </div>
             <div className={styles.row2}>
                 <p className={styles.p1}>About</p>
                 <li className={styles.li1}>About us</li>
                 <li className={styles.li1}>Blog</li>
                 <li className={styles.li1}>Trust & Safety</li>
                 <li className={styles.li1}>Help & Support</li>
                 <li className={styles.li1}>Press</li>
                 <li className={styles.li1}>Career</li>
             </div>
             <div className={styles.row3}>
                 <p className={styles.p1}>Entrepreneurs</p>
                 <li className={styles.li1}>How it Work</li>
                 <li className={styles.li1}>Indiegogo vs Kickstarter</li>
                 <li className={styles.li1}>Expert Directory</li>
                 <li className={styles.li1}>Fee</li>
                 <li className={styles.li1}>Enterprise</li>
                 <li className={styles.li1}>China</li>
             </div>
         </div>
         <div className={styles.col2} >
           <FontAwesomeIcon icon={faEnvelopeOpenText} className={styles.logo} />
            <p className={styles.p2}>Find it first on Indiegogo</p>
            <p className={styles.p3}>Discover new and clever product in the Indiegogo newletter</p>
            <input type="email" placeholder="Your email address" className={styles.inputemail}/><br/>
            <label><input type="checkbox" className={styles.inputcheck} />I agree to the Terms of Use and have read and understand the Privacy Policy</label><br/>
            <input type="submit" value="SIGN ME UP" className={styles.inputsubmit}/>
         </div>
       </div>
       <div className={styles.hori}></div>
       <div className={styles.subcontainer}>
           <span className={styles.spans}>Terms of Use</span>
           <span className={styles.spans}>Privacy Policy</span>
           <span className={styles.spans}>Cookie Policy</span>
           <span className={styles.spans}>Do Not sell Personal Information </span>
           <span className={styles.spans}>Accessibility</span>
           <span className={styles.spans}>@2021 Indiegogo,Inc.All Right Reserved</span>
       </div>
    </div>
    )
}