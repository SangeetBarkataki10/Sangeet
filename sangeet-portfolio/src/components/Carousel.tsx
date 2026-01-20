"use client";

import {
  KeyboardEvent,
  ReactNode,
  TouchEvent,
  useMemo,
  useRef,
  useState,
} from "react";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type CarouselProps = {
  items: ReactNode[];
  visibleSlides?: number;
  className?: string;
};

const DRAG_TRIGGER_PX = 60;

const Carousel = ({ items, visibleSlides = 3, className = "" }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<number | null>(null);

  const maxIndex = useMemo(
    () => Math.max(0, items.length - visibleSlides),
    [items.length, visibleSlides]
  );

  const clampIndex = (index: number) => Math.max(0, Math.min(index, maxIndex));

  const goTo = (index: number) => setCurrentIndex(clampIndex(index));
  const goNext = () => goTo(currentIndex + 1);
  const goPrev = () => goTo(currentIndex - 1);

  const slidePercent = 100 / visibleSlides;
  const baseTranslate = -(currentIndex * slidePercent);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    }
  };

  const beginDrag = (clientX: number) => {
    dragStartRef.current = clientX;
    setIsDragging(true);
  };

  const updateDrag = (clientX: number) => {
    if (!isDragging || dragStartRef.current === null) return;
    setDragOffset(clientX - dragStartRef.current);
  };

  const endDrag = () => {
    if (!isDragging) return;
    if (Math.abs(dragOffset) > DRAG_TRIGGER_PX) {
      dragOffset < 0 ? goNext() : goPrev();
    }
    setIsDragging(false);
    setDragOffset(0);
    dragStartRef.current = null;
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    updateDrag(event.touches[0].clientX);
  };

  const transformStyle = `translateX(calc(${baseTranslate}% + ${dragOffset}px))`;

  const arrowClass =
    "absolute top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full transition hover:scale-105 disabled:opacity-40";

  return (
    <div className={`relative w-full ${className} overflow-hidden items-center justify-center`}>
      <div
        className="w-full overflow-hidden mx-auto max-w-[1250px]"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Experience carousel"
      >
        <div
          className="flex select-none"
          style={{
            transform: transformStyle,
            transition: isDragging ? "none" : "transform 0.35s ease",
          }}
          onMouseDown={(event) => {
            event.preventDefault();
            beginDrag(event.clientX);
          }}
          onMouseMove={(event) => updateDrag(event.clientX)}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onTouchStart={(event) => beginDrag(event.touches[0].clientX)}
          onTouchMove={handleTouchMove}
          onTouchEnd={endDrag}
          onTouchCancel={endDrag}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ flexBasis: `${100 / visibleSlides}%` }}
            >
              
              <div>{item}</div>
            </div>
          ))}
        </div>
      </div>

      

      <button
        onClick={goPrev}
        disabled={currentIndex === 0}
        className={`${arrowClass} left-6`}
        aria-label="Previous"
      >
        <span className="relative inline-flex h-8 w-8 items-center justify-center">
          <FiChevronLeft
            size={28}
            className="text-[#1A082F] mix-blend-multiply"
            aria-hidden="true"
          />
          <FiChevronLeft
            size={28}
            className="absolute inset-0 text-[#EAA905] mix-blend-screen"
            aria-hidden="true"
          />
        </span>
      </button>

      <button
        onClick={goNext}
        disabled={currentIndex === maxIndex}
        className={`${arrowClass} right-6`}
        aria-label="Next"
      >
        <span className="relative inline-flex h-8 w-8 items-center justify-center">
          <FiChevronRight
            size={28}
            className="text-[#1A082F] mix-blend-multiply"
            aria-hidden="true"
          />
          <FiChevronRight
            size={28}
            className="absolute inset-0 text-[#EAA905] mix-blend-screen"
            aria-hidden="true"
          />
        </span>
      </button>
    </div>
  );
};

export default Carousel;
