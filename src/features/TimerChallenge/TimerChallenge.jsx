import { useState } from "react";

const TimerChallenge = ({ title, targetTime }) => {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    const handleStart = () => {
        setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    };

    const handleStop = () => {
        setTimerStarted(false);
        setTimerExpired(false);
    };

    return (<section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className="challenge-time">
            {targetTime} second{ targetTime > 1 ? "s" : "" }
        </p>
        <p>
            <button onClick={handleStart}>{timerStarted ? "Stop" : "Start"} Challenge</button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
            {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
    </section>);
};

export default TimerChallenge;