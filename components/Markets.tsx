"use client";

import { useInViewport } from "ahooks";
import { useRef } from "react";

const CoinMarkets = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const scroll = useInViewport(() => document.querySelector(".coin-markets"), {
    root: () => document.querySelector(".coin-grid"),
  });
  return (
    <div id="markets" className="coin-markets" ref={ref}>
      <div className="flex items-center flex-col">
        <div className="">Markets</div>
        <div className="">Markets</div>
        <div className="">Markets</div>
        <p>{JSON.stringify(scroll)}</p>

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

export { CoinMarkets, CoinMarkets as default };
