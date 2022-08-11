export interface BuildDetail {
  build_id: string;
  project_id: string;
  build_no: string;
  branch: string;
  s3_carthage_folder: string;
  environment: string;
  scheme: string;
  firebase_distribution_group: string;
  release_note: string;
  test_option: string;
  adhoc_option: string;
  enterprise_option: string;
  push_to_branch_option: string;
  status: string;
  build_minutes: number;
}
