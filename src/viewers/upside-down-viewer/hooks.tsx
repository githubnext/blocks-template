import { useEffect } from "react";

export function useShout() {
  useEffect(() => {
    console.log("I am shouting");
  }, []);
}
