import { RiThumbDownLine, RiThumbUpFill } from "@remixicon/react";

const Tweet = (props: { date: string; price: string | number; className?: string }) => {
  return (
    <div className={`max-w-[454px] ${props.className || ""}`}>
      <div className="info flex items-center justify-between p-6">
        <div className="author">@ElonMusk</div>
        <div className="time text-slate-600">20 hrs ago</div>
      </div>
      <div>
        <div>{props.date}</div>
        <div>{props.price}</div>
      </div>
      <div className="content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam ab consequatur corporis culpa doloremque impedit
        dolores odit officiis aliquam magnam accusantium totam cumque quae, perferendis fuga sapiente at? Amet,
        voluptatem.
      </div>
      <div className="footer flex items-center justify-between">
        <div className="show-more px-3 py-2 rounded-xl bg-slate-800 text-white">Show more</div>
        <div className="like-conditions flex items-center">
          <div className="likes flex items-center">
            <RiThumbUpFill /> 3
          </div>
          <div className="dislikes flex items-center">
            <RiThumbDownLine /> 5
          </div>
        </div>
      </div>
    </div>
  );
};

export { Tweet, Tweet as default };
