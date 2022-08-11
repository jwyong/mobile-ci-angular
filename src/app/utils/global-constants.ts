export class GlobalConstants {
  //=== http server configs
  // 8081 = cloud
  // 8082 = jos local
  public static HTTP_BASE_URL = 'http://175.41.155.248:8081/api/v1.0/';
  // public static JENKINS_BASE_URL = 'http://175.41.155.248:8080';
  public static XMPP_CLIENT_ID = 'CICD330011CICDp01';
  public static XMPP_CLIENT_SECRET = 'Npxkillnottoomuch110022yes2';

  //=== local storage
  public static LS_KEY_ACCESS_TOKEN: string = 'LS_KEY_ACCESS_TOKEN';
  public static LS_KEY_CURRENT_PROJECT: string = 'LS_KEY_CURRENT_PROJECT';

  //=== http endpoints
  // registration
  public static HTTP_REG_URL: string = 'authentication/register';
  public static HTTP_LOGIN_URL: string = 'authentication/login';
  public static HTTP_LOGOUT_URL: string = 'authentication/logout';

  // projects
  public static HTTP_GET_PROJ_LIST_URL: string = 'project/list';
  public static HTTP_CREATE_PROJ_URL: string = 'project/create';

  // git configs
  public static HTTP_SET_GIT_CONFIG_URL: string = 'project/git_config';
  public static HTTP_GET_GIT_CONFIG_URL(projectId: string): string {
    return `project/git_config/${projectId}`;
  }
  public static HTTP_GENERATE_SSH_KEY_URL: string = 'project/generate_ssh_key';
  public static HTTP_GET_SSH_KEY_URL(projectId: string): string {
    return `project/get_ssh_key/${projectId}`;
  }

  // static configs
  public static HTTP_SET_IOS_STATIC_CONFIG_URL: string =
    'project/ios_main_config';
  public static HTTP_GET_IOS_STATIC_CONFIG_URL(projectId: string): string {
    return `project/ios_main_config/${projectId}`;
  }
  public static HTTP_SET_IOS_APP_SIGNING_AUTO_URL: string =
  'certificate/upload';

  // env configs
  public static HTTP_SET_IOS_ENV_CONFIG_URL: string =
    'project/ios_environment_config';
  public static HTTP_GET_IOS_ENV_CONFIG_URL(projectId: string): string {
    return `project/ios_environment_config/${projectId}`;
  }
  public static HTTP_DELETE_IOS_ENV_CONFIG_URL: string =
    'project/ios_environment_config/delete';

  // build template
  public static HTTP_SET_IOS_BUILD_TEMPLATE_URL: string =
    'project/ios_build_config';
  public static HTTP_GET_IOS_BUILD_TEMPLATE_URL(projectId: string): string {
    return `project/ios_build_config/${projectId}`;
  }
  public static HTTP_GET_IOS_BUILD_TEMPLATE_OPTIONS_URL(
    projectId: string
  ): string {
    return `project/ios_template_option/${projectId}`;
  }

  // build history/details
  public static HTTP_GET_BUILD_HISTORY_URL(
    projectId: string,
    offset: number
  ): string {
    return `cicd/build/${projectId}?offset=${offset}`;
  }
  public static HTTP_GET_BUILD_DETAILS_URL(buildId: string): string {
    return `cicd/build/id/${buildId}`;
  }

  // create / rebuild / stop build
  public static HTTP_CREATE_BUILD_URL: string = 'cicd/build';
  public static HTTP_REBUILD_URL: string = 'cicd/rebuild';
  public static HTTP_STOP_BUILD_URL: string = 'cicd/build/stop';

  // jenkins
  public static HTTP_GET_JENKINS_BUILD_NUMBER_URL(buildId: string): string {
    return `cicd/build/id/${buildId}?query=build_no`;
  }

  // console output
  public static HTTP_GET_CONSOLE_OUTPUT_URL(buildId: string, platform: string, jenkinsBuildNumber: string): string {
    return `cicd/build/log/${buildId}?platform=${platform}&jenkins_build_number=${jenkinsBuildNumber}`;
  }

  // build number
  public static HTTP_GET_BUILD_NUMBER_URL(projectId: string): string {
    return `project/build_number/${projectId}`;
  }
  public static HTTP_SET_BUILD_NUMBER_URL: string = 'project/build_number';

  // cartfile
  public static HTTP_SET_IOS_CARTFILE_URL: string = 'carthage/build/upload';
  public static HTTP_GET_IOS_CARTFILE_URL(
    projectId: string,
    folderName: string
  ): string {
    return `carthage/project/${projectId}/folder/${folderName}`;
  }

  //=== snackbar durations
  public static SNACKBAR_DURATION_SHORT = 2000;
  public static SNACKBAR_DURATION_MID = 3000;
  public static SNACKBAR_DURATION_LONG = 4000;

  //=== build type
  public static BUILD_TYPE_NEW_BUILD = 'BUILD_TYPE_NEW_BUILD';
  public static BUILD_TYPE_REBUILD = 'BUILD_TYPE_REBUILD';
}
