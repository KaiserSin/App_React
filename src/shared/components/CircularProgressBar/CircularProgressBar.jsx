import React from "react";

const CircularProgressBar = ({
  size = 100,
  progress = 0,
  strokeWidth = 10,
  progressColor = "#CE0000",
  backgroundColor = "#e6e6e6",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size}>
      {/* Фоновая окружность */}
      <circle cx={size / 2} cy={size / 2} r={radius} stroke={backgroundColor} strokeWidth={strokeWidth} fill="none" />
      {/* Прогресс (красная дуга) */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={progressColor}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="butt"
        transform={`rotate(90 ${size / 2} ${size / 2})`} // Начало снизу и по часовой стрелке
      />
    </svg>
  );
};

export default CircularProgressBar;
