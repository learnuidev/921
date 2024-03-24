"use client";
// import { LockClosedIcon } from '@heroicons/react/solid';
import { useState } from "react";
import { signIn } from "aws-amplify/auth";

import { useRouter } from "next/navigation";

enum RegistrationViewTypes {
  login,
  confirmLogin,
  userExists,
  codeSent,
}

export function LoginForm() {
  const [username, setUserName] = useState("");
  // const [username, setUserName] = useState("");
  const [code, setCode] = useState("");
  const [authUser, setAuthUser] = useState(null);
  const [password, setPassword] = useState("");
  const [viewType, setViewtype] = useState(RegistrationViewTypes.login);

  //   const queryClient = useQueryClient();

  const router = useRouter();

  async function onSubmitForm({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    try {
      await signIn({
        username: email.toLowerCase(),
        password: password,
        // options: {
        //   authFlowType: "USER_PASSWORD_AUTH",
        // },
      });
      //   queryClient.invalidateQueries([userQueryIds.getAuthUser])
      router.refresh();
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === "NotAuthorizedException") {
          //   setSubmitError('Invalid email address or password!')
          return;
        }
      }
      //   toast({
      //     variant: 'destructive',
      //     title: 'Something went wrong.',
      //   })
    }
  }

  return (
    <>
      <div className="min-h-full flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            {/* <Lightning className="dark:text-rose-800 text-rose-600 mx-auto h-12 w-auto" /> */}
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-200">
              Login
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
              Or{" "}
              <a
                href="/register"
                className="font-medium text-rose-600 hover:text-rose-500"
              >
                create a new account
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  // autoComplete='email'
                  value={username}
                  onChange={(event) => {
                    setUserName(() => event.target.value);
                  }}
                  required
                  className="dark:bg-gray-900 dark:text-gray-200 dark:border-gray-800 appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-96 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  // autoComplete='email'
                  value={password}
                  onChange={(event) => {
                    setPassword(() => event.target.value);
                  }}
                  required
                  className="dark:bg-gray-900 dark:text-gray-200 dark:border-gray-800 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                onClick={(event) => {
                  event.preventDefault();

                  return onSubmitForm({
                    email: username,
                    password,
                  });
                }}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  {/* <LockClosedIcon
                    className="h-5 w-5 text-rose-500 group-hover:text-rose-400"
                    aria-hidden="true"
                  /> */}
                </span>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
