import React, { useEffect, useState, useRef, useCallback } from "react";
import { Stack } from "react-bootstrap";
import "./rangeslider.style.scss";

interface IRangeSlider {
  min: number;
  max: number;
  onChange: (event: any) => void;
}

const RangeSlider = ({ min, max, onChange }: IRangeSlider) => {
  const [minVal, setMinVal] = useState<number>(min);
  const [maxVal, setMaxVal] = useState<number>(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLInputElement>(null);

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current?.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <>
      <div className="slider-wrapper">
        <div className="slider-value">
          <p>Slider</p>
          <Stack direction="horizontal">
            <div className="slider-left-value">{minVal}</div>
            <p> - </p>
            <div className="slider-right-value">{maxVal}</div>
          </Stack>
        </div>
        <div className="slider">
          <div className="slider-track" />
          <div ref={range} className="slider-range" />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          ref={minValRef}
          onChange={(event) => {
            const value = Math.min(+event.target.value, maxVal - 1);
            setMinVal(value);
            event.target.value = value.toString();
          }}
          className={
            minVal > max - 100
              ? "thumb thumb--zindex-3 thumb--zindex-5"
              : "thumb thumb--zindex-3"
          }
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          ref={maxValRef}
          onChange={(event) => {
            const value = Math.max(+event.target.value, minVal + 1);
            setMaxVal(value);
            event.target.value = value.toString();
          }}
          className="thumb thumb--zindex-4"
        />
      </div>
    </>
  );
};

export { RangeSlider };
