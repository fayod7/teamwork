import Hero from "../../components/hero/Hero";
import HomeType from "../../components/home-type/HomeType";
import Products from "../../components/products/Products";
import Skeleton from "../../components/products/Skeleton";
import { useFetch } from "../../hooks/useFetch";
import { useGetProducts } from "../../store/useGetProducts";
const Home = () => {
  const { count } = useGetProducts();
  const { data, error, loading } = useFetch("/products", { limit: count });
  return (
    <div>
      <Hero />
      <HomeType />
      {error && (
        <p className="text-red text-center text-[27px]">something went wrong</p>
      )}
      {loading ? <Skeleton /> : <Products data={data?.products} />}
    </div>
  );
};

export default Home;
