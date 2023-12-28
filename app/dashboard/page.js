import {getServerSession} from 'next-auth'
import { redirect } from 'next/navigation'

const Dashboard = async () => {
    const session = await getServerSession()
    if(!session){
        redirect('/')
    }
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
        <h1 className="text-black border p-4">
            User successfully logged in.
        </h1>
    </div>
  )
}

export default Dashboard