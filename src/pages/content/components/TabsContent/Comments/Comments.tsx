import React from "react";
import CommentBox from "../../CommentBox/CommentBox";
interface Props {}
const Comments: React.FC<Props> = ({}) => {
  return (
    <div className="flex w-full justify-center  bg-slate-500 ">
      <CommentBox commentAuthor="Michael" rateStars={5} comment="hhhhh" />
    </div>
  );
};

export default Comments;
