'use client'

export const dynamic = 'force-dynamic'

export default function DynPage(props : any) {
  return ( <h1 className="mb-4">List of drugs with name starting with {props.p}</h1> );
}