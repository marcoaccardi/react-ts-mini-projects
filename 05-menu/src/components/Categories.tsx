import React from "react";

interface CategoriesProps {
  filterItems: (category: string) => void;
  categories: string[];
}

export const Categories: React.FC<CategoriesProps> = ({
  filterItems,
  categories,
}) => {
  return (
    <div className='btn-container'>
      {categories.map((category: string, index: number) => {
        return (
          <div key={index}>
            <button
              type='button'
              className='filter-btn'
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          </div>
        );
      })}
    </div>
  );
};
