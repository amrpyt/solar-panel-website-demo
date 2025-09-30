# CMS Setup Guide - Decap CMS

## 🎉 What's Been Added

Your website now includes **Decap CMS** (formerly Netlify CMS) - the most popular Git-based CMS with **18,608+ stars** on GitHub.

### Features

- ✅ **Visual Content Editor** - User-friendly interface for managing content
- ✅ **Git-Based** - All content stored in your Git repository
- ✅ **Multiple Collections** - Blog posts, projects, testimonials, services
- ✅ **Media Management** - Upload and manage images
- ✅ **No Database Required** - Uses markdown files
- ✅ **Version Control** - Track all content changes via Git

## 📁 What Was Created

### CMS Admin Interface
- `/public/admin/index.html` - CMS admin panel
- `/public/admin/config.yml` - CMS configuration

### Content Collections
- `/src/content/blog/` - Blog posts
- `/src/content/projects/` - Project showcases
- `/src/content/testimonials/` - Customer testimonials
- `/src/content/services/` - Service offerings
- `/src/content/pages/` - Page content
- `/src/content/settings/` - Site settings

### Content Schema
- `/src/content/config.ts` - TypeScript schemas for content validation

### Blog Pages
- `/src/pages/blog/index.astro` - Blog listing page
- `/src/pages/blog/[slug].astro` - Individual blog post page

## 🚀 How to Access the CMS

### Local Development

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Access the CMS at:**
   ```
   http://localhost:4321/admin
   ```

### For Production (Deployment)

To use the CMS in production, you need to set up authentication. Here are the recommended options:

#### Option 1: GitHub (Recommended)

1. **Deploy to a Git hosting service** (GitHub, GitLab, Bitbucket)

2. **Enable Git Gateway Authentication:**
   
   For GitHub:
   - Go to your repository settings
   - Enable GitHub OAuth App
   - Add Netlify/Vercel identity service

3. **Update the backend in** `public/admin/config.yml`:
   ```yaml
   backend:
     name: github
     repo: your-username/your-repo-name
     branch: main
   ```

#### Option 2: Netlify Identity (Easiest)

1. **Deploy to Netlify**

2. **Enable Identity in Netlify Dashboard:**
   - Go to Site Settings → Identity
   - Click "Enable Identity"

3. **Enable Git Gateway:**
   - Identity → Services → Git Gateway → Enable

4. **Invite Users:**
   - Identity → Invite users
   - Send invitations to content editors

The CMS will work automatically with the existing config:
```yaml
backend:
  name: git-gateway
  branch: main
```

#### Option 3: Local Development Only

For testing locally without authentication:

1. **Update** `public/admin/config.yml`:
   ```yaml
   backend:
     name: test-repo
   ```

2. **Restart dev server and access** `/admin`

## 📝 Managing Content

### Blog Posts

1. Go to `/admin`
2. Click "Blog Posts"
3. Click "New Blog Posts"
4. Fill in the fields:
   - Title
   - Description
   - Author
   - Publish Date
   - Featured Image (optional)
   - Tags
   - Body (Markdown)
5. Click "Publish"

### Projects

Add your completed solar projects with:
- Title
- Category (Residential, Commercial, etc.)
- Capacity
- Location
- Description
- Images
- Completion date

### Testimonials

Manage customer testimonials with:
- Name
- Role/Company
- Rating (1-5 stars)
- Testimonial text
- Avatar emoji

### Services

Update service offerings with:
- Title
- Icon selection
- Description
- Benefits
- Features list
- Display order

### Page Content

Edit homepage content, about page, and contact information directly from the CMS.

### Site Settings

Update global settings like:
- Site title and description
- Company contact info
- Social media links
- Email and phone

## 📂 Content Structure

Content is stored as Markdown files in `/src/content/`:

```
src/content/
├── blog/
│   └── welcome.md
├── projects/
├── testimonials/
├── services/
├── pages/
│   ├── home.md
│   ├── about.md
│   └── contact.md
└── settings/
    └── general.json
```

## 🎨 Customization

### Adding New Fields

Edit `public/admin/config.yml` to add fields:

```yaml
fields:
  - {label: "New Field", name: "newField", widget: "string"}
```

### Widget Types Available

- `string` - Text input
- `text` - Textarea
- `markdown` - Markdown editor
- `boolean` - Toggle
- `number` - Number input
- `datetime` - Date/time picker
- `select` - Dropdown
- `image` - Image upload
- `list` - Array of items
- `object` - Nested fields

### Adding New Collections

Add to `config.yml`:

```yaml
collections:
  - name: "news"
    label: "News"
    folder: "src/content/news"
    create: true
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Body", name: "body", widget: "markdown"}
```

## 🔧 Workflow

1. **Content Editor** creates/edits content in CMS
2. **CMS** saves changes as Markdown files in Git
3. **Git** commits and pushes changes
4. **Astro** reads content and builds pages
5. **Deploy** triggers automatically on Git push

## 📊 Collections Overview

| Collection | Purpose | Location |
|------------|---------|----------|
| Blog Posts | News and articles | `/blog` |
| Projects | Portfolio showcase | Used in Projects section |
| Testimonials | Customer reviews | Used in Testimonials section |
| Services | Service offerings | Used in Services section |
| Pages | Page content | Homepage, About, Contact |
| Settings | Site configuration | Global settings |

## 🔒 Security Notes

- Never commit authentication tokens
- Use environment variables for secrets
- Enable CORS for production domains
- Set up proper user roles and permissions

## 🐛 Troubleshooting

### CMS shows "Config Error"
- Check `public/admin/config.yml` syntax
- Validate YAML format

### Can't save content
- Check Git authentication
- Verify repository permissions
- Check branch exists

### Images not uploading
- Verify `media_folder` path
- Check file size limits
- Ensure public folder permissions

## 📚 Resources

- **Decap CMS Docs**: https://decapcms.org/docs/
- **Configuration Options**: https://decapcms.org/docs/configuration-options/
- **Widgets Reference**: https://decapcms.org/docs/widgets/
- **GitHub Repo**: https://github.com/decaporg/decap-cms

## 🎯 Next Steps

1. ✅ CMS is installed and configured
2. 📝 Access `/admin` to start creating content
3. 🚀 Deploy to production
4. 🔐 Set up authentication (GitHub/Netlify)
5. 👥 Invite content editors
6. 📱 Start managing your content!

---

**Your CMS is ready to use!** Access it at `/admin` when running the dev server.
