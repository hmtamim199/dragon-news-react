import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideBar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('categories.json')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])
  return (
    <div>
      <h2 className="text-2xl">left side bar</h2>
      {
        categories.map(category => <Link
          className="block  p-4 text-2xl font-semibold"
          to={`/category/${category.id}`}
          key={category.id}
        >{category.name}</Link>)
      }
    </div>
  );
};

export default LeftSideBar;