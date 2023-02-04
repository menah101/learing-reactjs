import { useEffect } from 'react';
import productApi from 'api/productApi';
import Header from 'components/Header';
import { useSnackbar } from 'notistack';
import { Button } from '@material-ui/core';

function App() {
  const { enqueueSnackbar } = useSnackbar();

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

  const showNoti = () => {
    enqueueSnackbar('Register successfully', { variant: 'success' });
  };

  return (
    <div className="App">
      <Header />

      <Button onClick={showNoti}>Show noti</Button>
    </div>
  );
}

export default App;
