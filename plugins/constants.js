const sections = [
  { title: 'Basic Info', icon: 'mdi-account-box', slag: 'basic' },
  { title: 'History', icon: 'mdi-school', slag: 'history' },
  { title: 'Skills', icon: 'mdi-hammer-wrench', slag: 'skills' },
  {
    title: 'Experience',
    icon: 'mdi-account-arrow-right',
    slag: 'experience',
  },
  { title: 'Research', icon: 'mdi-feature-search', slag: 'research' },
  { title: 'Work', icon: 'mdi-cube-outline', slag: 'work' },
]

export default (context, inject) => {
    inject('sections', sections)
}