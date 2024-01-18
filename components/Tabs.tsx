"use client";

import { useScroll, useSize, useThrottleEffect } from "ahooks";
import { Tabs } from "antd";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type ID = "#stats" | "#CoinChart" | "#markets" | "#about" | "#community" | "#news" | "#markets" | "#analytics";

const TABS: { pc: ID[]; tablet: ID[]; mobile: ID[] } = {
  pc: ["#CoinChart", "#markets", "#news", "#about", "#analytics"],
  tablet: ["#CoinChart", "#community", "#markets", "#news", "#about", "#analytics"],
  mobile: ["#stats", "#community", "#markets", "#news", "#about", "#analytics"],
};

const labels: { [k in ID]: string } = {
  "#stats": "Overview",
  "#CoinChart": "Chart",
  "#markets": "Markets",
  "#community": "Community",
  "#news": "News",
  "#about": "About",
  "#analytics": "Analytics",
};

const CoinTabs = ({ className }: { className?: string }) => {
  const [activeTab, setActiveTab] = useState("#CoinChart");
  const [currentTabs, setCurrentTabs] = useState<{ key: ID; label: string; active: boolean }[]>(
    // TABS.pc.map((tab) => ({ key: tab, label: labels[tab], active: activeTab === tab }))
    []
  );
  const windowScrolling = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [load, setLoad] = useState(false);
  const size = useSize(typeof document !== "undefined" ? document.body : null);
  const router = useRouter();
  const scroll = useScroll(() => document);
  const headerHeight = useRef(0);
  const tops = useRef<{ [k in ID]: number }>({
    "#stats": 0,
    "#CoinChart": 0,
    "#markets": 0,
    "#about": 0,
    "#community": 0,
    "#news": 0,
    "#analytics": 0,
  });
  const updateBlocksOffsetTop = () => {
    headerHeight.current = Number(getComputedStyle(document.querySelector(".coin-tabs")!).height.split("px")[0]);
    currentTabs.forEach((head) => {
      const el = (document.querySelector(head.key) as HTMLElement)!;
      if (el) {
        tops.current[head.key] = Number(el.offsetTop);
      }
    });
  };

  const updateCurrentTab = () => {
    if (currentTabs.length) {
      // TODO currently we don't know why we need to add 16 for the height
      // remove it or find the reason
      const height = Number(scroll?.top!) - headerHeight.current - 64;
      if (height < tops.current[currentTabs[0]!.key]) return setActiveTab(currentTabs[0]!.key);
      for (let i = 0; i < currentTabs.length; i++) {
        const cur = currentTabs[i]!;
        const next = currentTabs[i + 1];
        if (next) {
          if (height > tops.current[cur.key] && height < tops.current[next.key]) {
            setActiveTab(cur.key);
            break;
          }
        } else {
          if (height > tops.current[cur.key]) setActiveTab(cur.key);
        }
      }
    }
  };

  useThrottleEffect(
    () => {
      if (size?.width! >= 1280) {
        setCurrentTabs(TABS.pc.map((tab) => ({ key: tab, label: labels[tab], active: activeTab === tab })));
      } else if (size?.width! >= 1024) {
        setCurrentTabs(TABS.tablet.map((tab) => ({ key: tab, label: labels[tab], active: activeTab === tab })));
      } else if (size?.width! < 1024) {
        setCurrentTabs(TABS.mobile.map((tab) => ({ key: tab, label: labels[tab], active: activeTab === tab })));
      }
      updateCurrentTab();
    },
    [size?.width],
    { wait: 150 }
  );

  useEffect(() => {
    setLoad(true);
    updateBlocksOffsetTop();
  }, []);

  useEffect(() => {
    if (!load) return;
    if (windowScrolling.current) return;
    updateBlocksOffsetTop();
    updateCurrentTab();
  }, [scroll?.top]);
  const handleTabChange = (data: string) => {
    updateBlocksOffsetTop();
    setActiveTab(data as ID);
    router.replace(data, { scroll: false });
    if (currentTabs.length) {
      let top = headerHeight.current + tops.current[data as ID] + 2;

      const layoutHeader = Number(getComputedStyle(document.querySelector("body > div")!).height.split("px")[0]);
      top += layoutHeader;
      if (data === currentTabs[0]!.key) {
        top = 188;
      }
      if (timer.current) {
        clearTimeout(timer.current!);
        timer.current = null;
      }
      windowScrolling.current = true;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
      timer.current = setTimeout(() => {
        windowScrolling.current = false;
        clearTimeout(timer.current!);
        timer.current = null;
      }, 1000);
    }
  };
  useEffect(() => {
    console.log(activeTab);
  }, [activeTab]);
  return (
    <div className={`coin-tabs ${className}`}>
      {currentTabs.length ? (
        <Tabs defaultActiveKey="#CoinChart" activeKey={activeTab} onTabClick={handleTabChange} items={currentTabs} />
      ) : (
        <div className="my-4 h-[32px] animate-[pulse_1s_ease-in-out_infinite] rounded-xl bg-[#141414]"></div>
      )}
    </div>
  );
};

export { CoinTabs, CoinTabs as default };
