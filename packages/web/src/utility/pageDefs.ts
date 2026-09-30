export function isAdminPage() {
  return window['dbgate_page'] == 'admin';
}

export function isOneOfPage(...pages) {
  return pages.includes(window['dbgate_page']);
}

export function getOpenedTabsStorageName() {
  let userSuffix = '';
  if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem('accessToken');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        if (payload.login) userSuffix = '_' + payload.login.replace(/[^a-zA-Z0-9_-]/g, '_');
      } catch (err) {}
    }
  }
  return (isAdminPage() ? 'adminOpenedTabs' : 'openedTabs') + userSuffix;
}
