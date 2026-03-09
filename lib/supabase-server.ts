import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

function getSupabase() {
  if (!supabaseUrl || !supabaseAnonKey) return null;
  return createClient(supabaseUrl, supabaseAnonKey);
}

const IMAGE_EXTENSIONS = [
  ".jpg", ".jpeg", ".png", ".gif", ".webp", ".avif", ".svg",
];

function isImageFile(name: string): boolean {
  const lower = name.toLowerCase();
  return IMAGE_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

/**
 * Lists all image URLs in a Supabase Storage folder. Upload images to your
 * bucket under that folder (e.g. "album") and they will appear in the photo album.
 * Returns [] if Supabase isn't configured or listing fails.
 */
export async function getAlbumImageUrls(
  bucket: string = "images",
  folder: string = "album"
): Promise<string[]> {
  const supabase = getSupabase();
  if (!supabase) return [];

  const { data, error } = await supabase.storage.from(bucket).list(folder, {
    limit: 500,
  });

  if (error || !data?.length) return [];

  const baseUrl = `${supabaseUrl}/storage/v1/object/public/${bucket}/${folder}`;
  const urls = data
    .filter((item) => item.name && isImageFile(item.name))
    .map((item) => `${baseUrl}/${encodeURIComponent(item.name)}`);

  return urls;
}
