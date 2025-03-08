import React, { useRef, useState, useEffect } from "react";

const AudioPlayer = ({ audioUrl ,isSender}) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };

    const handleEnded = () => {
      setPlaying(false);
      setProgress(0);
      setCurrentTime(0);
      audio.currentTime = 0;
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  return (
    // className={`p-3 rounded-2xl text-[13.11px] ${
    //     isSender ? "bg-[#FA8836] text-white" : "bg-[#292929] text-start"
    //   }`}
    <div className={`flex items-center gap-2 ${isSender ? "bg-[#FA8836] text-white" : "bg-[#292929]"} rounded-full p-2 shadow-md w-full max-w-md`}>
      {/* Play Button */}
      <button
        className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm"
        onClick={togglePlay}
      >
        {playing ? (
          <span className={`${isSender ? "text-[#FA8836] " : "text-[#292929]"} text-sm`}>❚❚</span>
        ) : (
          <span className="text-[#FA8836] text-sm">▶</span>
        )}
      </button>

      {/* Progress Bar */}
      <div className="relative flex-1 h-1.5 bg-white rounded-full overflow-hidden">
        <div
          className={`absolute top-0 left-0 h-full  transition-all ${isSender ? "bg-[#FA8836] text-white" : "bg-[#292929]"}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Timer (Only Current Time) */}
      <span className="text-white text-xs pr-2">{formatTime(currentTime)}</span>

      {/* Hidden Audio Element */}
      <audio ref={audioRef}>
        <source src={audioUrl} type="audio/webm" />
        <source src={audioUrl.replace(".webm", ".mp3")} type="audio/mpeg" />
        Your browser does not support this audio format.
      </audio>
    </div>
  );
};

export default AudioPlayer;

 

 
 

 

 