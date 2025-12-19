"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils"; // Assuming you have this util from your previous context

export const TextReveal = ({
  text,
  revealText,
  children,
  className,
  textClassName,
  revealTextClassName,
  baseTextClassName,
  barClassName,
  revealTextStyle,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
  textClassName?: string;
  revealTextClassName?: string;
  baseTextClassName?: string;
  barClassName?: string;
  revealTextStyle?: React.CSSProperties;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const containerRef = useRef<HTMLDivElement | any>(null);
  const [isMouseOver, setIsMouseOver] = useState(false);

  function mouseMoveHandler(event: any) {
    if (!containerRef.current) return;

    const { left, width } = containerRef.current.getBoundingClientRect();
    const { clientX } = event;
    const relativeX = clientX - left;
    const percentage = (relativeX / width) * 100;

    setWidthPercentage(Math.max(0, Math.min(100, percentage)));
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }
  function mouseEnterHandler() {
    setIsMouseOver(true);
  }

  function touchMoveHandler(event: React.TouchEvent<HTMLDivElement>) {
    if (!containerRef.current) return;

    const { left, width } = containerRef.current.getBoundingClientRect();
    const clientX = event.touches[0]!.clientX;
    const relativeX = clientX - left;
    const percentage = (relativeX / width) * 100;

    setWidthPercentage(Math.max(0, Math.min(100, percentage)));
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={mouseEnterHandler}
      onTouchEnd={mouseLeaveHandler}
      onTouchMove={touchMoveHandler}
      ref={containerRef}
      className={cn(
        "relative flex flex-col items-center justify-center w-full overflow-hidden",
        className
      )}
    >
      {children}

      <div className="relative flex items-center overflow-hidden w-full max-w-fit">
        {/* REVEALED TEXT LAYER */}
        <motion.div
          style={{
            width: "100%",
          }}
          animate={
            isMouseOver
              ? {
                opacity: widthPercentage > 0 ? 1 : 0,
                clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
              }
              : {
                clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
              }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute z-20 will-change-transform"
        >
          <p
            style={{
              textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
              ...revealTextStyle,
            }}
            className={cn(
              "text-base sm:text-[3rem] py-10 font-bold whitespace-nowrap",
              textClassName,
              revealTextClassName ? revealTextClassName : "text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300"
            )}
          >
            {revealText}
          </p>
        </motion.div>

        {/* THE LINE LAYER */}
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className={cn(
            "absolute inset-y-0 w-[2px] z-50 will-change-transform",
            barClassName ? barClassName : "bg-gradient-to-b from-transparent via-neutral-800 to-transparent w-[8px]"
          )}
        ></motion.div>

        {/* BASE TEXT LAYER */}
        <div className="overflow-hidden">
          <p className={cn(
            "text-base sm:text-[3rem] py-10 font-bold whitespace-nowrap",
            textClassName,
            baseTextClassName ? baseTextClassName : "bg-clip-text text-transparent bg-[#323238]"
          )}>
            {text}
          </p>
          <MemoizedStars />
        </div>
      </div>
    </div>
  );
};

// ... Keep Stars and MemoizedStars as they were ...

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(80)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block"
        ></motion.span>
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);
