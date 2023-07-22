type Props = {
  product: Product;
  searchedProducts: never[];
};

const SearchedResults = ({ searchedProducts }: Props) => {
  console.log(SearchedResults);
  return <div>SearchedResults</div>;
};

export default SearchedResults;
