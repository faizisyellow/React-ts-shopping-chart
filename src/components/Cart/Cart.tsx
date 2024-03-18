import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store/store";
import { decreaseItem, increaseItem, removeAllItem, removeItem } from "../../redux/slice/cartSlice";

interface CartProps {
  onCloseCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Cart: React.FC<CartProps> = (props) => {
  const carts = useAppSelector((state) => state.cart.carts);
  const dispatch = useAppDispatch();

  const handleIncrease = (id: number) => {
    dispatch(increaseItem(id));
  };
  const handleDecrease = (id: number) => {
    dispatch(decreaseItem(id));
  };
  const handleRemoveAll = () => {
    dispatch(removeAllItem());
    props.onCloseCart(false);
  };
  const handleRemove = (id: number) => {
    dispatch(removeItem(id));
  };
  return (
    <div className="w-[50%] bg-white absolute right-0 top-12  mr-6 h-min mt-6 p-3 rounded-md shadow-md">
      <div className="flex justify-between items-center">
        <h4 className="font-medium">Your cart</h4>
        <p onClick={handleRemoveAll} className="underline text-red-500 text-sm cursor-pointer">
          Remove All
        </p>
      </div>
      {carts.map((cart) => (
        <div key={cart.id} className="w-full flex gap-3 mt-7 justify-between items-center">
          <div className="flex gap-3">
            <img className="w-10 flex-shrink-0 object-contain" src={cart.image} alt={cart.title} />
            <div className="flex flex-col justify-start">
              <h4 className="font-medium">{cart.title.slice(0, 11)}...</h4>
              <p className="text-xs text-slate-300">{cart.category}</p>
            </div>
          </div>

          <div className="flex items-start ">
            <span onClick={() => handleIncrease(cart.id)} className="text-sm font-medium rounded-[50%] p-0.5 px-2 text-center cursor-pointer bg-slate-300">
              +
            </span>
            <p className="px-4">{cart.quantity}</p>
            <span onClick={() => handleDecrease(cart.id)} className="text-sm font-medium rounded-[50%] p-0.5 px-2 text-center cursor-pointer bg-slate-300">
              -
            </span>
          </div>
          <div className="mb-2.5">
            <p className="font-semibold">${cart.price.toFixed(2)}</p>
            <p onClick={() => handleRemove(cart.id)} className="underline text-xs text-red-500 cursor-pointer">
              Remove
            </p>
          </div>
        </div>
      ))}
      <footer className="flex flex-col items-end gap-4 border-t mt-6 py-2">
        <div className="">
          <span className="mx-4 font-semibold">Total</span>
          <span className="font-medium text-lg">$234</span>
        </div>
        <button className="bg-blue-500 p-2 w-max rounded-md text-white">Check Out</button>
      </footer>
    </div>
  );
};
