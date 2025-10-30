import React from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <div className="post-meta">
        <span>Автор: {post.author}</span>
        <span>Дата: {post.date}</span>
      </div>
    </div>
  );
};

export default PostCard;
