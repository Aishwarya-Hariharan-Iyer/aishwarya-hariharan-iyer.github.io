"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

interface TimelineEntry {
  title: string;
  company: string;
  duration: string;
  content: React.ReactNode;
  professional?: boolean;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [showProfessionalOnly, setShowProfessionalOnly] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const filteredData = showProfessionalOnly
    ? data.filter((item) => item.professional)
    : data;

  return (
    <div
  className="w-full bg-transparent dark:bg-neutral-950 font-sans md:px-10"
  ref={containerRef}
>
  <div className="flex justify-start items-center mb-4">
    <FormControlLabel
      control={
        <Switch
          checked={showProfessionalOnly}
          onChange={() => setShowProfessionalOnly(!showProfessionalOnly)}
          color="primary"
          sx={{
            transform: "scale(1.5)", // Scale up the switch
            '& .MuiSwitch-switchBase.Mui-checked': {
              color: '#fff', // Set the thumb color to white when checked
            },
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
              backgroundColor: '#fff', // Set the track color to white when checked
            },
          }}
        />
      }
      label={
        <div className="flex items-center space-x-2 text-white text-3xl pl-4 font-bold">
          <span>{!showProfessionalOnly ? "All" : "Work"}</span>
        </div>
      }
      labelPlacement="end" 
      className="flex flex-row"
    />
  </div>

  <div ref={ref} className="relative max-w-7xl mx-auto pb-8">
    {filteredData.map((item, index) => (
      <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
          <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
            <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
          </div>
          <div className="grid md:pl-20 md:gap-2">
            <h3 className="hidden md:block text-2xl md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 whitespace-nowrap">
              {item.title}
            </h3>
            <div className="text-sm md:text-lg text-neutral-400 dark:text-neutral-600 whitespace-nowrap">
              <p>{item.company}</p>
              <p>{item.duration}</p>
            </div>
          </div>
        </div>

        <div className="relative pl-30 md:pl-80 w-full flex content-stretch">
          {item.content}
        </div>
      </div>
    ))}
    <div
      style={{
        height: height + "px",
      }}
      className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
    >
     <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
    </div>
  </div>
</div>

  );
};
