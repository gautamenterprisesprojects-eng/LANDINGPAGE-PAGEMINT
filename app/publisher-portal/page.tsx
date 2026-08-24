import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { PAGEMINT_APP_URL } from '@/lib/links'

export const metadata: Metadata = {
  title: 'Publisher Portal — Everything Your Publishing Team Needs, In One Place',
  description: 'Manage publications, editions, content, advertisements, team and analytics from a single professional publishing operations portal.',
}

export default function PublisherPortalPage() {
  redirect(PAGEMINT_APP_URL)
}
