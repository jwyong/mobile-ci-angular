export class StringsEng {
  public static getString(stringId: string) {
    if (this[stringId] == null)
      return StringsEng.E_HTTP_GENERIC + ' (' + stringId + ')';
    else return this[stringId];
  }

  //=== http generic errors
  public static E_HTTP_GENERIC =
    'Something went wrong, please contact support or try again later.';
  public static E_HTTP_401 =
    'You have been logged out due to inactivity, please login again.';
  public static E_HTTP_404 =
    'Error 404: Not Found. Please contact support or try again later.';
  public static E_HTTP_500 =
    'Error 500: Internal Server Error. Please contact support or try again later.';

  //=== http error codes (statusCode 400)
  public static E_INVALID_CLIENT =
    'Invalid client credentials, please contact support.';
  public static E_VERIFY_ACCOUNT =
    'Account not verified, please wait for admin to approve or contact support.';

  //=== registration/login
  public static REG_SUCCESS =
    'Registration successful! Please check your e-mail to verify, thank you.';
  public static E_INVALID_PASSWORD =
    'Invalid email or password, please try again';

  //=== projects
  public static CREATE_PROJECT_SUCCESS = 'Project created successfully';

  //=== git configs
  public static SET_GIT_CONFIG_SUCCESS = 'Git configs updated successfully';
  public static GENERATE_SSH_CONFIRM =
    "Generate new SSH key? The previous SSH key will be invalidated, and you'll have to copy/paste it into your Git project repository again.";
  public static SSH_KEY_COPIED = 'SSH Key copied to clipboard!';
  public static SSH_KEY_EMPTY =
    'Please make sure you have generated SSH key at least once and copied it to your Git project repository.';

  //=== env configs
  public static SET_ENV_CONFIG_SUCCESS =
    'Project scheme and environments updated successfully.';
  public static ENV_SETTINGS_EMPTY =
    'Please add at least one environment to your scheme.';
  public static ENV_DELETE_CONFIRM =
    'Are you sure you want to delete this environment from your scheme? This action cannot be undone.';
  public static ENV_DELETE_SUCCESS = 'Scheme environment deleted successfully.';

  //=== static configs
  public static SET_STATIC_CONFIG_SUCCESS =
    'Project static configs updated successfully.';

  // app signing (auto)
  public static SET_APP_SIGNING_FILES_SUCCESS =
    'App signing certificate files updated successfully, please submit the form if you have made changes to signing method (automatic vs. manual).';
  public static APP_SIGNING_FILES_NULL =
    'Required app signing files for automatic signing not uploaded yet, please choose the correct files and click on the "upload" button.';

  //=== build template
  public static SET_BUILD_TEMPLATE_SUCCESS =
    'Build template updated successfully.';

  // cancel build
  public static CANCEL_BUILD_CONFIRM(buildNumber: string) {
    return `Are you sure you want to cancel build #${buildNumber}?`;
  }
  public static CANCEL_BUILD_SUCCESS(buildNumber: string) {
    return `Build #${buildNumber} cancelled.`;
  }

  //cartfile
  public static SET_CARTFILE_SUCCESS =
    'Cartfile uploaded successfully, now commencing carthage compilation. You can navigate away during this process.';
  public static CARTFILE_NULL =
    'Carthage option is enabled - please choose a cartfile or disable this option in the Project Static Configs.';
}
