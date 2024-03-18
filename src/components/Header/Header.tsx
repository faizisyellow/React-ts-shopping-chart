import { FC } from "react";
import { FaShoppingCart } from "react-icons/fa";

interface HeaderProps {
  onCartOpen: () => void;
}

export const Header: FC<HeaderProps> = (props) => {
  return (
    <header className="w-full flex justify-between shadow-md p-3 px-6">
      <h2 className="font-bold my-auto text-lg ">Let's Shopping</h2>
      <div className="flex gap-7">
        <div onClick={() => props.onCartOpen()} className="my-auto relative cursor-pointer">
          <FaShoppingCart size={"1.2rem"} color="grey" />
        </div>
        <div
          className="border border-gray-500 w-min p-1.5 px-2
       rounded-full"
        >
          FM
        </div>
      </div>
    </header>
  );
};
