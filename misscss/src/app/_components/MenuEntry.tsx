'use client'

export const dynamic = 'force-dynamic'

export default function MenuEntry(props : any) {
  
  const handleClick = () => {
      
  };

  return (
    <a onClick={handleClick} className="dropdown-item">{props.l}</a>
  );
}
