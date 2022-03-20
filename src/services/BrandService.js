import axios from 'axios';

const BRAND_API_BASE_URL = "http://localhost:8080/api/v1/brand";

class BrandService{

    getBrands(){
        return axios.get(BRAND_API_BASE_URL);
    }

    createBrand(brand){
        return axios.post(BRAND_API_BASE_URL, brand);
    }

    getBrandById(brandId){
        return axios.get(BRAND_API_BASE_URL + "/" + brandId);
    }

    updateBrand(brand, brandId){
        return axios.put(BRAND_API_BASE_URL + "/" + brandId, brand);
    }

    deleteBrand(brandId){
        return axios.delete(BRAND_API_BASE_URL + "/" + brandId);
    }
}

export default new BrandService()