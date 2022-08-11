export interface IosBuildTemplate {
  project_id: string;
  scheme: string;
  environment: string;
  branch: string;
  s3_carthage_folder: string;
  firebase_distribution_group: string;
  release_note: string;
  testflight_option: boolean;
  adhoc_option: boolean;
  enterprise_option: boolean;
  test_option: boolean;
  push_to_branch_option: boolean;
}

// build template options for dropdown/etc
export interface IosBuildTemplateOptions {
  firebase_adhoc_option: string;
  carthage_option: string;
  carthage_status: string;
  build_number: number;
  build_options: IosBuildOptions[];
}

export interface IosBuildOptions {
    scheme: string;
    environment: string[];
  }