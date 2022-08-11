export interface IosStaticConfigs {
  project_id: string;
  xcodeproject: string;
  signing_method: string;
  upload_method: string;
  team_cert: string;
  appstore_username: string;
  appstore_password: string;
  appstore_api_key: string;
  appstore_api_issuer: string;
  appstore_key: string;
  bundle_ids: string;
  pod_option: string;
  carthage_option: string;
  bitcode_option: string;
  firebase_adhoc_option: string;
  firebase_token: string;
  notification_channel: string;
  notification_hook_url: string;

  // for app signing (auto)
  private_key_file_name: string;
  provisioning_file_name: string;
  certificate_password: string;
}
