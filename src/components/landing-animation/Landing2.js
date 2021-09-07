import React,{ useEffect } from 'react'
import './Landing2.css'
import background from '../../images/fashion5.jpg'
import { BsPerson, BsSearch } from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FiHeart} from 'react-icons/fi'
import {GrCirclePlay} from 'react-icons/gr';
import gsap from 'gsap';



function Landing2() {
    const tl = gsap.timeline()

    useEffect(() => {
        tl.from(".landing2-loading", .4, {scaleX: 0, transformOrigin: "left"})
        .from(".landing2-bgimg", .7, {translateX: "-200%"})
        .from(".landing2-contenedor-izq", 0.7,{scaleX: 0, transformOrigin: "left"})
        .from(".left", .5, {y: 20, opacity: 0, stagger: {amount: .5}})
        .from(".video-description", .5, {y: 20, opacity: 0}, "-=.5")
        .from(".landing2-sidebar", .2, {scaleX: 0, transformOrigin: "right"})
    }, [])

    return (
        <div className="landing2-container">
            <img className="landing2-bgimg" src={background} alt="background"/>
            <div className="landing2-loading"></div>

            <div className="landing2-contenedor-izq">
                <div className="logoysearch left">
                    <div className="landing2-logo">PO</div>
                    <BsSearch className="-landing2-search-btn"/>
                </div>
                <div className="landing2-tittle">
                    <h1 className="upper-tittle left">Life</h1>
                    <h1 className="lower-tittle left">Style</h1>
                </div>

                <div className="landing2-subtittle-wrap">
                    <p className="landing2-text left">Lorem ipsum dolor sit ame dss dsfsat cons dsa ectetur adelit. Sunt est esse cupidit. Ab!</p>

                    <div className="video-description">
                        <div className="landing2-video">
                            <img src={background} alt="minibackground" className="minivideo-img"/>
                            <div className="minivideo-cover">
                                <GrCirclePlay className="minivideo-play-btn"/>
                            </div>
                        </div>
                        <div className="minivideo-text">
                            <h2 className="minivideo-tittle">On Sale!</h2>
                            <p className="minivideo-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, quos.</p>
                        </div>
                    </div>
                </div>

                <nav className="landing2-nav">
                    <a href="#" className="landing2-navlink left">About</a>
                    <a href="#" className="landing2-navlink left">Trends</a>
                    <a href="#" className="landing2-navlink left">Latest</a>
                </nav>
            </div>

            <div className="landing2-sidebar">
                <div className="landing2-icons">
                    <GiHamburgerMenu className="landing2-icon"/>
                    <BsPerson className="landing2-icon"/>
                    <AiOutlineShoppingCart className="landing2-icon"/>
                    <FiHeart className="landing2-icon"/>
                </div>
                <div className="landing2-sidebar-text">
                    <p className="sidebar-word">Facebook</p>
                    <p className="sidebar-word">Instagram</p>
                </div>
            </div>

            
            
        </div>
    )
}

export default Landing2
