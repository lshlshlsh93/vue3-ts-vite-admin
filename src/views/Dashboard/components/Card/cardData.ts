interface IDetailProp {
  title: string
  count: number
  content?: {
    weekPercentage?: number
    dayPercentage?: number
  }
  daySaltAmount?: number
  dayMeetAmount?: number
  transformRate?: number
}
export const detailProps: IDetailProp[] = [
  {
    title: '总销售额',
    count: 12656,
    content: {
      weekPercentage: 56.67,
      dayPercentage: 19.96,
    },
    daySaltAmount: 12423,
  },
  {
    title: '访问量',
    count: 88460,
    dayMeetAmount: 6666,
  },
  {
    title: '支付笔数',
    count: 88460,
    transformRate: 65,
  },
  {
    title: '运营活动效果',
    count: 78,
    content: {
      weekPercentage: 12,
      dayPercentage: 11,
    },
  },
]
