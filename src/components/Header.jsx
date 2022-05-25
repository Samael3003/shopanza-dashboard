import React from "react";

const Header = ({ category, title }) => {
  return (
    <div className="mb-10 dark:text-gray-200 dark:bg-secondary-dark-bg">
      <p className="text-gray-400 dark:text-gray-200 dark:bg-secondary-dark-bg">
        {category}
      </p>
      <p className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-gray-200 dark:bg-secondary-dark-bg">
        {title}
      </p>
    </div>
  );
};

export default Header;