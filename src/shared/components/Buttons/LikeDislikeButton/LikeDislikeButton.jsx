import React from "react";

import "./LikeDislikeButton.scss";

const LikeDislikeButton = (props) => {
  const { isDislike, count, ...otherProps } = props;
  return (
    <button {...otherProps} className="like-dislike-button">
      <div className="like-dislike-button__likes-count">{count}</div>
      <img
        className={`like-dislike-button__img ${isDislike ? "like-dislike-button__img--reverse" : ""}`}
        src="/icons/like2.svg"
        alt="like img"
      />
    </button>
  );
};

export default LikeDislikeButton;
