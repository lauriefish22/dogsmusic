const SUPABASE_URL = 'https://jmdfixempqwyhkrrtcbj.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZGZpeGVtcHF3eWhrcnJ0Y2JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ1NzUzOTYsImV4cCI6MTk5MDE1MTM5Nn0.6kedsKVXsFKvx_P4MONEnWJ_b7rHQWInoK8x8eST7_w';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getBands() {
    const { data, error } = await client.from('bands').select('*');

    if (error) console.error(error);

    return data;
}
