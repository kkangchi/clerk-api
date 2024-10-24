import { auth, currentUser } from '@clerk/nextjs/server'

export default async function DashboardPage() {
  const { userId } = auth()
  const user = await currentUser()
  //console.log(userId)
  //console.log(user)

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Dashboard (server-side)</h1>
      <p className="mb-4">
        welcome to dashboard. 이 페이지는 로그인된 사용자의 정보를 보여주는
        페이지 입니다.
      </p>

      {userId && (
        <div>
          <p>UserID: {userId} </p>
          <p>Name: {user?.fullName}</p>
          <p>Username: {user?.username} </p>
          <p>Email: {user?.primaryEmailAddress?.emailAddress} </p>
        </div>
      )}
    </div>
  )
}
