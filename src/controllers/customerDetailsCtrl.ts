import { Request, Response } from "express";
import { apiErrorHandler } from "../handlers/errorHandler";
import { CUSTOMERS_LIST_MOCK_DATA } from "../utils/constants";

export default class CustomerCtrl {
  constructor() {}

  /**
   * @method sortCustgetCustomersListomersGridList
   * @param req<Request>, res<Response>
   * @desc handler to send customers list to callers
   * @returns customersList
   */
  async getCustomersList(req: Request, res: Response) {
    try {
      res.json(CUSTOMERS_LIST_MOCK_DATA);
    } catch (error) {
      apiErrorHandler(error, req, res, "Fetch All customers list failed.");
    }
  }
}
