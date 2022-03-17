import { Application } from "express";
import customerRouter from "./CustomerRoutes";

export default class Routes {
  constructor(app: Application) {
    // customer reoutes
    app.use("/api/customers", customerRouter);
  }
}
