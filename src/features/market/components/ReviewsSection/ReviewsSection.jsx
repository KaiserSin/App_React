import React from "react";

import { useGetProductQuery } from "@/redux/reducers/marketApi";
import Review from "../Review/Review";
import "./ReviewsSection.scss";
import SwiftMartAIBlock from "@shared/components/SwiftMartAIBlock/SwiftMartAIBlock";

const ReviewsSection = () => {
  const { data } = useGetProductQuery();

  return (
    <section className="reviews">
      <div className="reviews__container">
        <h2 className="reviews__title">Отзывы о товаре и магазине</h2>
        <div className="reviews-media">
          <div className="reviews-media__block-media">
            <img className="reviews-media__img" src="/product-page-images/reviewPhoto1.jpeg" alt="" />
          </div>
          <div className="reviews-media__block-media">
            <img className="reviews-media__img" src="/product-page-images/reviewPhoto2.jpeg" alt="" />
          </div>
          <div className="reviews-media__block-media reviews-media__play">
            <img className="reviews-media__img" src="/product-page-images/reviewPhoto3.jpeg" alt="" />
          </div>
          <div className="reviews-media__block-media">
            <img className="reviews-media__img" src="/product-page-images/reviewPhoto1.jpeg" alt="" />
          </div>
          <div className="reviews-media__block-media">
            <img className="reviews-media__img" src="/product-page-images/reviewPhoto2.jpeg" alt="" />
          </div>
          <div className="reviews-media__block-media reviews-media__play">
            <img className="reviews-media__img" src="/product-page-images/reviewPhoto3.jpeg" alt="" />
          </div>
          <div className="reviews-media__block-media">
            <img className="reviews-media__img" src="/product-page-images/reviewPhoto1.jpeg" alt="" />
          </div>
          <div className="reviews-media__block-media">
            <img className="reviews-media__img" src="/product-page-images/reviewPhoto2.jpeg" alt="" />
          </div>
          <div data-media-count="12+" className="reviews-media__block-media reviews-media__more">
            <img className="reviews-media__img" src="/product-page-images/reviewPhoto3.jpeg" alt="" />
          </div>
        </div>
        <div className="reviews-items">
          <SwiftMartAIBlock title="Анализ отзывов от GPT" classes={{ root: "reviews__ai-block" }}>
            Очень удобная и приятная на ощупь мышь, довольно легкая и бесшумная, на любой поверхности комфортно
            чуствуется, приятная подсветка и качество материалов.
          </SwiftMartAIBlock>
          <Review
            classes={{ root: "reviews-items__item" }}
            dislikesCount="1"
            likesCount="4"
            authorRating="4.5"
            authorName="Марта"
            summary={"Хороша мыш!"}>
            Очень удобная и приятная на ощупь мышь, довольно легкая и бесшумная.
          </Review>
          <Review
            classes={{ root: "reviews-items__item" }}
            dislikesCount="1"
            likesCount="4"
            authorRating="4.5"
            authorName="Марта"
            summary={"Хороша мыш!"}>
            Очень удобная и приятная на ощупь мышь, довольно легкая и бесшумная.
          </Review>
          <Review
            classes={{ root: "reviews-items__item" }}
            dislikesCount="1"
            likesCount="4"
            authorRating="4.5"
            authorName="Марта"
            summary={"Хороша мыш!"}>
            Очень удобная и приятная на ощупь мышь, довольно легкая и бесшумная.
          </Review>
          <Review
            classes={{ root: "reviews-items__item" }}
            dislikesCount="1"
            likesCount="4"
            authorRating="4.5"
            authorName="Марта"
            summary={"Хороша мыш!"}>
            Очень удобная и приятная на ощупь мышь, довольно легкая и бесшумная.
          </Review>
          <Review
            classes={{ root: "reviews-items__item" }}
            dislikesCount="1"
            likesCount="4"
            authorRating="4.5"
            authorName="Марта"
            summary={"Хороша мыш!"}>
            Очень удобная и приятная на ощупь мышь, довольно легкая и бесшумная.
          </Review>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
