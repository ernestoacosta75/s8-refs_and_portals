import { useRef } from "react";
import { useState } from "react";
import ResultModal from "@features/ResultModal/ResultModal.jsx";

const TimerChallenge = ({ title, targetTime }) => {
    const timer = useRef(); 
    
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    const handleStart = () => {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            setTimerStarted(false);
        }, targetTime * 1000);

        setTimerStarted(true);
    };

    const handleStop = () => {
        clearTimeout(timer.current);
        setTimerStarted(false);
        setTimerExpired(false);
    };

    return (
        <>
        {timerExpired && <ResultModal result="lost" targetTime={targetTime}/>}
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{ targetTime > 1 ? "s" : "" }
            </p>
            <p>
                <button ref={timer} onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? "Stop" : "Start"} Challenge</button>
            </p>
            <p className={timerStarted ? "active" : undefined}>
                {timerStarted ? "Time is running..." : "Timer inactive"}
            </p>
        </section>
    </>);
};

export default TimerChallenge;