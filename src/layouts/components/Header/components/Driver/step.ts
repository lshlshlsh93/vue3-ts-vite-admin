export const StepProps: IProps[] = [
  {
    element: '#guide',
    popover: {
      title: 'Guide on useful',
      description: 'Guide of the popover',
      position: 'left',
      offset: 20,
    },
  },
  {
    element: '#collapse',
    popover: {
      title: 'collapse',
      description: 'collapse and close the sidebar menu',
      position: 'right',
      offset: 20,
    },
  },
  {
    element: '#avatar',
    popover: {
      title: 'avatar',
      description: 'avatar',
      position: 'left',
      offset: 30,
    },
  },
]
interface IProps {
  element: string
  popover: {
    title: string
    description: string
    position: position
    offset?: number
  }
  [key: string]: any
}
type position = 'left' | 'bottom' | 'right' | 'top'
