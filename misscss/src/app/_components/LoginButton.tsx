'use client'

export const dynamic = 'force-dynamic'

export default function LoginButton() {
  
  const logbtext =  "Login";

  const handleClick = () => {
    
  };

  return (
    <a onClick={handleClick} className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">{logbtext} <i className="fa fa-arrow-right ms-3"></i></a>
  );
}
