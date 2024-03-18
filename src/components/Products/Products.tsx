import { FC } from "react";
import { Product } from "../Product/Product";
import { useAppSelector } from "../../redux/store/store";
interface ProductsProps {
  onAddItem: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Products: FC<ProductsProps> = (props) => {
  const products = useAppSelector((state) => state.product.products);

  return (
    <div className="px-5 mt-5 flex flex-wrap  gap-6">
      {products.map((item) => (
        <Product onAddItem={props.onAddItem} key={item.id} item={item} />
      ))}
    </div>
  );
};
