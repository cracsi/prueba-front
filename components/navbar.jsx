"use client";
import "@/app/globals.css";
import Link from "next/link";
import {useRouter} from "next/navigation";



const navBar=()=>{
return(
<nav className="nav">
    <ul>
<div ><Link href="/" className="tit-nav" >Home</Link></div>
<div className="tit-nav"><h1 >Hobbies</h1></div>
<div><Link href="/" className="tit-nav">Settings</Link></div>

    </ul>
    </nav>
    );

};

export default navBar;
