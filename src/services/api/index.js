const API = process.env.NEXT_PUBLIC_API_URL;

const endPoints = {
  auth: {
    login: `${API}/api/v1/auth/login`,
    profile: `${API}/api/v1/auth/profile`
  },
  products: {
    getListProducts: (limit, offset) => `${API}/api/v1/products?limit=${limit}&offset=${offset}`,
    getProductsCategory: (limit, offset, id_category) => `${API}/api/v1/categories/${id_category}/products?limit=${limit}&offset=${offset}`
  }
};

export { endPoints };