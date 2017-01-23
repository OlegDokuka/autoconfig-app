export interface Environment {
  name: string;
  origin: string;
  owner: any;
}

export interface RemoveEnvironmentOptions {
  username: string;
  password: string;
  environmentName: string;
}
