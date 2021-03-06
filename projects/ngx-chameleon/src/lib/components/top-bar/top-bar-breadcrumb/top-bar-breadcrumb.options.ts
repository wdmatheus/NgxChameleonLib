interface TopBarBreadcrumbOptions {
  path?: string[];
  icon: string;
  title?: string;
  route?: string;
  paths?:TopBarBreadcrumbPath[]
}

interface TopBarBreadcrumbPath {
  title: string,
  route?: any,
  queryParams?: any,
  active: boolean
}

export { TopBarBreadcrumbOptions, TopBarBreadcrumbPath }
