import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const Like = () => {
  const [Status, setStatus] = useState(false);

  return (
    <div>
      {Status ? (
        <AiFillHeart
          size="40"
          color="red"
          onClick={() => {
            setStatus(!Status);
          }}
        />
      ) : (
        <AiOutlineHeart
          size="40"
          color="red"
          onClick={() => {
            setStatus(!Status);
          }}
        />
      )}
    </div>
  );
};

export default Like;
