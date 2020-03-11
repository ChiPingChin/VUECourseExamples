
import { reactive, onMounted } from '@vue/composition-api';
import fetchData from '../services/api';


const useFetchData = () => {
  const state = reactive({
    userData: {},
    isLoading: false,
  });
  onMounted(async () => {
    state.isLoading = true;
    const userData = await fetchData();
    state.userData = userData;
    state.isLoading = false;
  });
  return state;
};


export default useFetchData;
