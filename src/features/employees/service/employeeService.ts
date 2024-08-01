import { apiService } from "../../../service";
import { EmployeeApiResponse } from "../types/api/employeeApiResponse";

class EmployeeService extends apiService {
  protected employeesUrl: string;

  constructor() {
    super();
    this.employeesUrl = `${this.apiUrl}employees`;
  }

  public async fetchEmployees(): Promise<EmployeeApiResponse> {
    const fetchUrl = `${this.employeesUrl}`;
    return await this.fetchData(fetchUrl);
  }

  public async fetchNextEmplyoees(
    nextPageUrl: string
  ): Promise<EmployeeApiResponse> {
    return await this.fetchData(nextPageUrl);
  }

  public async fetchSearchedEmployees(
    searchedValue: string
  ): Promise<EmployeeApiResponse> {
    const fetchUrl = `${this.employeesUrl}?search=${searchedValue}`;
    return await this.fetchData(fetchUrl);
  }

  public async fetchNextSearchedEmployees(
    searchedValue: string,
    nextPageUrl: string
  ): Promise<EmployeeApiResponse> {
    const fetchUrl = `${nextPageUrl}&search=${searchedValue}`;
    console.log(fetchUrl);
    return await this.fetchData(fetchUrl);
  }
}

export default EmployeeService;
