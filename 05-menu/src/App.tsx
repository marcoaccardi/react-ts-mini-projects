import React, { useState } from "react";
import { Menu } from "./components/Menu";
import { Categories } from "./components/Categories";
import { items, MenuList } from "./data";

const allCategories = [
  "all",
  ...new Set<string>(items.map((item) => item.category)),
];
console.log(allCategories);

const App: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuList[]>(items);
  const [categories, setCategories] = useState([]);

  const filterItems = (category: string) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} categories={allCategories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
