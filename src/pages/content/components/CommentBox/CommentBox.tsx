import React from "react";
interface Props {
  commentAuthor: string;
  comment: string;
  rateStars: number;
}
const CommentBox: React.FC<Props> = ({ comment, commentAuthor, rateStars }) => {
  return (
    <div className=" flex  w-[410px] h-20 flex-col pl-2 pr-2 rounded-lg bg-stone-200">
      <div className=" flex flex-row w-[390px] h-6 justify-between ">
        <span className=" text-base text-zinc-900 ">{commentAuthor}</span>
        <div className=" flex flex-row w-30 h-10">* * * * * {rateStars}</div>
      </div>
      <div className="max-w-sm break-all line-clamp-3">
        This is a long comment that will be truncated after three lines, showing
        an ellipsis if it exceeds the maximum width and line limit... This is a
        long comment that will be truncated after three lines, showing an
        ellipsis if it exceeds the maximum width and line limit...
      </div>
    </div>
  );
};

export default CommentBox;
