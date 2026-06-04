import { createBrowserClient } from '@supabase/ssr';

function makeClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

const cache: { client?: ReturnType<typeof makeClient> } = {};

export function createClient() {
  return (cache.client ??= makeClient());
}
