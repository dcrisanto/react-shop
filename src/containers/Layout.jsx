import React from 'react'

//recibirá un hijo(chidren)
const Layout = ({children}) => {
  return (
    <div className="Layout">
      <Headers />
      <Search />
      {children}
    </div>
  )
}

export default Layout


