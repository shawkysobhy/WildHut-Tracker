import GlobalStyles from './styles/GlobalStyles';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Account from './pages/Account';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';
import { Toaster } from 'react-hot-toast';
import Cabins from './pages/Cabins';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient({});
function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route index element={<Navigate to='dashboard' />} />
						<Route path='dashboard' element={<Dashboard />} />
						<Route path='bookings' element={<Bookings />} />
						<Route path='cabins' element={<Cabins />} />
						<Route path='settings' element={<Settings />} />
						<Route path='account' element={<Account />} />
						<Route path='users' element={<Users />} />
					</Route>
					<Route path='login' element={<Login />} />
					<Route index path='*' element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
			<Toaster
				position='top-right'
				reverseOrder={false}
				gutter={8}
				toastOptions={{
					className: '',
					duration: 3000,
					style: {
						background: 'var(--color-grey-0)',
						color: 'var(--color-grey-700)',
						padding:'1rem 3rem',
						maxWidth:'600px',
						fontSize:'1.5rem',
					},
					success: {
						duration: 3000,
						theme: {
							primary: 'green',
							secondary: 'black',
						},
						
					},
				}}
			/>
		</QueryClientProvider>
	);
}

export default App;
