'use client'

export const dynamic = 'force-dynamic'

export default function PageButton(props : any) {

  const handleClick = () => {
    
  };

  return (
    <a onClick={handleClick} className="btn btn-primary rounded-pill py-3 px-3 mt-3">{props.l}</a>
  );
}
