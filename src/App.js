import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from './components'
import './App.css'
import ConnectButton from './components/ConnectButton'
import AccountModal from './components/AccountModal'

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='wallet-btn'>
            <ConnectButton showModal={showModal} />
            <AccountModal isModalVisible={isModalVisible} handleCancel={handleCancel} />
          </div>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={<Homepage />}></Route>
              <Route exact path='/exchanges' element={<Exchanges />}></Route>
              <Route
                exact
                path='/cryptocurrencies'
                element={<Cryptocurrencies />}
              ></Route>
              <Route
                exact
                path='/crypto/:coinId'
                element={<CryptoDetails />}
              ></Route>
              <Route exact path='/news' element={<News />}></Route>
            </Routes>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title
            level={5}
            style={{ color: 'white', textAlign: 'center' }}
          >
            CryptoBam <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default App
