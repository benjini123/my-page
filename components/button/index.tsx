import { WifiIcon } from "benja/media";
import { useState } from "react";

export function FollowButton({ className }: any) {
  const [display, setDisplay] = useState(false);

  return (
    <button
      onClick={() => {
        setDisplay(!display);
      }}
      className={className + ` ${display ? "following" : "follow"}`}>
      <span>
        <h5>{display ? "Following" : "Follow"}</h5>
      </span>
      <WifiIcon className="wifiIcon" />
    </button>
  );
}
