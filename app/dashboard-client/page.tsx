'use client'
import { useAuth, useUser } from '@clerk/nextjs'

export default function ClientDashboard() {
  const { isLoaded: isLoadedAuth, userId, sessionId } = useAuth()
  const { isLoaded: isLoadedUser, isSignedIn, user } = useUser()

  if (!isLoadedAuth || !userId) {
    return null
  }

  if (!isLoadedUser || !isSignedIn) {
    return null
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard (client-side)</h1>
      <p>
        Hello, {user.fullName} <br />
        Your user ID: {userId} <br />
        Your current active session: {sessionId}
      </p>
    </div>
  )
}
