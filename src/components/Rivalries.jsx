import React from 'react'
import { useState } from 'react';
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';
const Rivalries = () => {
  const [currindex,setCurrIndex]=useState(0);
  const prevInd=()=>{
     if(currindex==0){
      setCurrIndex(3);
     }else{
       setCurrIndex(currindex-1);
     }
  }
  const rival=['srr10.jpg','srr11.jpg','srr12.jpg','srr13.jpg'];
  const nextInd=()=>{
     if(currindex==3){
      setCurrIndex(0);
     }else{
       setCurrIndex(currindex+1);
     }
  }
  return (
    <div className=' text-black font-robotoSlab bg-[white]'>
    <div className='bg-black'>
    <div className='bg-black max-w-[1400px] h-[700px] w-full m-auto py-2 px-4 relative group'>
    <div className=' w-full h-full rounded-2xl duration-500 relative flex justify-center'>
    <img src={'../assets/'+rival[currindex]} className='max-h-[700px]'> 
    </img>
    </div>
    <div>
  <BsChevronCompactLeft size={50} onClick={prevInd} className=' hidden group-hover:block absoloute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer absolute' />
    </div>
    <div>
      <BsChevronCompactRight size={50} onClick={nextInd} className=' hidden group-hover:block absoloute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer absolute'/>
    </div>
    </div>
    </div>  
     <h1 className='text-center md:ml-[360px] md:text-6xl font-bebasNeue md:mt-[30px] md:mr-[300px] md:pl-[2px] md:flex md:justify-center xs:ml-[00px] xs:mt-[40px] xs:text-2xl'>Reigns <span className='text-3xl mt-[20px] px-2'>vs</span> Ambrose  <span className='text-3xl mt-[20px] px-2'>vs</span> Rollins</h1>
     <h4 className='text-center font-bebasNeue mt-[60px]'>Aakash vs Dhawal vs Vedant</h4>
    
     <div className='md:px-16 xs:px-8 mt-[40px]'>
      <p>
        Who would have thought, once brothers who were bonded by love would fight each other for the the most prestigious prize in the buissness? Yes I am talking about the sheild. Three unknown indiviuals who debuted in 2012 in survivor series, who caused mayhem in arena.Later these individuals began taking on the whole locker room and became the most fierce group in the WWE.Later these guys were known as 'The hounds of justice/S.H.EI.L.D'.Reigns, rollins and Ambrose instantly became crowd favorite, Reigns was displayed as the powerhouse, Rollins was the brain and Ambrose was the crazy unstoppable force. Three most distinct personalities, suprisingly came out best as a group.<br></br> 
        The Shield reigned supreme for a brief period during 2012-14 and established itself as one of the most dominant trios in the history of this business. Seth Rollins turned on his brethren in mid-2014 and joined Triple H's Authority. Roman Reigns went on to score a huge win over Randy Orton at SummerSlam 2014.
        <br></br>
        <br></br>
        Turn the clock back to the time 2016, when we were kids and the best thing about the week was to get off the school bus on Tuesdays and rush back to home to watch Raw on time.I still clearly remember it was raining that day and I rushed from the school bus back to my apartment, by the time I was opening my apartment keys I was partially wet, I pushed on the door with all my might because of swollen doors during rainy season.I bumped on to my sofa switched on to the tv and that was it, I see Ambrose out of the taxi and being lunatic he is he forgets the belt in the taxi, few secs later he rushes to catch the taxi and manages to get back the title form the taxi.He walks in to the arena with a smile, a smile which he had been waiting for. Ambrose's music hits and there we see one of the most loudest pops in wee history,finally all the former members of the sheild are champions.He takes his own time walks into the ring,slowly enjoying all the love and warmth he is getting from the audience.Now, he is in the center of the ring and his music has stopped, a slow and steady chant erupts from the crowd: 'YOU DESERVE IT!! 'clap clap' YOU DESERVE IT!!'.Now this chant is like wild fire in the whole stadium. He closes his eyes soaks in the chants and finally a moment which he had been waiting for has arrived, he starts his victory speech.“Oh boy, last night was a long night in Las Vegas, and I’m not even talking about the stuff I don’t remember.” Ambrose mentions the Cleveland Cavaliers winning the NBA Championship, which draws boos. Ambrose says he doesn’t like them anyway. His foot got run over by a cab and, oh yeah, he had to climb a ladder to win the Money in the Bank contract. At some point he almost got bit by a dog, but then this other thing happened when he cashed in Money in the Bank on Seth Rollins to become the WWE World Heavyweight Champion. If you want to talk about a guy who had a long night, it’s Seth Rollins. Rollins was the right guy in the right place at the wrong time. Ambrose says this is the lesson of the week: what goes around comes back around. Ambrose has another lesson: hard work pays off. Busting your ass and keeping your nose to the grindstone pays off and when it pays off, it pays off big. Rollins called himself “The Man,” Reigns called himself “The Guy,” so is he “The Dude?” A “Dude” chant breaks out. Ambrose says you can just call him “Champion.” He’s been chasing the title for two years. This is why he’s kept coming back and dusting himself off. As he stands in the ring with it, it was all worth it. We’re not having hard times anymore!
        <br></br>
        <br></br>
        Roman Reigns’ music hits, and he comes out to the stage to big boos from the crowd. There is also a “RAW” podium on the opposite side of the stage. Reigns gets in the ring and circles around Ambrose. They stare at each other. Reigns takes a deep breath and says, “Last night, it wasn’t my night because last night was your night.” The crowd lightly cheers that. Reigns congratulates Ambrose and says he’s happy for him. Reigns doesn’t care what the crowd thinks. This is his boy. Reigns asks how good it felt to cash in on Rollins. Ambrose says he would have cashed in on Reigns as well. A “You can’t wrestle” chant breaks out. Reigns just smirks and looks into the crowd. Reigns says, “To all the dudes chanting ‘You can’t wrestle,’ take a sip of your beer and shut your mouths!” Reigns asks if Ambrose is a fighting champ because he has a rematch due to him.
Seth Rollins’ music hits, and he comes out to a big reception screaming this isn’t how it works. For seven months, he worked his ass off to get back to the ring. Last night, he achieved his dream to beat Reigns, so he’s going to the back of the line. Ambrose stole his championship from him. Reigns says it doesn’t feel good. Rollins says when he did it to Reigns, he did it to his face. Rollins was the champion and never properly lost it, so Reigns can go to the back of the line because that’s going to the back of the line. Reigns says if he didn’t lose it, then why is it on Ambrose’s shoulder? Rollins says Ambrose stole it from him. Reigns tells Rollins to shut up and stop complaining. There is a very easy way to settle this. Reigns drops his microphone and gets in Rollins’ face. Rollins says there is nothing to settle between them. Rollins beat him last night and deserves a rematch for his title.
The Triple Threat Match was the main event of WWE Battleground 2016. It was a no-disqualification match, meaning that there were no count-outs, and weapons could be used.

The match was emotionally charged as all three competitors had a legitimate claim to the championship. Roman Reigns returned from his suspension, determined to regain the title. Seth Rollins returned from his injury, seeking to reclaim the championship he had never lost. Dean Ambrose, holding the Money in the Bank contract, saw this as the perfect opportunity to become WWE Champion.
<br></br>
<br></br>

The action in the match was fast-paced and brutal. All three participants had their moments of dominance. They utilized their signature moves and finishers, including Roman Reigns' Superman Punch and Spear, Seth Rollins' Pedigree, and Dean Ambrose's Dirty Deeds.

The match featured several near-falls, with each competitor coming close to winning the championship. The fans were on the edge of their seats as the action unfolded.

In the closing moments of the match, Seth Rollins and Roman Reigns were on the outside of the ring. Dean Ambrose capitalized on this situation and hit Seth Rollins with Dirty Deeds inside the ring. He made the cover and secured the pinfall victory, becoming the new WWE Champion.Dean Ambrose's victory at WWE Battleground 2016 marked a significant turning point in his career. It was his first WWE Championship win, and it solidified his status as one of WWE's top stars.

Ambrose's victory also marked the beginning of the "New Era" in WWE, as it occurred in the midst of the brand split. WWE Raw and WWE SmackDown became separate brands with their own rosters, storylines, and championships. Ambrose's victory meant that he was now the WWE Champion for the Raw brand.

This match effectively marked the end of The Shield as a united faction, as all three members were on separate brands due to the brand split. They would go on to pursue their individual careers and storylines. </p>
     </div>
    
    <br></br>

   
   <br></br>
  </div>
  )
}

export default Rivalries
