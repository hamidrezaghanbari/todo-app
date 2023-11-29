import { EHttpMethod, IParams } from "./types";

class HttpService {
  private baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  private basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  private apiKey = process.env.NEXT_PUBLIC_API_KEY;

  private get getAuthorization() {
    const accessToken = sessionStorage.getItem("token") || "";
    return accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
  }

  private normalizeError(error: unknown) {
    return Promise.reject(error);
  }

  private setupHeaders() {
    return { Accept: "application/json", "Content-Type": "application/json", ...this.getAuthorization };
  }

  private async request<T>(
    method: EHttpMethod,
    url: string,
    options: IParams
  ): Promise<T> {
    try {
      const response = await fetch(
        `${this.baseURL}${this.basePath}${url}?apikey=${this.apiKey}`,
        {
          method,
          ...options,
        }
      );

      const data: Promise<T> = await response.json();

      return data;
    } catch (error) {
      return this.normalizeError(error);
    }
  }

  public async get<T>(
    url: string,
    params?: IParams,
  ): Promise<T> {
    return this.request<T>(EHttpMethod.GET, url, {
      params,
      headers: this.setupHeaders(),
    });
  }

  public async post<T, P>(
    url: string,
    payload: P,
    params?: IParams,
  ): Promise<T> {
    return this.request<T>(EHttpMethod.POST, url, {
      params,
      body: JSON.stringify(payload),
      headers: this.setupHeaders(),
    });
  }

  public async put<T, P>(
    url: string,
    payload: P,
    params?: IParams,
  ): Promise<T> {
    return this.request<T>(EHttpMethod.PUT, url, {
      params,
      body: JSON.stringify(payload),
      headers: this.setupHeaders(),
    });
  }

  public async delete<T>(
    url: string,
    params?: IParams,
  ): Promise<T> {
    return this.request<T>(EHttpMethod.DELETE, url, {
      params,
      headers: this.setupHeaders(),
    });
  }
}

const httpService = new HttpService();

export { httpService as default };
