import Nav from '../components/nav'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function IndexPage() {
    const [ session, loading ] = useSession()

    return <>
        {!session && <>
         Not signed in <br/>
         <button onClick={signIn}>Sign in</button>
         </>}
    {session && <>
     Signed in as {session.user.email} <br/>
     <button onClick={signOut}>Sign out</button>
     </>}
    </>
}
//   return (
//     <div>
//       <Nav />
//       <div className="py-20">
//         <h1 className="text-5xl text-center text-blue-700 dark:text-gray-100">
//           Next.js + Tailwind CSS 2.0
//         </h1>
//       </div>
//     </div>
//   )
// }
