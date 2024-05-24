import { BlogPosts } from '../../components/Content/BlogContent/BlogPosts';
import { NavBarComponent } from '../../components/NavBarComponent/NavBarComponent';

export const HomePage = () => {
  return (
    <>
      <NavBarComponent />
      <div className="mt-24 mx-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=" w-full md:w-3/4">
          <BlogPosts />
        </div>{' '}
        <div className=" w-full md:w-1/2">
          <BlogPosts />
        </div>
      </div>
    </>
  );
};
