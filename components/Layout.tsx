import React, { ReactNode } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import { Menu } from '@material-ui/icons'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout: React.FC = ({ children }: Props) => {
  const style = (
    <style jsx>{`
        .main-wrapper {
          margin-top: 64px;
        }
        .login-button {
          margin-left: auto;
        }
      `}
    </style>
  )

  return (
    <>
      <div>
        <AppBar position='fixed' color='inherit'>
          <Toolbar>
            <IconButton color='inherit' >
              <Menu />
            </IconButton>
            <Typography
              variant='h5'
            >
              Admin App
          </Typography>
            <Button
              color='inherit'
              className='login-button'
            >LOGIN</Button>
          </Toolbar>
        </AppBar>
        <div className='main-wrapper'>
          {children}
        </div>
      </div>
      {style}
    </>
  )
}

export default Layout
