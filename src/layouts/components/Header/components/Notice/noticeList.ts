interface INoticeType {
  label: string
  content: string
  time: string
  [key: string]: any
}
export const noticeList: INoticeType[] = [
  {
    label: 'Vue3-ts-admin publish',
    content:
      '基于Vue3、TypeScript、Vue Router4、Pinia、Axios、i18n、Element Plus、Vite2 开发的中后台管理模板',
    time: '2021-8-30',
  },
  {
    label: 'update notice',
    content: 'welcome to our community to visit our project',
    time: '2021-10-01',
  },
]
