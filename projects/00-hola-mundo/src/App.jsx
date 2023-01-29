import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
 
  return (
    <section className="App">
      <TwitterFollowCard userName="midudev" >
       Miguel Anguel Duran 
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing userName="pheralb" >
       Pablo Hernandez
      </TwitterFollowCard>
    </section>
  );
}
