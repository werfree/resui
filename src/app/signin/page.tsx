'use client';
import { LightButton } from '@/components/Button';
import { HOME_URL, SIGNIN_PROVIDER } from '@/utils/frontend/frontendConstant';
import Link from 'next/link';
import React from 'react';
import { login } from '../api/auth/[...nextauth]/utils';

function SignIn() {
  const handleSignInProviderClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    provider: SIGNIN_PROVIDER,
  ) => {
    //Here
    // e.stopPropagation();
    login(provider);
    console.log(provider);
  };

  return (
    <div className="relative" id="signin">
      <div
        id="login-popup"
        tabIndex={-1}
        className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex"
      >
        <div className="relative p-4 w-full max-w-md h-auto">
          <div className="relative bg-theme rounded-lg shadow">
            <Link
              href={HOME_URL}
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="#c6c7c7"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close popup</span>
            </Link>

            <div className="p-5">
              <h3 className="text-2xl mb-0.5 font-medium"></h3>
              <p className="mb-4 text-sm font-normal text-gray-800"></p>

              <div className="text-center">
                <p className="mb-3 text-2xl font-semibold leading-5 text-bg">
                  Login to your account
                </p>
                <p className="mt-2 text-sm leading-4 text-bg">
                  You must be logged in to perform this action.
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-2">
                <LightButton
                  onClick={(e) =>
                    handleSignInProviderClick(e, SIGNIN_PROVIDER.GITHUB)
                  }
                  isFull={true}
                >
                  <img
                    src="https://www.svgrepo.com/show/512317/github-142.svg"
                    alt="GitHub"
                    className="h-[18px] w-[18px] "
                  />
                  <span className="ml-2 font-medium">Continue with GitHub</span>
                </LightButton>

                <LightButton
                  onClick={(e) =>
                    handleSignInProviderClick(e, SIGNIN_PROVIDER.GOOGLE)
                  }
                  isFull={true}
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="h-[18px] w-[18px] "
                  />
                  <span className="ml-2 font-medium">Continue with Google</span>
                </LightButton>

                <LightButton
                  onClick={(e) =>
                    handleSignInProviderClick(e, SIGNIN_PROVIDER.LINKEDIN)
                  }
                  isFull={true}
                >
                  <img
                    src="https://www.svgrepo.com/show/448234/linkedin.svg"
                    alt="Google"
                    className="h-[18px] w-[18px] "
                  />
                  <span className="ml-2 font-medium">
                    Continue with LinkedIn
                  </span>
                </LightButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
