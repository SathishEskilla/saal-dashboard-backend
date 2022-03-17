import { Router } from "express";
import CustomerCtrl from "../controllers/customerDetailsCtrl";

class CustomersListRoutes {
  router = Router();
  customerCtrl = new CustomerCtrl();

  constructor() {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.router.route("/").get(this.customerCtrl.getCustomersList);
  }
}
export default new CustomersListRoutes().router;
