import { useEffect } from 'react';
import productApi from 'api/productApi';
import Header from 'components/Header';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log('productList', productList);
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
