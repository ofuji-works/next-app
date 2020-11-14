import React from 'react'
import { Button } from '@material-ui/core'
import { Card } from '../components/Card'

const IndexPage: React.FC = () => {
  const style = (
    <style jsx>
      {`
      .top-block {
        margin-top: 200px;
        height: 300px;
        text-align: center;
      }
      .top-block h1 {
        font-size: 52px;
        font-weight: bold;
      }
      .top-block h3 {
        margin-top: 0;
        font-size: 30px;
        font-weight: bold;
      }

      .middle-block {
        height: 300px;
      }

      .contents-wrapper {

      }
    `}
    </style>
  )

  return (
    <>
      <div>
        <div className='top-block'>
          <h1>Landing Page</h1>
          <h3>Stunning pages in just a few clicks</h3>
          <div>
            <p>
              Build pages that convert your traffic and leads into more business –
              even if web design is not really your thing
            </p>
          </div>
        </div>
        <Button
          color='inherit'
          title='SingUp'
        />
      </div>
      <div className='middle-block'></div>
      <div className='contents-wrapper'></div>
      {style}
    </>
  )
}

export default IndexPage
