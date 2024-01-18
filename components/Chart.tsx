"use client";

import { useInViewport } from "ahooks";
import { createChart, ColorType } from "lightweight-charts";
import React, { useEffect, useRef, useState } from "react";
import Tweet from "./Tweet";

const initialData = [
  { time: "2018-12-22", value: 32.51 },
  { time: "2018-12-23", value: 31.11 },
  { time: "2018-12-24", value: 27.02 },
  { time: "2018-12-25", value: 27.32 },
  { time: "2018-12-26", value: 25.17 },
  { time: "2018-12-27", value: 28.89 },
  { time: "2018-12-28", value: 25.46 },
  { time: "2018-12-29", value: 23.92 },
  { time: "2018-12-30", value: 22.68 },
  { time: "2018-12-31", value: 22.67 },
];

export const ChartComponent = (props: any) => {
  const {
    data,
    colors: {
      backgroundColor = "white",
      lineColor = "#2962FF",
      textColor = "black",
      areaTopColor = "#2962FF",
      areaBottomColor = "rgba(41, 98, 255, 0.28)",
    } = {},
  } = props;

  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");

  const chartContainerRef = useRef<any>();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      crosshair: {
        // hide the horizontal crosshair line
        horzLine: {
          visible: false,
          labelVisible: false,
        },
        // hide the vertical crosshair label
        vertLine: {
          labelVisible: false,
        },
      },
      // hide the grid lines
      grid: {
        vertLines: {
          visible: false,
        },
        horzLines: {
          visible: false,
        },
      },
      width: chartContainerRef.current.clientWidth,
      height: 300,
    });

    const container = chartContainerRef.current;

    const toolTipWidth = 80;
    const toolTipHeight = 80;
    const toolTipMargin = 15;

    // Create and style the tooltip html element
    const toolTip = document.querySelector(".tool-tip")! as HTMLDivElement;

    chart.subscribeClick((param) => {
      console.log(param);
    });
    // update tooltip
    chart.subscribeCrosshairMove((param) => {
      if (
        !param.hoveredObjectId ||
        param.point === undefined ||
        !param.time ||
        param.point.x < 0 ||
        param.point.x > container.clientWidth ||
        param.point.y < 0 ||
        param.point.y > container.clientHeight
      ) {
        toolTip.style.display = "none";
      } else {
        // time will be in the same format that we supplied to setData.
        // thus it will be YYYY-MM-DD
        const dateStr = param.time;
        toolTip.style.display = "block";
        const data = param.seriesData.get(newSeries)!;
        // @ts-ignore
        const price = data.value ?? data.close;
        setPrice(price);
        setDate(dateStr as string);

        const coordinate = newSeries.priceToCoordinate(price);
        let shiftedCoordinate = param.point.x - 50;
        if (coordinate === null) {
          return;
        }
        shiftedCoordinate = Math.max(0, Math.min(container.clientWidth - toolTipWidth, shiftedCoordinate));
        const coordinateY =
          coordinate - toolTipHeight - toolTipMargin > 0
            ? coordinate - toolTipHeight - toolTipMargin
            : Math.max(0, Math.min(container.clientHeight - toolTipHeight - toolTipMargin, coordinate + toolTipMargin));
        toolTip.style.left = shiftedCoordinate + "px";
        toolTip.style.top = "100%";
      }
    });

    chart.timeScale().fitContent();

    const newSeries = chart.addAreaSeries({
      lineColor,
      topColor: areaTopColor,
      bottomColor: areaBottomColor,
    });
    newSeries.setData(initialData);

    newSeries.setMarkers([
      {
        time: "2018-12-29",
        position: "belowBar",
        color: "red",
        shape: "circle",
        id: "id123",
        text: "@ElonMusk",
        size: 1,
      },
    ]);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]);

  return (
    <div className="relative">
      <Tweet date={date} price={price} className="tool-tip hidden absolute z-[1000]" />
      <div ref={chartContainerRef} />
    </div>
  );
};

const CoinChart = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const scroll = useInViewport(ref);
  return (
    <div id="chart" className="coin-charts relative" ref={ref}>
      <ChartComponent data={initialData} />
      <p>{JSON.stringify(scroll)}</p>
    </div>
  );
};

export { CoinChart, CoinChart as default };
