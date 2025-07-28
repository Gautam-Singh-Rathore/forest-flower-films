import React from 'react'
import { FaInstagram, FaImdb } from 'react-icons/fa'
import nidhi from "../../public/assets/about_nidhi.jpg"
import rahul from "../../public/assets/about_rahul.jpg"
import ajendra from "../../public/assets/about_ajendra.jpg"

const AboutPage = () => {
  return (
    <div className='text-white bg-black text-sm'>
      {/* Nidhi Section */}
      <div className='py-6 px-4 lg:px-[20vw] md:px-[10vw]'>
        <img src={nidhi} className='rounded-sm' />
      </div>

      <div className='py-6 px-4 lg:px-[20vw] md:px-[10vw] leading-relaxed text-base md:text-lg'>
        <p className='text-2xl font-extrabold mb-4'>Nidhi Saxena – Filmmaker, Writer, and Visual Storyteller</p>
        
        <p>
        <b>Nidhi Saxena</b> is an Indian filmmaker whose work explores human vulnerability and existential themes through a distinctly poetic lens. With a formal background in sculpture and fine art, she transitioned to cinema after studying at the Film and Television Institute of India.
        </p><br />

        <p>
          Her cinematic language, influenced by auteurs like Tsai Ming-Liang and Apichatpong Weerasethakul, often transcends traditional narrative structures in search of the abstract and spiritual. Nidhi is the first Indian woman director to receive the <b>Asian Cinema Fund (Post-Production)</b> and is also a <b>Biennale College Cinema</b> recipient.
        </p><br />

        <p>
          She has worked extensively with marginalized women through initiatives supported by the UN Population Fund. Her debut feature, <i>Sad Letters of an Imaginary Woman</i>, premiered at the <b>Busan International Film Festival in 2024</b> and was later screened at festivals across North America, Australia, India, and beyond.
        </p><br />

        <p>
          Her second feature, <i>Secret of a Mountain Serpent</i>, was selected for the <b>Venice Biennale College Cinema – Script Lab</b> and received production support. It is set to have its world premiere at the <b>Venice Film Festival in August 2025</b>. She is currently developing her third feature.
        </p><br />

        <p>
          Nidhi has also led powerful storytelling initiatives for social impact. Notably, she directed a project for <b>UNFPA</b>, training tribal adolescent girls in Rajasthan to become filmmakers and document their lived realities through cinema.
        </p><br />

        <p>
          As a writer, she has authored two children’s books: <i>Chidiya Ud</i>, the story of a boy who believes he is a bird, and <i>Bulbul-e-Paristan</i>, a poetic tale filled with wonder and longing. Both reflect her deep love for imagination, memory, and unseen worlds.
        </p>

        {/* Social Icons */}
        <div className='flex gap-4 my-3'>
          <a href='https://www.instagram.com/the_kabootari/#' target='_blank' rel='noopener noreferrer'><FaInstagram size={27} className='hover:text-pink-700' /></a>
          <a href='https://www.imdb.com/name/nm16540833/' target='_blank' rel='noopener noreferrer'><FaImdb size={27} className='hover:text-yellow-500' /></a>
        </div>
      </div>

      {/* Ajender and Rahul Cards */}
      <div className='flex flex-col md:flex-row gap-6 py-6 px-4 lg:px-[20vw] md:px-[10vw] text-base md:text-lg leading-relaxed'>
        {/* Ajender Card */}
        <div className='w-full md:w-1/2 p-4 '>
          <img src={ajendra} className='rounded-sm mb-4 w-full h-auto' />
          <p className='text-xl font-bold mb-1'>Ajender Singh</p>
          <p className='text-md font-semibold mb-3'>Co-founder & Producer</p>
          <p>
            Ajender Singh is the co-founder and producer at Forest Flower Films, where his passion for art cinema meets over two decades of leadership in development and communications. With a background in stakeholder management, fund-raising, and project development, Ajender brings strategic insight and creative sensitivity to the role of producer.
            <br /><br />
            His interest in abstract, emotionally complex narratives drive Forest Flower Films' mission to craft cinema that is both visually bold and socially resonant. Ajender’s ability to bridge artistic intent with practical execution makes him instrumental in nurturing visionary projects.
            <br /><br />
            He co-produced the internationally acclaimed <i>Sad Letters of an Imaginary Woman</i>, recipient of the ACF post-production grant and an official selection at the Busan International Film Festival. His deep connection with diverse communities across India informs his creative approach, enabling stories that are grounded, urgent, and universal.
            <br /><br />
            Ajender continues to be a driving force in realizing Forest Flower’s vision of producing independent cinema that transcends boundaries and provokes thought.
          </p>
          <div className='flex gap-4 my-4'>
            {/* <a href='#' target='_blank' rel='noopener noreferrer'><FaInstagram size={27} className='hover:text-pink-700' /></a> */}
            {/* <a href='#' target='_blank' rel='noopener noreferrer'><FaImdb size={27} className='hover:text-yellow-500' /></a> */}
          </div>
        </div>

        {/* Rahul Card */}
        <div className='w-full md:w-1/2 p-4 '>
          <img src={rahul} className='rounded-sm mb-4 w-full h-auto' />
          <p className='text-xl font-bold mb-1'>Rahul Saxena</p>
          <p className='text-md font-semibold mb-3'>Producer</p>
          <p>
            Rahul Saxena works at the intersection of architecture and cinema, bringing a refined spatial sensibility to film production. With nearly two decades of experience in design, he approaches storytelling with an architect’s eye for atmosphere, detail, and structure.
            <br /><br />
            At Forest Flower Films, Rahul champions visually grounded, emotionally resonant narratives from South Asia. He co-produced <i>Sad Letters of an Imaginary Woman</i> (Busan 2024) and serves as Executive Producer on <i>Secrets of a Mountain Serpent</i>, a Venice Biennale College Cinema selection for 2025.
            <br /><br />
            His strength lies in shaping projects with precision—supporting filmmakers whose visions are both intimate and internationally ambitious.
          </p>
          <div className='flex gap-4 my-4'>
            <a href='https://www.instagram.com/rahulsaxena.asa/' target='_blank' rel='noopener noreferrer'><FaInstagram size={27} className='hover:text-pink-700' /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
