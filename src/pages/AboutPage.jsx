import React from 'react'
import profile from "../../public/assets/profile.jpg"

const AboutPage = () => {
  return (
    <div className='text-white bg-black '>
      <div className='py-6  px-4 lg:px-[20vw] md:px-[10vw]'>
        <img src={profile} className='' />
      </div>
      <div className='border-b-[1px] border-gray-600'>
      </div>
      <div className='py-6 px-4 lg:px-[20vw] md:px-[10vw] leading-7'>
        <p className='text-xl font-extrabold'>Nidhi Saxena – Filmmaker, Writer, and Visual Storyteller</p>
        <br />
        <p>
        I am Nidhi Saxena, an acclaimed filmmaker and writer, deeply influenced by my background in painting and sculpture. My journey in the visual arts shapes my distinct approach to storytelling, blending the tactile and visual sensibilities of a sculptor with the emotional depth of a painter. This artistic foundation is evident in my films, which are characterized by rich, evocative imagery, minimal dialogue, and a focus on the complexities of human emotion.
        </p>
        <br />
        <p>
        My work often explores themes of memory, loneliness, and the silent struggles of women, drawing from both personal experiences and broader social narratives. I employ experimental storytelling techniques, using visual metaphors and innovative narrative structures that invite the audience to engage deeply with the emotional and psychological landscapes of my characters.
        </p>
        <br />
        <p>
        My passion for cinema as an expansive, sensory experience allows me to create films that transcend traditional storytelling, making me one of the most compelling voices in contemporary independent cinema.
        </p>
      </div>
      
    </div>
  )
}

export default AboutPage
