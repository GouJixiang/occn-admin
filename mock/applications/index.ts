import { MockMethod } from 'vite-plugin-mock'
const applications = [
  {
    url: '/mock/applications/appList',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: [
          {
            id: '1',
            name: 'AI OCCN',
            host: 'ai.occn.top',
            port: '80,443',
            tag: 'AI,ChatGPT',
            status: 'running'
          },
          {
            id: '2',
            name: 'DDNS-GO',
            host: 'ddns.occn.top',
            port: '80',
            tag: '网络,内网穿透',
            status: 'error'
          },
          {
            id: '3',
            name: 'QT-Box',
            host: 'docs.occn.top',
            port: '80,443',
            tag: 'C++,QT,桌面应用',
            status: 'stop'
          }
        ]
      }
    }
  }
] as MockMethod[]

export default applications
