import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
  description: "This is home page",
};

export default function Home() {
  return (
   
   <div>
    <h1 className="text-4xl text-yellow-100 font-bold">This is home page</h1>
    
   </div>
  );
}
