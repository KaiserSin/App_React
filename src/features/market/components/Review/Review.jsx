import React from "react";

import TextButton from "@/shared/components/Buttons/TextButton/TextButton";
import LikeDislikeButton from "@shared/components/Buttons/LikeDislikeButton/LikeDislikeButton";

import "./Review.scss";

const Review = (props) => {
  const {
    avatarSrc,
    authorName,
    authorRating,
    summary,
    children,
    shopRate,
    authorRate,
    likesCount,
    dislikesCount,
    classes,
  } = props;
  return (
    <div className={`review ${classes?.root ? classes.root : ""}`}>
      <header className="review-header">
        <div className="review-header__block-img">
          <img
            className="review-header__img"
            src={avatarSrc ? avatarSrc : "/common-images/avatarPlaceholder.png"}
            alt="avatar"
          />
        </div>
        <div className="review-heading">
          <div className="review-author">
            <div className="review-author__name">{authorName}</div>
            <div className="review-author__rating">
              <img className="review-author__rating-star" src="/icons/yellowStar.svg" alt="" /> {authorRating}
            </div>
          </div>
          <div className="review__summary">{summary}</div>
        </div>
        <div className="review__copy">
          <TextButton>
            <img className="review__copy-img" src="/icons/copy.svg" alt="" />
            Скопировать
          </TextButton>
        </div>
      </header>
      <div className="review-body">
        <div className="review-body__text">{children}</div>
        <button className="review-body__more">Читать дальше</button>
        <div className="review-body__author-rate">
          <img src="/icons/yellowStar.svg" alt="" />
          <img src="/icons/yellowStar.svg" alt="" />
          <img src="/icons/yellowStar.svg" alt="" />
          <img src="/icons/yellowStar.svg" alt="" />
          <img src="/icons/yellowStar.svg" alt="" />
        </div>
      </div>
      <footer className="review-footer">
        <div className="review-shop-rate">
          Оценка магазина
          <div className="review-shop-rate__stars">
            <img src="/icons/yellowStar.svg" alt="" />
            <img src="/icons/yellowStar.svg" alt="" />
            <img src="/icons/yellowStar.svg" alt="" />
            <img src="/icons/yellowStar.svg" alt="" />
            <img src="/icons/grayStar.svg" alt="" />
          </div>
        </div>
        <div className="review-footer__actions">
          <TextButton>
            <img src="/icons/dialog.svg" alt="" />
            Открыть диалог с "{authorName}"
          </TextButton>
          <div className="review-footer__like-dislike">
            <LikeDislikeButton count={likesCount} />
            <LikeDislikeButton count={dislikesCount} isDislike={true} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Review;
