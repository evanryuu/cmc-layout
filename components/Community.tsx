"use client";

import { PostData } from "@/types";
import { useInViewport, useInfiniteScroll, useRequest, useVirtualList } from "ahooks";
import { Data } from "ahooks/lib/useInfiniteScroll/types";
import { useMemo, useRef, useState } from "react";

interface Result {
  list: string[];
  nextId: string | undefined;
}
function getHeight(str: string) {
  const rows = Math.ceil(str.length / 40);
  const height = 32 * rows;
  return height;
}
const CoinCommunity = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const limit = useRef(0);
  const [value, onChange] = useState<number>(0);

  const { data, loading, loadMore, loadingMore, noMore } = useInfiniteScroll((d) => fetchData(), {
    target: containerRef,
    isNoMore: (d) => d?.nextId === limit.current + 1,
  });

  const [list, scrollTo] = useVirtualList(data?.list || [], {
    containerTarget: containerRef,
    wrapperTarget: wrapperRef,
    itemHeight: (_v, i) => getHeight(i.body),
  });
  function fetchData(): Promise<Data> {
    return fetch("https://dummyjson.com/posts?" + `skip=${data?.nextId - 1 || 0}`)
      .then((res) => res.json())
      .then((data: PostData) => {
        limit.current = data.total;
        return { list: data.posts, nextId: data.skip + data.limit + 1 };
      });
  }

  return (
    <div id="community" className="coin-community" ref={containerRef}>
      <div ref={wrapperRef}>
        {list
          ? list.map(({ data: ele }, i) => (
              <div
                data-index={ele.id}
                className="flex-col"
                style={{
                  height: getHeight(ele.body),
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #e8e8e8",
                  marginBottom: 8,
                }}
                key={ele.id}
              >
                <div>id: {ele.id}</div>
                <div>{ele.body.slice(120)}</div>
                {/* Row: {ele.id}
                <div>{ele.title}</div>
                <div>{ele.body}</div> */}
                {/* {JSON.stringify(ele)} */}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export { CoinCommunity, CoinCommunity as default };
