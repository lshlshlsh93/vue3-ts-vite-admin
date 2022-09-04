export const StepProps: IProps[] = [
  {
    element: '#guide',
    popover: {
      title: 'Guide',
      description:
        'This will help us get familiar with the functions of the system. Please read it patiently and hope it can help you ☺ ☺ ☺ ',
      position: 'left',
      offset: 20,
    },
  },
  {
    element: '#collapse',
    popover: {
      title: 'Collapse',
      description: 'Click the button to expand and collapse the sidebar',
      position: 'right',
      offset: 20,
    },
  },
  {
    element: '#avatar',
    popover: {
      title: 'Profile',
      description:
        'This is the profile picture of the logged-in user. You can move the mouse over it to set your profile',
      position: 'left',
      offset: 40,
    },
  },
  {
    element: '#setting',
    popover: {
      title: 'Setting',
      description:
        'Here we can view and system theme information, you can set your favorite theme according to your preferences, give it a try',
      position: 'left',
      offset: 40,
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
