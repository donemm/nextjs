'use client'

export const dynamic = 'force-dynamic'

export default function HomeLink() {

  const handleClick = (event : any) => {
      event.preventDefault();
  };

  return (
    <a href="#" onClick={handleClick} className="nav-item nav-link active">Home</a>
  );
}
