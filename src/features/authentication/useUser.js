import { useQuery } from '@tanstack/react-query'
import { getCurrentUser } from '../../services/apiAuth.js'

export function useUser() {
  const { isLoading, data: currentUser } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  })

  const user = currentUser?.user ?? currentUser

  return {
    isLoading,
    user,
    isAuthenticated: user?.role === 'authenticated',
  }
}
