import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import MetamaskLogo from './walletComponents/Metamask.js';
import ethereumLogo from '../../images/ethereum-logo.svg';
import polygonLogo from '../../images/polygon-logo.svg';
import './styles/wallet.css';

export default function Wallet() {
    const [walletAddress, setWalletAddress] = useState('');
    const [shortenedAddress, setShortenedAddress] = useState('');
    const [networkName, setNetworkName] = useState('');
    const [balanceString, setBalanceString] = useState('');
    const [modalState, setModalState] = useState('');

    // ethers 라이브러리의 Provider를 설정하여 Ethereum 블록체인에 접근할 수 있도록 함
    const provider = new ethers.BrowserProvider(window.ethereum);

    // 계정과 현재 네트워크를 가져오는 비동기 함수
    const getAccountAndNetwork = async () => {
        // window.ethereum이 존재한다면,
        if (window.ethereum) {
            try {
                // Ethereum Provider API에서 eth_requestAccounts를 통해 계정 정보를 반환받음
                const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts',
                });
                console.log('Accounts:', accounts);
                // 현재 로그인된 계정(index=0)을 상태에 저장
                setWalletAddress(accounts[0]);
                console.log('Wallet Address: ', walletAddress);

                const addressShortcut = accounts[0].slice(0, 6) + '...' + accounts[0].slice(-4);
                setShortenedAddress(addressShortcut);
                // 현재 연결된 Ethereum 네트워크의 식별자를 가져와서 networkId 변수에 저장
                const networkId = window.ethereum.networkVersion;
                // 홈페이지에서 사용할 네트워크 이름을 식별자 별로 저장
                const networkNames = {
                    1: 'Ethereum Mainnet',
                    137: 'Polygon Mainnet',
                };
                // 해당 network를 사용 중이라면 해당 네트워크의 이름을 띄움
                const name = networkNames[networkId] || 'Unregistered network';
                setNetworkName(name);
                console.log('Current network name: ', name);
            } catch (error) {
                // 에러가 뜨면 계정, 네트워크 이름 초기화
                setWalletAddress('');
                setNetworkName('');
                console.error("Error at 'getAccountAndNetwork':", error);
            }
        }
    };

    const createETHString = (amount) => {
        return amount + 'ETH';
    };

    const createMATICString = (amount) => {
        return amount + 'MATIC';
    };

    // // 보유자산 정보를 가져오는 함수
    const getBalance = async (address) => {
        try {
            const balance = await provider.getBalance(address);

            if (networkName === 'Ethereum Mainnet') {
                const ethString = createETHString(ethers.formatEther(balance));
                setBalanceString(ethString);
            } else if (networkName === 'Polygon Mainnet') {
                const maticString = createMATICString(ethers.formatEther(balance));
                setBalanceString(maticString);
            } else {
                setBalanceString('Unregistered balance');
            }
        } catch (error) {
            console.error("Error at 'getBalance':", error);
        }
    };

    // 지갑을 연결하는 함수
    const connectWallet = async () => {
        // 만약 window.ethereum이 존재한다면
        if (typeof window.ethereum !== 'undefined') {
            // 계정, 네트워크 정보를 가져오는 함수를 실행
            await getAccountAndNetwork();
        }
    };

    if (window.ethereum) {
        window.ethereum.on('accountsChanged', connectWallet);
        window.ethereum.on('networkChanged', connectWallet);
    }

    // 마운트 시 실행되는 함수 정의
    useEffect(() => {
        connectWallet();
    }, []);

    // walletAddress의 상태가 변경되면 실행되는 함수 정의
    useEffect(() => {
        getBalance(walletAddress);
    }, [walletAddress, networkName]);

    return (
        <div>
            <div className="wallet">
                <button className="wallet-button" onClick={() => setModalState(true)}>
                    <div className="wallet-button-items">
                        <MetamaskLogo />
                        {walletAddress && <p>{networkName}</p>}
                        <p>
                            {walletAddress
                                ? shortenedAddress
                                : 'Connect your wallet using MetaMask !'}
                        </p>
                    </div>
                </button>
            </div>
            {networkName && modalState && (
                <div className="modal">
                    <div className="overlay" onClick={() => setModalState(false)} />
                    <div className="modal-container">
                        <div className="modal-title">
                            {networkName === 'Ethereum Mainnet' && (
                                <div className="logo-container">
                                    <img
                                        className="logo-image"
                                        src={ethereumLogo}
                                        alt="ethereum logo"
                                    />
                                </div>
                            )}
                            {networkName === 'Polygon Mainnet' && (
                                <div className="logo-container">
                                    <img
                                        className="logo-image"
                                        src={polygonLogo}
                                        alt="polygon logo"
                                    />
                                </div>
                            )}
                            <h2>{networkName}</h2>
                        </div>
                        <div className="modal-item">
                            <p className="modal-item-key">Your address: </p>
                            <p className="modal-item-value">{shortenedAddress}</p>
                        </div>
                        <div className="modal-item">
                            <p className="modal-item-key">Your balance: </p>
                            <p className="modal-item-value">{balanceString}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
