'use client'

export const dynamic = 'force-dynamic'

export default function LinkButton(props : any) {

  const handleClick = (e : any) => {
      
      e.preventDefault();
  };

  return (
    <a onClick={handleClick} className="btn btn-link" href="#">{props.l}</a>
  );
}
