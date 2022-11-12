import Image from "next/image";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Image
          src={"/martech.png"}
          alt="martech logo"
          width={325}
          height={300}
        />
        <div className={styles.companyInfo}>
          <div className={styles.column}>
            {/* <h3>Customer Services</h3>
            <hr />
            <ul>
              <li>Contact us</li>
              <li>Shipping & Delivery</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
            </ul> */}
          </div>
          <div className={styles.column}>
            <h3>Contacts</h3>
            <h2>Registered Address:</h2>
            <p>MAR-TECH LOGISTICS LTD</p>
            <p>Unit C10, Boston Trade Park</p>
            <p>Boston, Lincolnshire</p>
            <p>PE21 9HG, UK</p>
            <h2>phone</h2>
            <p>07715129997</p>
            <h2>email:</h2>
            <p>martechuk85@gmail.com</p>
            <h2>Working days/hours:</h2>
            <p>Mon - Fri /9:00 AM - 5:00</p>
          </div>
        </div>
      </footer>
      <div className={styles.rights}>
        <p>Mar-tech © 2022 All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
