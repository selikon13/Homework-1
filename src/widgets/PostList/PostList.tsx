import React from 'react';
import PostCard from '../../entities/post/ui/PostCard';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

const mockPosts: Post[] = [
  {
    id: 1,
    title: 'Первый пост',
    content: 'Содержание первого поста',
    author: 'Исхаков Эдуард',
    date: '10-10-2025'
  },
  {
    id: 2,
    title: 'Второй пост',
    content: 'Содержание второго поста',
    author: 'Эдуард Исхаков',
    date: '11-10-2025'
  },
  {
    id: 3,
    title: 'Третий пост',
    content: 'Содержание третьего поста',
    author: 'Исхаков Эдуард',
    date: '12-10-2025'
  }
];

const PostList: React.FC = () => {
  return (
    <div className="post-list">
      <h2>Список постов</h2>
      {mockPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
