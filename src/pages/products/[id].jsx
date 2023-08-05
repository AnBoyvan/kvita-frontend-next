import { useRouter } from 'next/router';

const SingleProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return <h1>SingleProductPage</h1>;
};

export default SingleProductPage;
