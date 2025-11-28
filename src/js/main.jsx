import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import { NavBar } from './components/NavBar';
import Home from './components/Home';
import { Footer } from './components/Footer';
import { Card } from './components/Card';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container-fluid">
    <NavBar/>
    
    <div className="d-flex flex-column justify-content-evenly">
    <Home/>
    <div className="row">
    <Card 
    imagen="https://static.vecteezy.com/system/resources/thumbnails/026/717/009/small/women-meditate-yoga-psychic-women-considers-mind-and-heart-spirituality-esotericism-with-bokeh-defocused-lights-universe-generative-ai-illustration-free-photo.jpg" 
    title="Meditation" 
    description="..."/>
    <Card 
    imagen="https://wallpapers.com/images/featured/imagenes-de-minions-qhq2hsgjf7kh8a2h.jpg" 
    title="Minions" 
    description="Bananaaaaaa"/>
    <Card 
    imagen="https://thumbs.dreamstime.com/b/superficie-del-agua-de-la-ola-oce%C3%A1nica-mar-que-practica-surf-124362369.jpg" 
    title="On the top" 
    description="Perfect day for surfing"/>
    <Card 
    imagen="https://media.istockphoto.com/id/814423752/es/foto/ojo-modelo-con-un-maquillaje-colorido-arte-primer-plano.jpg?s=612x612&w=0&k=20&c=lr7yWmFVkmY0pCkTjHbxJN6OZNOy1ZZczmVS7hkN4lg=" 
    title="Eye" 
    description="Modern Art"/>
    </div>
    
    </div>
    
    </div>
    <Footer/>
  </React.StrictMode>,
)
