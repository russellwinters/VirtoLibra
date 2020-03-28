import { useState } from "react";

//This function manages the calls from the stack

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([]);
  const [mode, setMode] = useState(initial);
  // The transition function adds a mode to the call stack
  function transition(newMode) {
    setHistory(history.concat(mode));
    setMode(newMode);
  }
  // The back function removes a mode from the stack
  function back() {
    if (history.length > 0) {
      setMode(history[history.length - 1]);
      setHistory(prev => [...prev.slice(0, -1)]);
    }
  }

  return { mode, transition, back };
}
