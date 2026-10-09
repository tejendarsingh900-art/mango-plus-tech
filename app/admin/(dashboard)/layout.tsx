import { redirect } from 'next/navigation';
import AdminShell from '../../../components/AdminShell';
import { logoutAdmin, requireAdmin } from '../../../lib/admin-auth';
export default async function DashboardLayout({children}:{children:React.ReactNode}){const admin=await requireAdmin();async function logout(){'use server';await logoutAdmin();redirect('/admin/login')}return <AdminShell admin={admin} logout={logout}>{children}</AdminShell>}
