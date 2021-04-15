import React from "react";
import styles from "./SlideShow.module.css";

export const ShowArticles = ({ articles }) => {
  return (
    <>
      {articles.map((item) => {
        return (
          <div key={item.id}>
            <div className={styles.centerbox}>
              <div className={styles.maincontainer}>
                <div className={styles.imghoverzoom}>
                  <img className={styles.imagewidth} src={item.imageUrl} alt="food traking" />
                  <h3
                    style={{
                      color: "green",
                      marginLeft: "10px",
                      marginTop: "-1px",
<<<<<<< HEAD
                      // fontFamily: "'Tajawal', sans-serif",
=======
                      fontFamily: "'Tajawal', sans-serif;",
>>>>>>> 03fa8a7bf6e8b29ad160e9fe7d4a8d84ed16f7b5
                    }}
                  >
                    FUNDING
                  </h3>
                  {/* <span style={{display:"flex",fontSize:"20px"}}>&#9825;</span> */}
                  <h4 className={styles.subheading}>{item.title}</h4>
                  <p className={styles.description}>{item.descrition}</p>
                  <h5 className={styles.titlehover}>{item.category}</h5>
                  <div className={styles.shares}>
                    <p>
                      &#8356; {item.raisedAmount} EUR raised...........
                      {item.percentage}%
                    </p>
                    <p className={styles.progresssymbol}> </p>
                    <i className="fas fa-clock"></i>
                    <p style={{ fontSize: "20px" }} className="fas">
                      {item.days} days left
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
