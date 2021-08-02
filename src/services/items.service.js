import http from "../http-common";

class ItemsDataService {
  getAll() {
    return http.get("/item/findAll");
  }
 create(data) { 
    return http.post("/item/add", data);
  }
  getCategories() {
    return http.get(`/category/findAll`);
  }
}

export default new ItemsDataService();