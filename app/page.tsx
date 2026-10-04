"use client";

import { useMemo, useState } from "react";

const products = [
  {name:"New Balance 2002R", price:119, tag:"ESSENTIAL", cat:"Sneakers", image:"https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=85"},
  {name:"Nike Vomero 5", price:129, tag:"HOT", cat:"Running", image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85"},
  {name:"ASICS Gel-Nimbus", price:115, tag:"RUN", cat:"Running", image:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=85"},
  {name:"Nike Air Max 95", price:125, tag:"DROP", cat:"Sneakers", image:"https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=85"},
  {name:"New Balance 9060", price:119, tag:"NEW", cat:"Nouveautés", image:"https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1000&q=85"},
  {name:"Adidas Adizero", price:99, tag:"RUN", cat:"Running", image:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1000&q=85"}
];
const cats=["Tous","Sneakers","Running","Nouveautés"];

export default function Home(){
  const [cat,setCat]=useState("Tous");
  const filtered=useMemo(()=>cat==="Tous"?products:products.filter(p=>p.cat===cat),[cat]);
  const snap=(product:string)=>window.open("https://www.snapchat.com/add/essential.7500?text="+encodeURIComponent("Salut, je veux commander : "+product)," _blank");
  return <main>
    <header className="nav"><a className="logo" href="#">ESSENTIAL<span>.7500</span></a><nav><a href="#shop">SHOP</a><a href="#story">À PROPOS</a><a href="#faq">FAQ</a></nav><button className="snap" onClick={()=>window.open("https://www.snapchat.com/add/essential.7500","_blank")}>SNAPCHAT ↗</button></header>

    <section className="hero">
      <div className="heroCopy"><p className="eyebrow">DROP 01 / 2026</p><h1>LESS.<br/><em>MORE.</em><br/>ESSENTIAL.</h1><p className="lead">Les paires qui font le style. Une sélection sneakers & running pensée pour le quotidien.</p><a className="primary" href="#shop">VOIR LE DROP <span>↓</span></a></div>
      <div className="heroVisual"><div className="circle">7500</div><img src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=90" alt="Sneaker ESSENTIAL.7500"/><div className="vertical">ESSENTIAL / 7500</div></div>
    </section>

    <div className="ticker"><span>CURATED SNEAKERS</span><span>•</span><span>RUNNING CULTURE</span><span>•</span><span>DIRECT SNAP ORDER</span><span>•</span><span>CURATED SNEAKERS</span></div>

    <section id="shop" className="shop"><div className="sectionHead"><div><p className="eyebrow">01 — COLLECTION</p><h2>THE ESSENTIALS</h2></div><p>Des modèles sélectionnés.<br/>Pas de catalogue inutile.</p></div>
      <div className="filters">{cats.map(c=><button key={c} className={cat===c?"active":""} onClick={()=>setCat(c)}>{c}</button>)}</div>
      <div className="grid">{filtered.map(p=><article className="card" key={p.name}><div className="photo"><span>{p.tag}</span><img src={p.image} alt={p.name}/></div><div className="info"><div><h3>{p.name}</h3><p>{p.cat}</p></div><strong>{p.price} €</strong></div><button className="order" onClick={()=>snap(p.name)}>COMMANDER SUR SNAPCHAT →</button></article>)}</div>
    </section>

    <section id="story" className="story"><div className="storyNo">02</div><div><p className="eyebrow">THE IDEA</p><h2>UNE PAIRE.<br/><em>UN STYLE.</em></h2><p>ESSENTIAL.7500 sélectionne des sneakers et chaussures running qui ont du caractère. Tu vois une paire qui te plaît ? Tu nous écris sur Snapchat, on te répond directement pour la disponibilité, la taille et la commande.</p><button onClick={()=>window.open("https://www.snapchat.com/add/essential.7500","_blank")}>NOUS CONTACTER ↗</button></div></section>

    <section id="faq" className="faq"><p className="eyebrow">03 — FAQ</p><h2>QUESTIONS<br/><em>RAPIDES.</em></h2><div className="questions">{[["Comment commander ?","Clique sur « Commander sur Snapchat » puis envoie-nous le modèle et ta taille."],["Comment connaître les tailles disponibles ?","Écris-nous directement sur Snapchat : nous confirmons la disponibilité avant la commande."],["Le paiement se fait sur le site ?","Non. Le site sert à découvrir la sélection. La commande se fait directement avec nous sur Snapchat."],["Les modèles sont-ils authentiques ?","Les informations et disponibilités sont confirmées directement avec le vendeur avant chaque commande."]].map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>

    <footer><div className="logo">ESSENTIAL<span>.7500</span></div><p>SNKRS / RUNNING / 7500</p><a href="https://www.snapchat.com/add/essential.7500">SNAPCHAT ↗</a></footer>
  </main>
}