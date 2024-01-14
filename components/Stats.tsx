"use client";

import { useInViewport } from "ahooks";
import { useRef } from "react";

const CoinStats = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const scroll = useInViewport(ref);
  return (
    <div id="stats" className="coin-stats" ref={ref}>
      <div className="">Stats</div>
      <div className="">Stats</div>
      <div className="">Stats</div>
      <p>{JSON.stringify(scroll)}</p>
      <div className="flex items-center flex-col">
        <div className="bg-slate-300 rounded-full w-6 h-6"></div>
        <div>Bitcoin</div>
        <div className="text-slate-600">BTC</div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reiciendis officia nihil itaque doloribus
          quae distinctio non qui, suscipit nulla voluptas unde id repellendus rem quam, saepe soluta animi. Ducimus?
        </div>
      </div>
    </div>
  );
};

export { CoinStats, CoinStats as default };
