import axios from "axios";
import Notiflix from 'notiflix';
import getRefs from './refs';


const BASE_URL = " https://api.thecatapi.com/v1";
const refs = getRefs();



    
export function fetchBreeds(endPoint, params = {}) {
  showLoader();
  return axios
    .get(`${BASE_URL}/${endPoint}`, { params: params })
    .then(response => {
      hideLoader();
      return response.data; // Повертаємо дані з відповіді
    })
    .catch(catchError)
}


function showLoader() { 
  refs.loader.style.display = "block";
  refs.catInfo.style.display = "none";
}
function hideLoader() { 
  refs.loader.style.display = "none";
 refs.catInfo.style.display = "block";
}

function showError() {
  refs.catInfo.style.display = "none";
Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!')
}


function catchError(error) {
        hideLoader();
      showError();
      return [];
}

