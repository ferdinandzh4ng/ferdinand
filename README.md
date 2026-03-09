# Ferdinand — Personal Website

A personal website built with Next.js (App Router), React, TypeScript, and Tailwind CSS. Images are stored in Supabase Storage; videos use YouTube (or other) links.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build and deploy

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com) by connecting the repo; set any env vars (e.g. `NEXT_PUBLIC_PROFILE_IMAGE_URL`) in the project settings.

## Supabase setup (images)

1. Create a [Supabase](https://supabase.com) project.
2. Go to **Storage** and create a bucket (e.g. `public-assets` or `images`).
3. Set the bucket to **Public** so image URLs work without signed links.
4. Optional: create folders like `profile`, `projects`, `album` inside the bucket.
5. For the **photo album** to load images from the bucket automatically, add a Storage policy so the app can list files. In Supabase: **Storage** → **Policies** → **New policy** → "For full customization" and add a policy with operation **SELECT** (read) on your bucket (e.g. `images`). Without this, the album falls back to the URLs in `content/album.ts`.
6. Copy `.env.local.example` to `.env.local` and add:
   - `NEXT_PUBLIC_SUPABASE_URL` — from Project Settings → API
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` — from Project Settings → API
7. Upload your profile photo and any project/album images to the bucket. For each file, open it in the Supabase dashboard and copy the **public URL** (e.g. `https://xxxxx.supabase.co/storage/v1/object/public/images/profile.jpg`).

### Where to upload photos and what to name them

- **Upload location**: Supabase → Storage → your bucket. You can use any folder structure (e.g. `profile/`, `projects/`, `album/`, `home/`).
- **File names**: Any name is fine (e.g. `me.jpg`, `project-1.png`, `photo-01.jpg`). There are no required titles or naming rules.
- **Titles on the site**: The text titles (e.g. project name, section title) are set in the content files, not by the file name. Upload the image, copy its public URL, then paste that URL into the right place in the repo and type the title/description there.

### Where to paste image URLs

- **Profile photo**: set `NEXT_PUBLIC_PROFILE_IMAGE_URL` in `.env.local`, or edit `content/profile.ts` and set `PROFILE_IMAGE_URL` to your Supabase public URL.
- **Projects**: edit `content/projects.ts` and set each project’s `imageUrl` to the Supabase public URL for that project image.
- **Photo album**: upload images into the `album` folder of your bucket (e.g. `images/album/`) — the More page will list and show them automatically. Supported: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.avif`, `.svg`. If the bucket list fails or the folder is empty, the site uses the fallback URLs in `content/album.ts`.

## Editing content

- **Projects** (title, description, image, demo video, link): `content/projects.ts`
- **Badminton videos** (YouTube or other embed URLs): `content/badminton.ts`
- **Photo album**: `content/album.ts`
- **Random thoughts**: `content/thoughts.ts`
- **Social links**: `lib/constants.ts` (LinkedIn, GitHub, Instagram, X)

No database is used; all content lives in these files so you can edit and redeploy without a CMS.
