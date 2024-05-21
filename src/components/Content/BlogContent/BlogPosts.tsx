import { mockDataBlodPosts } from './mockdata/mockdata';

export const BlogPosts = () => {
  return (
    <div className="grid gap-8">
      {mockDataBlodPosts.map(post => {
        return (
          <div
            className="bg-lightPurple border-darkPurple border-solid border-2 p-6 rounded-lg shadow-md"
            key={post.name}
          >
            <h2 className="text-2xl text-darkGrey font-bold mb-2">
              {post.name}
            </h2>
            <p className="text-darkPurple -700 mb-4">{post.description}</p>
            <p className="text-sm text-lightGrey -500">
              {post.date.toString()}
            </p>
          </div>
        );
      })}
    </div>
  );
};
