import AuthForm from '@/components/AuthForm';
import React from 'react';

const SignUn = () => {
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm 
        type='sign-up'
      />
    </section>
  )
}

export default SignUn