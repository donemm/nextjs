'use client'

export const dynamic = 'force-dynamic'

export default function ReadingLink() {
  const isLoggedIn = false;
  
  const handleClick = (e : any) => {
      
      e.preventDefault();
  };
  
  if (isLoggedIn) 
  return (
    <a onClick={handleClick} className="nav-item nav-link" href="#">Reading List</a>
  );
}
