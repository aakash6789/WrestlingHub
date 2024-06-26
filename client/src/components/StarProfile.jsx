// import react from react;
import React, { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect,useMemo, useRef } from "react";
import { wwestars } from "../../../server/data";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Comments from "./Comments";
import useAuth from "../hooks/useAuth";

const StarProfile = () => {
  const { user, setUser, uname, setUname, comment } = useAuth();
  const { sname } = useParams();
  const [currindex, setCurrIndex] = useState(0);
  const [player, setPlayer] = useState(null);
  const [data, setData] = useState({
    name: "",
    picturePath: [],
    description: {},
    height: "",
    weight: "",
    rank: 0,
    videoId: "",
  });
  const storedUserJSONString = localStorage.getItem("user"); 
  const storedUser = JSON.parse(storedUserJSONString);
  // const tag = document.createElement("script");
  // tag.src = "https://www.youtube.com/iframe_api";
  // const firstScriptTag = document.getElementsByTagName("script")[0];
  // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
  // let player;
 
  // const onYouTubeIframeAPIReady=useCallback((videoId) =>{
  //   player = new window.YT.Player("player", {
  //     height: "390",
  //     width: "640",
  //     videoId: `${videoId}`,
  //     playerVars: {
  //       playsinline: 1,
  //     },
  //     events: {
  //       onReady: onPlayerReady,
  //       onStateChange: onPlayerStateChange,
  //     },
  //   });
  // },[]);
  // const onPlayerReady=useCallback((event) =>{
  //   event.target.playVideo();
  // },[]);
 


  // const onPlayerStateChange=useCallback((event)=> {
  //   let done = false;
  //   if (event.data === window.YT.PlayerState.PLAYING && !done) {
  //     setTimeout(stopVideo, 6000);
  //     done = true;
  //   }
  //   function stopVideo() {
  //     player.stopVideo();
  //   }
  // },[player]);

  
  // useEffect(() => {
  //   const controller=new AbortController();
  //     const signal=controller.signal; 
  //   const fetchData = async (sname) => {
  //     try {
        
  //       const response = await fetch(
  //         `${import.meta.env.VITE_API_SERVER_BASE_URL}/superstar/${sname}`,{signal:signal}
  //       );
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       console.log(currindex);
  //       const jsonData = await response.json();
  //       setData((prevData) => ({
  //         ...prevData,
  //         name: jsonData[0].name,
  //         picturePath: jsonData[0].picturePath,
  //         description: jsonData[0].description,
  //         height: jsonData[0].height,
  //         weight: jsonData[0].weight,
  //         rank: jsonData[0].rank,
  //         videoId: jsonData[0].videoId,
  //       }));
  //       window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady(jsonData[0].videoId);
  //       console.log(uname);
  //     } catch (err) {
  //       console.log("Error fetching data ", err);
  //     }

  //   };
  //   fetchData(sname);
  //   return ()=>{
  //     // controller.abort();
  //   }
  // }, []);

  const onPlayerReady = useCallback((event) => {
    event.target.playVideo();
  }, []);

  const onPlayerStateChange = useCallback((event) => {
    let done = false;
    if (event.data === window.YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
    function stopVideo() {
      player.stopVideo();
    }
  }, [player]);

  const onYouTubeIframeAPIReady = useCallback((videoId) => {
    const newPlayer = new window.YT.Player('player', {
      height: '390',
      width: '640',
      videoId: `${videoId}`,
      playerVars: {
        playsinline: 1,
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
    setPlayer(newPlayer);
  }, [onPlayerReady, onPlayerStateChange]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async (sname) => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_SERVER_BASE_URL}/superstar/${sname}`,
          { signal: signal }
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData((prevData) => ({
          ...prevData,
          name: jsonData[0].name,
          picturePath: jsonData[0].picturePath,
          description: jsonData[0].description,
          height: jsonData[0].height,
          weight: jsonData[0].weight,
          rank: jsonData[0].rank,
          videoId: jsonData[0].videoId,
        }));

        // Wait for the YouTube API to be ready before creating the player
        if (window.YT && window.YT.Player) {
          onYouTubeIframeAPIReady(jsonData[0].videoId);
        } else {
          window.onYouTubeIframeAPIReady = () => {
            onYouTubeIframeAPIReady(jsonData[0].videoId);
          };
        }
      } catch (err) {
        console.log('Error fetching data', err);
      }
    };

    // Load the YouTube Iframe API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    fetchData(sname);

    // return () => {
    //   controller.abort();
    //   if (player) {
    //     player.destroy();
    //   }
    // };
  }, [sname, onYouTubeIframeAPIReady, player]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const prevInd = () => {
    if (currindex == 0) {
      setCurrIndex(3);
    } else {
      setCurrIndex(currindex - 1);
    }
  };
  const nextInd = () => {
    if (currindex == 3) {
      setCurrIndex(0);
    } else {
      setCurrIndex(currindex + 1);
    }
  };
  const htmlContent1 = data.description.earlyLife;
  const htmlContent2 = data.description.carrer;
  const htmlContent3 = data.description.family;
  return (
    <div className=" w-[100%] mr-0 text-black font-robotoSlab bg-[white]">
      <Helmet>
        <script src="https://www.youtube.com/iframe_api" />
      </Helmet>
      <div className="bg-black">
        <div className="bg-black h-[700px] w-full m-auto py-2 px-4 relative group">
          <div className=" w-full h-full rounded-2xl duration-500 relative flex justify-center">
            <img
              src={"../assets/" + data.picturePath[currindex]}
              className="max-h-[700px]"
            ></img>
          </div>
          <div>
            <BsChevronCompactLeft
              size={50}
              onClick={prevInd}
              className=" hidden group-hover:block absoloute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer absolute"
            />
          </div>
          <div>
            <BsChevronCompactRight
              size={50}
              onClick={nextInd}
              className=" hidden group-hover:block absoloute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer absolute"
            />
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="flex justify-center items-center">
        <h1 className="font-bebasNeue md:text-5xl xs:text-3xl mt-[5%]">
          {data.name}
        </h1>
          </div>
        <div className=" absolute  font-bebasNeue md:text-2rem  right-[8%] bottom-[0%]">
          <span>Ranking: {data.rank}</span>
        </div>
      </div>
      <br></br>
      <h1 className="font-bebasNeue md:ml-[3%] md:pl-[1.5vw] md:text-3xl py-4 mt-[100px] xs:ml-[30px] md:mr-[800px]  xs:mr-[350px]">
        Early Life
      </h1>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent1 }}
        className="md:px-16 xs:px-8"
      />
      <h1 className="font-bebasNeue md:px-16 md:text-3xl py-4 xs:ml-[30px] md:mr-[1250px] md:ml-[3px] xs:mr-[430px]">
        Carrer
      </h1>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent2 }}
        className="md:px-16 xs:px-8"
      />
      <h1 className="font-bebasNeue md:px-16 md:text-3xl py-4 xs:ml-[30px] md:mr-[1250px] md:ml-[3px] xs:mr-[430px]">
        Family
      </h1>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent3 }}
        className="md:px-16 xs:px-8"
      />
      <br></br>
      <p>{data.rank}</p>
      {/* <div className='font-bebasNeue px-16 pb-10'>
      <h1 className='text-6xl '>BIO</h1>
      <div className='flex pb-2'>
      <span>Height:</span><p className='' >{data.height}</p>
      </div>
      <div className='flex pb-2'>
      <span>Weight:</span><p className='' >{data.weight}</p>
      </div>
      <div className='flex pb-2'>
      <span>Ranking:</span><p className='' >{data.rank}</p>
      </div>
     
      </div> */}


 
      <h1 className="text-center font-bebasNeue text-4xl">Best match</h1>
     
      <div
        id="player"
        className="md:ml-[24%] md:mb-[130px] md:mt-[50px] xs:ml-[0px] md:w-[50%] md:h-[70vh] xs:w-full xs:px-2"
      ></div>
      {(storedUser)?<Comments/>:<div className="text-5xl text-[red]"></div>}
      {/* <iframe id='player' width="560" height="315" src="https://www.youtube.com/embed/We2FqPXo64M?si=l46R340besKXlz0-" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe> */}
    </div>
  );
};

export default StarProfile;
//Images fetched properly for carousel
