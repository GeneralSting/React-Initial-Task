abstract class ApiService {
  protected readonly apiUrl: string;

  constructor() {
    this.apiUrl = `http://localhost:8000/api/`; // base API url
  }

  private async handleErrors<TData>(response: Response): Promise<TData> {
    if (!response.ok) {
      throw new Error("Error! Data not fetched.");
    }
    const responseData = await response.json();
    if (responseData && responseData.error) {
      throw new Error("Error! Fetched data has errors.");
    }

    return responseData as TData;
  }

  protected async fetchData<TData>(url: string): Promise<TData> {
    const response = await fetch(url);
    const responseData = await this.handleErrors(response);
    return responseData as TData;
  }
}

export default ApiService;
