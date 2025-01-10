import React from 'react'
import profile from "../../public/assets/profile.jpg"

const AboutPage = () => {
  return (
    <div className='text-white bg-black '>
      <div className='py-6  px-4 lg:px-[20vw] md:px-[10vw]'>
        <img src={profile} className='' />
      </div>
      <div className=''>
      </div>
      <div className='py-6 px-4 lg:px-[20vw] md:px-[10vw] leading-7'>
        <p className='text-xl font-extrabold'>Nidhi Saxena – Filmmaker, Writer, and Visual Storyteller</p>
        <br />
        <p> Nidhi Saxena is an acclaimed filmmaker and writer, deeply influenced by her background in painting and sculpture. Her journey in the visual arts shapes her distinct approach to storytelling, blending the tactile and visual sensibilities of a sculptor with the emotional depth of a painter. This artistic foundation is evident in her films, which are characterized by rich, evocative imagery, minimal dialogue, and a focus on the complexities of human emotion. </p> <br /> <p> Her work often explores themes of memory, loneliness, and the silent struggles of women, drawing from both personal experiences and broader social narratives. She employs experimental storytelling techniques, using visual metaphors and innovative narrative structures that invite the audience to engage deeply with the emotional and psychological landscapes of her characters. </p> <br /> <p> Nidhi's passion for cinema as an expansive, sensory experience allows her to create films that transcend traditional storytelling, making her one of the most compelling voices in contemporary independent cinema. </p>
      </div>
      
    </div>
  )
}

export default AboutPage
