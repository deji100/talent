import SearchIcon from "@mui/icons-material/Search";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import { useState, useEffect } from "react";

const BlogSectionOne = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const listener = (e: any) => {
      if (!e.target.closest("#burg") || e.target.closest("#burg")) {
        setToggle(false);
      }
    };

    document.body.addEventListener("click", listener);
    return () => document.body.removeEventListener("click", listener);
  }, []);
  return (
    <div className="blog-section-one">
      <div className="categories">
        <FormatListBulletedOutlinedIcon
          id="burg"
          onClick={(e) => {
            e.stopPropagation();
            setToggle((prev) => !prev);
          }}
          className="blog-burg"
        />
        <p>Categories</p>
      </div>
      {toggle && (
        <ul>
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
        </ul>
      )}
      <ul className="web">
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
      </ul>
      <div className="search">
        <input type="input" placeholder="Search" />
        <SearchIcon className="search-icon" />
      </div>
    </div>
  );
};

export default BlogSectionOne;
