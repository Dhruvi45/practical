export interface User {
  FirstName: string;
  LastName: string;
  Email: string;
  Password?: string;
}

export interface CommonResponse {
  message: string;
  status: string;
}