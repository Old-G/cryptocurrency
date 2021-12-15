import { Modal } from 'antd'
import { useState } from 'react'
import { Typography } from 'antd'
import { useEthers } from '@usedapp/core'
import Identicon from './Identicon'

const { Text } = Typography

const AccountModal = ({ isModalVisible, handleCancel }) => {
  const { account, deactivate } = useEthers()
  const [copySuccess, setCopySuccess] = useState('Copy Address')

  const copyClick = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe)
      setCopySuccess('Copied')
      setTimeout(() => {
        setCopySuccess('Copy Address')
      }, 2000)
    } catch (err) {
      setCopySuccess('Failed to copy!')
    }
  }

  const handleDeactivateAccount = () => {
    deactivate()
    handleCancel()
  }

  return (
    <Modal
      title='Account'
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={null}
    >
      <div className='account-modal-body'>
        <div className='account-modal-body-nav'>
          <div className='account-modal-body-nav__title'>
            Connected with MetaMask
          </div>
          <div
            className='account-modal-body-nav__btn'
            onClick={handleDeactivateAccount}
          >
            Change
          </div>
        </div>
        <div className='account-modal-body-main'>
          <Identicon />
          <Text className='account-modal-body-main__text'>
            {account &&
              `${account.slice(0, 6)}...${account.slice(
                account.length - 4,
                account.length
              )}`}
          </Text>
        </div>
        <div className='account-modal-body-footer'>
          <div
            className='account-modal-body-footer__address'
            onClick={() => copyClick(account)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='account-modal-img'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
              />
            </svg>
            <div className='account-modal-body-footer__address-title'>
              {copySuccess}
            </div>
          </div>
          <a
            href={`https://ropsten.etherscan.io/address/${account}`}
            className='account-modal-body-footer__explorer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='account-modal-img'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
              />
            </svg>
            <div className='account-modal-body-footer__address-title'>
              View on Explorer
            </div>
          </a>
        </div>
      </div>
      <div className='account-modal-footer'>
        Your transactions will appear here...
      </div>
    </Modal>
  )
}

export default AccountModal
