
import Header from './header/header'
import MainContent from './mainContent/mainContent'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <MainContent>{children}</MainContent>      
    </>
  )
}