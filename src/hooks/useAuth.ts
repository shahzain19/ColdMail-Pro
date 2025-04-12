import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabase'

export function useAuth() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  const signIn = (email: string) =>
    supabase.auth.signInWithOtp({ email })

  const signOut = () =>
    supabase.auth.signOut()

  return { user, signIn, signOut }
}
