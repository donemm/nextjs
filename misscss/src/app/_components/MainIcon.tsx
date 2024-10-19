'use client'

import styles from "../page.module.css";

export const dynamic = 'force-dynamic'

export default function MainIcon() {
  
  const handleClick = (event : any) => {
      
      event.preventDefault();
  };

  return (
    <a href="#" onClick={handleClick} className="navbar-brand d-flex align-items-center px-4 px-lg-5">
    <h1 className="m-0 text-primary"><i className={styles.trash}><i className="fa fa-medkit me-3"></i></i>Drugopedia</h1></a>
  );
}
