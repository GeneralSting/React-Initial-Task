import EmployeeService from "../service/employeeService";
import { EmployeeApiResponse } from "../types/api/employeeApiResponse";

class EmployeeModel {
  private employeeService: EmployeeService;

  constructor() {
    this.employeeService = new EmployeeService();
  }

  public async getEmployeesData(
    nextPageUrl: string | undefined
  ): Promise<EmployeeApiResponse> {
    let employeesResponse: EmployeeApiResponse;
    if (nextPageUrl) {
      employeesResponse = await this.employeeService.fetchNextEmplyoees(
        nextPageUrl
      );
    } else {
      employeesResponse = await this.employeeService.fetchEmployees();
    }
    return employeesResponse;
  }

  public async getSearchedEmployees(
    searchedValue: string,
    nextPageUrl: string | undefined
  ): Promise<EmployeeApiResponse> {
    let searchedEmployeesResponse: EmployeeApiResponse;
    if (nextPageUrl) {
      searchedEmployeesResponse =
        await this.employeeService.fetchNextSearchedEmployees(
          searchedValue,
          nextPageUrl
        );
    } else {
      searchedEmployeesResponse =
        await this.employeeService.fetchSearchedEmployees(searchedValue);
    }
    return searchedEmployeesResponse;
  }
}

export default EmployeeModel;
