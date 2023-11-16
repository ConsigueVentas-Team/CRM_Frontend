import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { getCookie } from '@/lib/utils';

export function useAuth() {
    const token = getCookie('accessToken');
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated) && token;
    const user = useSelector((state: RootState) => state.auth.user);

    return { isAuthenticated, user };
}