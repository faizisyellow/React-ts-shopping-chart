import React from "react";
import { MdStarRate } from "react-icons/md";
import { useAppDispatch } from "../../redux/store/store";
import { addItem } from "../../redux/slice/cartSlice";

interface ProductProps {
  item: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };

  onAddItem: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Product: React.FC<ProductProps> = (props) => {
  const dispatch = useAppDispatch();
  const { id, category, image, price, title } = props.item;

  const handleAddCart = () => {
    const newItem = { id, category, image, price, title, quantity: 1 };
    dispatch(addItem(newItem));
    props.onAddItem(true);
  };
  return (
    <div className="w-56 shadow-md shadow-slate-300 p-2 rounded-md">
      <img className="w-full h-60 object-cover mb-4" src={props.item.image} alt={props.item.title} />
      <p className="p-1 text-medium truncate line-clamp-2 whitespace-normal overflow-hidden">{props.item.title}</p>
      <div className="p-1 flex justify-between">
        <p className="my-auto font-medium">${props.item.price}</p>
        <div className="flex">
          <MdStarRate className="text-yellow-500" />
          <span className="text-sm ps-1">{props.item.rating.rate}</span>
        </div>
      </div>
      <button onClick={handleAddCart} className="bg-blue-500 p-2 w-full rounded-md mt-2 text-white">
        Buy Now
      </button>
    </div>
  );
};
