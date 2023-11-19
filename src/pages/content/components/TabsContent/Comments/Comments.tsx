import React from "react";
import CommentBox from "../../CommentBox/CommentBox";
import TabsLabelViewMore from "../../TabsLabelViewMore/TabsLabelViewMore";
interface Props {}
const Comments: React.FC<Props> = ({}) => {
  return (
    <div className="flex  flex-col items-center w-[450px] justify-center pr-2">
      <TabsLabelViewMore labelText="Comments" />
      <CommentBox commentAuthor="Michael" rateStars={5} comment="hhhhh" />
      <CommentBox commentAuthor="Michael" rateStars={5} comment="hhhhh" />
      <CommentBox commentAuthor="Michael" rateStars={5} comment="hhhhh" />
    </div>
  );
};

export default Comments;
