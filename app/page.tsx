"use client";

import CoinAbout from "@/components/About";
import CoinAnalytics from "@/components/Analytics";
import CoinChart from "@/components/Chart";
import CoinCommunity from "@/components/Community";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CoinMarkets from "@/components/Markets";
import CoinNews from "@/components/News";
import Stats from "@/components/Stats";
import CoinTabs from "@/components/Tabs";
import "@/styles/index.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="coin-grid">
        <Stats />
        <CoinTabs />
        <CoinChart />
        <CoinCommunity />
        <CoinMarkets />
        <CoinNews />
        <CoinAbout />
        <CoinAnalytics />
      </main>
      <Footer />
    </>
  );
}
