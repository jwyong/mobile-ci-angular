// get model
export interface EnvConfigsIosGet {
  environment_settings: SchemeGet[];
}

export interface SchemeGet {
  scheme: string;
  environment: Environment[];
}

export interface Environment {
  name: string;
  firebase_id: string;
  scheme_id: string;
}

// post model
export interface EnvConfigsIosPost {
  project_id: string;
  settings: SchemePost[];
}

export interface SchemePost {
  scheme_id: string;
  environment: string;
  scheme: string;
  firebase_id: string;
}