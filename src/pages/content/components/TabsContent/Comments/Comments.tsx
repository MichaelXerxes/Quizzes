import React from "react";
import CommentBox from "../../CommentBox/CommentBox";
interface Props {}
const Comments: React.FC<Props> = ({}) => {
  return (
    <div className="flex  flex-col items-center w-full justify-center ">
      <CommentBox commentAuthor="Michael" rateStars={5} comment="hhhhh" />
      <CommentBox commentAuthor="Michael" rateStars={5} comment="hhhhh" />
      <CommentBox commentAuthor="Michael" rateStars={5} comment="hhhhh" />
    </div>
  );
};

export default Comments;
