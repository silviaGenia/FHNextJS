import type { Metadata } from "next"

export const metadata:Metadata ={
  title: 'About Title',
  description: 'About Description',
  keywords:['About Page', 'Fernando', 'Informacion']
}


export default function About (){
  return(
    <>
    <span className="text-7xl">About  Page</span>
    </>
  )
}