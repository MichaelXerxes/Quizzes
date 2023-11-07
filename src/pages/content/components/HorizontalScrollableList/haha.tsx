import React, { useRef, useState, useEffect } from "react";

// Types for the starting position of the mouse/touch
type StartPosition = {
  startX: number;
  scrollLeft: number;
};

const HorizontalScroll: React.FC = () => {
  const [isDown, setIsDown] = useState(false);
  const [startPos, setStartPos] = useState<StartPosition>({
    startX: 0,
    scrollLeft: 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDown(true);
    setStartPos({
      startX: e.pageX - containerRef.current!.offsetLeft,
      scrollLeft: containerRef.current!.scrollLeft,
    });
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current!.offsetLeft;
    const walk = (x - startPos.startX) * 3; //scroll-fast
    containerRef.current!.scrollLeft = startPos.scrollLeft - walk;
  };

  // Touch events handlers, similar to mouse events, to support iOS
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDown(true);
    setStartPos({
      startX: e.touches[0].pageX - containerRef.current!.offsetLeft,
      scrollLeft: containerRef.current!.scrollLeft,
    });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - containerRef.current!.offsetLeft;
    const walk = (x - startPos.startX) * 3;
    containerRef.current!.scrollLeft = startPos.scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDown(false);
  };

  return (
    <div
      ref={containerRef}
      style={{ overflowX: "auto", cursor: isDown ? "grabbing" : "grab" }}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Your content here */}
    </div>
  );
};

export default HorizontalScroll;
