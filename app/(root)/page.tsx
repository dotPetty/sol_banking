import HeaderBox from '@/components/HeaderBox';
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

const Home = () => {

  const loggedIn = { firstName: 'dot', lastName: 'petty', email: 'test@dotpetty.com' }

  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                    type= 'greeting'
                    title= 'Welcome'
                    user= {loggedIn?.firstName || 'Guest'}
                    subtext= 'Access and manage your account and transactions efficiently.'
                />

                <TotalBalanceBox 
                    accounts= {[]}
                    totalBanks= {1}
                    totalCurrentBalance= {10000}
                />
            </header>

            RECENT TRANSACTIONS
        </div>

        <RightSideBar 
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance: 10000}, {currentBalance: 20000}]}
        />
    </section>
  )
}

export default Home