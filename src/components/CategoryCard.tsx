
import { Link } from 'react-router-dom';

type CategoryCardProps = {
  title: string;
  image: string;
  path: string;
  count: number;
};

const CategoryCard = ({ title, image, path, count }: CategoryCardProps) => {
  return (
    <Link to={path} className="group block">
      <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-lg transition-shadow">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
        <img 
          src={image} 
          alt={title}
          className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm opacity-90">{count} products</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
