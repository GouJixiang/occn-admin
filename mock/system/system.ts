import { MockMethod } from 'vite-plugin-mock'
const system = [
  {
    url: '/mock/menu',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: [
          {
            label: '仪表盘',
            key: 'dashboard',
            icons: 'icons5:DesktopOutline',
            children: [
              {
                label: '工作台',
                key: 'dashboard-staging',
                icons: 'icons5:CalendarOutline'
              },
              {
                label: '数据看板',
                key: 'dashboard-board',
                icons: 'icons5:LibraryOutline'
              }
            ]
          },
          {
            label: '用户管理',
            key: 'user',
            icons: 'antd:UserOutlined',
            children: [
              {
                label: '用户列表',
                key: 'user-list',
                icons: 'antd:UserAddOutlined'
              }
            ]
          },
          {
            label: '应用中心',
            key: 'applications',
            icons: 'icons5:AppsOutline',
            children: [
              {
                label: '应用管理',
                key: 'applications-manager',
                icons: 'icons5:Clipboard'
              }
            ]
          },
          {
            label: '服务器中心',
            key: 'hardware',
            icons: 'icons5:Server',
            children: [
              {
                label: '服务器管理',
                key: 'hardware-manager',
                icons: 'icons5:Grid'
              }
            ]
          }
        ]
      }
    }
  }
] as MockMethod[]

export default system
