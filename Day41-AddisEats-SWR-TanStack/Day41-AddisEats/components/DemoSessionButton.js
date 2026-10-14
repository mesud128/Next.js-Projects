"use client";
import {useState} from "react";
export default function DemoSessionButton(){const [msg,setMsg]=useState("");async function start(){const r=await fetch("/api/demo-session",{method:"POST"});setMsg(r.ok?"Session active":"Session failed");}return <span><button onClick={start}>Start demo session</button> {msg}</span>;}
