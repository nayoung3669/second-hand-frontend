import styled from "styled-components";
import Details from "../../components/details/Details";
import { useNavigate, useParams } from "react-router-dom";
import CommentsContainer from "../comments/CommentsContainer";

import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getPost } from "../../api/posts";

const DetailContainer = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const [currImgIndex, setCurrImgIndex] = useState(0);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await getPost(id);
      setPost(response[0]);
    };
    fetchPost();
  }, [id]);

  const onIncreaseIdx = () => {
    if (post?.imgs && currImgIndex >= post.imgs.length - 1) {
      toast.warn("마지막 사진입니다.");
    } else {
      setCurrImgIndex(currImgIndex + 1);
    }
  };
  const onDecreaseIdx = () => {
    if (post?.imgs && currImgIndex <= 0) {
      toast.warn("첫번째 사진입니다.");
    } else {
      setCurrImgIndex(currImgIndex - 1);
    }
  };

  const onEdit = () => {
    navigate(`/write/${id}`);
  };

  const onDelete = () => {};

  if (!post) {
    //수정필요
    return <DetailBlock>로딩중...</DetailBlock>;
  }

  return (
    <DetailBlock>
      <Details
        post={post}
        currImgIndex={currImgIndex}
        onIncreaseIdx={onIncreaseIdx}
        onDecreaseIdx={onDecreaseIdx}
        onEdit={onEdit}
        onDelete={onDelete}
      />
      <CommentsContainer comments={post.commentList} />
      <ToastContainer position={toast.POSITION.TOP_CENTER} />
    </DetailBlock>
  );
};

export default DetailContainer;

const DetailBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 550px;
    height: 350px;
    border-radius: 5px;
  }
`;
