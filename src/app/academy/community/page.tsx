import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import CommunityFeed from '@/components/CommunityFeed';

export default async function CommunityPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/academy/login');
  }

  // Check academy access
  const { data: academyUser } = await supabase
    .from('academy_users')
    .select('trial_start, subscription_status')
    .eq('id', user.id)
    .single();

  if (!academyUser) {
    redirect('/academy/login');
  }

  const trialStart = academyUser.trial_start ? new Date(academyUser.trial_start) : new Date();
  const trialEnd = new Date(trialStart);
  trialEnd.setDate(trialEnd.getDate() + 7);

  const isActive = academyUser.subscription_status === 'active';
  const trialActive = new Date() < trialEnd;
  const hasAccess = isActive || trialActive;

  if (!hasAccess) {
    redirect('/academy/subscribe');
  }

  return <CommunityFeed userId={user.id} />;
}
