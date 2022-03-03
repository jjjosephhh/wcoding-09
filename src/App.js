import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  // let wealth = 5000;

  const wealth = useRef(5000);
  // { current: STARTING_VALUE }

  const inputTarget = useRef(1);
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  // { current: null }
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(
      () => console.log('hello there'),
      500
    );

    timeoutRef.current = setTimeout(() => {
      alert('BOOOM!');
    }, 3000);
  }, []);

  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(0);
  const [tripleCount, setTripleCount] = useState(0);

  const renderCount = useRef(1);
  useEffect(() => {
    console.log(`The current render count is ${renderCount.current}`);
    renderCount.current += 1;
  });

  useEffect(() => {
    setDoubleCount(count * 2);
  }, [count]);

  useEffect(() => {
    setTripleCount(doubleCount * 3);
  }, [doubleCount]);

  console.log("My wealth is", wealth);

  const incrementCount = () => {
    setCount(count + 1);

    wealth.current += 1000;
  };

  const focusOnInput = () => {
    // alert('hi there');
    // document.getElementById('my-input').focus();
    // console.log(inputRef.current);

    switch (inputTarget.current) {
      case 1:
        inputTarget.current += 1;
        inputRef.current.focus();
        break;
      case 2:
        inputTarget.current += 1;
        inputRef2.current.focus();
        break;
      case 3:
        inputTarget.current = 1;
        inputRef3.current.focus();
        break;
    }

    // inputRef3.current?.focus();
  };

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  const playAudio = () => {
    audioRef.current.play();
  };
  const pauseAudio = () => {
    audioRef.current.pause();
  };

  const removeInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // true false
    // 0 null undefined ''
    // 1 'potato' [] truthy
  };

  return (
    <div className="container">

      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Control Interval</p>
        </header>
        <div className="card-content">
          <div className="content">
            <button onClick={removeInterval} className="button is-success">
              Remove interval
            </button>
            <button onClick={() => {
              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
              }
            }} className="button is-warning">
              Remove timeout
            </button>
          </div>
        </div>
      </div>






      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Control Audio Element</p>
        </header>
        <div className="card-content">
          <div className="content">
            <audio ref={audioRef}>
              <source
                src="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
            <button onClick={playAudio} className="button is-success">
              Play
            </button>
            <button onClick={pauseAudio} className="button is-warning">
              Pause
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Control Video Element</p>
        </header>
        <div className="card-content">
          <div className="content">
            <video ref={videoRef} width="320" height="240">
              <source
                src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            <button onClick={playVideo} className="button is-success">
              Play
            </button>
            <button onClick={pauseVideo} className="button is-warning">
              Pause
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Underlying DOM Elements</p>
        </header>
        <div className="card-content">
          <div className="content">
            <input
              ref={inputRef}
              id="my-input"
              className="input"
              type="text"
              placeholder="Text input"
            />

            <input
              ref={inputRef2}
              className="input"
              type="text"
              placeholder="Text Input 2"
            />

            <input
              ref={inputRef3}
              className="input"
              type="text"
              placeholder="Text Input 3"
            />
            <br />
            <br />
            <br />

            <button onClick={focusOnInput} className="button is-success">
              Focus on input
            </button>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Store of Value</p>
        </header>
        <div className="card-content">
          <div className="content">
            <h1>Count: {count}</h1>
            <h3>Double Count: {doubleCount}</h3>
            <h5>Triple Count: {tripleCount}</h5>
            <button onClick={incrementCount} className="button is-success">
              Increment count
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
