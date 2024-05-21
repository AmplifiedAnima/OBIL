import { BlogPosts } from '../../components/Content/BlogContent/BlogPosts';
import { NavBarComponent } from '../../components/NavBarComponent/NavBarComponent';

export const HomePage = () => {
  return (
    <>
      <NavBarComponent />
      <div className="mt-24 ml-4 mr-4 flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <BlogPosts />
        </div>
      </div>
    </>
  );
};
