import React from "react";
interface Props {
  commentAuthor: string;
  comment: string;
  rateStars: number;
}
const CommentBox: React.FC<Props> = ({ comment, commentAuthor, rateStars }) => {
  return (
    <div className=" flex  w-[410px] h-[120px] flex-col pl-4 pr-5 rounded-lg bg-gray-100 mt-3 mb-3">
      <div className=" flex flex-row w-[390px] h-6 justify-between mt-2 mb-3">
        <span className=" text-base text-zinc-900 ">{commentAuthor}</span>
        <div className=" flex flex-row  h-10 mr-4">* * * * * {rateStars}</div>
      </div>
      <div className="max-w-sm break-words line-clamp-3 text-sm text-gray-400">
        This is a long comment that will be truncated after three lines, showing
        an ellipsis if it exceeds the maximum width and line limit. This is a
        long comment that will be truncated after three lines, showing an
        ellipsis if it exceeds the maximum width and line limit...
      </div>
    </div>
  );
};

export default CommentBox;
