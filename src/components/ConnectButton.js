import { useEthers, useEtherBalance } from '@usedapp/core'
import { Typography, Button } from 'antd'
import { formatEther } from '@ethersproject/units'
import Identicon from './Identicon'

const { Text } = Typography

const ConnectButton = ({ showModal }) => {
  const { activateBrowserWallet, account } = useEthers()
  const etherBalance = useEtherBalance(account)

  function handleConnectWallet() {
    activateBrowserWallet()
  }

  return account ? (
    <div className='wallet-container'>
      <Text className='wallet-text'>
        {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
      </Text>
      <button className='wall-btn' onClick={showModal}>
        <Text className='wall-btn-text'>
          {account &&
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
        </Text>
        <Identicon />
      </button>
    </div>
  ) : (
    <Button className='connect-btn' onClick={handleConnectWallet}>
      Connect to a wallet
    </Button>
  )
}

export default ConnectButton
