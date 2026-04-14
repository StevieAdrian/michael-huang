# JSON-LD Structured Data Implementation Guide

## What Was Added

Your homepage now includes 6 comprehensive JSON-LD schemas that tell AI models and search engines exactly what your business does.

## Schema Breakdown

### 1. **ProfessionalService Schema** (Main Business)
**What it does:** Tells search engines this is a professional service business with multiple offerings.

**Key information included:**
- Business name: Michael Huang
- 5.0-star rating with 691 reviews
- Full address with coordinates (-6.138918, 106.730667)
- Phone: +62-821-2385-595
- Email: contact@michaelhuang.id
- Price range: $$
- Founder: Michael Huang, S.H., S.T., M.Kn.
- Service catalog with all legal services
- Area served: Jakarta

**Why it matters:** This is your primary business identity. Google uses this for Knowledge Panels and rich snippets.

---

### 2. **Attorney Schema** (Law Firm)
**What it does:** Specifically identifies your law firm services for legal search queries.

**Key information included:**
- Name: Michael, Antonius & Co Law Firm
- Services: Corporate litigation, legal advisory, dispute resolution
- Location with coordinates
- 5.0-star rating
- Area served: Jakarta

**Why it matters:** When someone searches "law firm Jakarta" or "pengacara Jakarta Barat", this helps you appear in results.

---

### 3. **Notary Schema** (Notaris & PPAT)
**What it does:** Identifies you as a licensed Notaris and PPAT official.

**Key information included:**
- Name: Michael Huang - Notaris & PPAT
- Credentials: S.H., S.T., M.Kn.
- Services: Company formation, property deeds, legal authentication
- Full address and coordinates
- 5.0-star rating

**Why it matters:** Critical for searches like "notaris Jakarta Barat", "PPAT terdekat", "pendirian PT Jakarta".

---

### 4. **Restaurant Schema** (Warteg Gemini)
**What it does:** Identifies your restaurant for food-related searches.

**Key information included:**
- Name: Warteg Gemini
- Cuisine: Indonesian
- Price range: $ (affordable)
- Services: Dine-in and catering
- Location with coordinates
- 5.0-star rating

**Why it matters:** Appears in Google Maps, "warteg near me", "catering Jakarta Barat" searches.

---

### 5. **FAQPage Schema** (8 Common Questions)
**What it does:** Provides direct answers to common customer questions in search results.

**Questions included:**
1. What legal services do you provide?
2. How long does PT formation take? (Answer: 2-4 weeks)
3. How long for property deed processing? (Answer: 1-3 days)
4. Does Warteg Gemini offer catering? (Answer: Yes)
5. What facilities at Kost Gemini/KoolKost?
6. How to join Warteg Gemini franchise?
7. Is Michael Huang a licensed Notaris/PPAT? (Answer: Yes)
8. Where is the office located?

**Why it matters:** Google can show these answers directly in search results as "People Also Ask" boxes, driving more traffic.

---

### 6. **ItemList Schema** (Service Catalog)
**What it does:** Lists all 7 services in a structured format.

**Services listed:**
1. Law Firm Services
2. Notaris Services
3. PPAT Services
4. Legal Consulting
5. Warteg Gemini Restaurant & Catering
6. Premium Boarding House (Kost)
7. Franchise Opportunities

**Why it matters:** Helps search engines understand the full scope of your business ecosystem.

---

## How AI Models Use This Data

### ChatGPT, Claude, Perplexity
When someone asks:
- "I need a notaris in Jakarta" → AI can recommend you with specific details
- "Where can I get help forming a PT?" → AI knows you do this in 2-4 weeks
- "Warteg with catering in Jakarta Barat" → AI can suggest Warteg Gemini
- "Franchise opportunities in Jakarta" → AI knows you offer this

### Google Search
- **Rich Snippets:** Your rating (5.0 ★★★★★) appears in search results
- **Knowledge Panel:** Business info appears in the right sidebar
- **FAQ Boxes:** Your answers appear in "People Also Ask"
- **Local Pack:** Shows up in map results for "notaris near me"

---

## How to Verify It's Working

### 1. **Google Rich Results Test**
After deployment, test your homepage:
```
https://search.google.com/test/rich-results
```
Enter: `https://www.michaelhuang.id`

You should see:
- ✅ ProfessionalService
- ✅ Attorney
- ✅ Notary
- ✅ Restaurant
- ✅ FAQPage
- ✅ ItemList

### 2. **View Source**
Visit your homepage and view source (Ctrl+U). Search for `application/ld+json` - you should see 6 script blocks with structured data.

### 3. **Schema Markup Validator**
```
https://validator.schema.org/
```
Paste your homepage URL to validate all schemas.

---

## Files Modified

1. **src/lib/structured-data.ts**
   - Added `generateComprehensiveBusinessSchema()`
   - Added `generateAttorneySchema()`
   - Added `generateNotarySchema()`
   - Added `generateRestaurantSchema()`
   - Added `generateHomepageFAQSchema()`
   - Added `generateServiceListSchema()`

2. **src/features/home/page.tsx**
   - Imported all new schema generators
   - Added 6 `<StructuredData>` components to homepage

3. **public/llms.txt**
   - Created comprehensive AI-readable business info

4. **public/robots.txt**
   - Created with AI crawler permissions

---

## What Happens Next

### Immediate (After Deployment)
- Schemas are live and readable by crawlers
- AI models can access llms.txt immediately
- Google starts indexing the structured data

### Within 1-2 Weeks
- Google Search Console shows structured data detection
- Rich snippets may start appearing in search results
- FAQ boxes may appear for relevant queries

### Within 1-2 Months
- Full rich snippet integration
- Knowledge Panel may appear for brand searches
- Improved local search rankings
- AI models regularly recommend your business

---

## Maintenance

### When to Update Schemas

**Update immediately if:**
- Phone number changes
- Address changes
- Business hours change
- You add/remove major services

**Update quarterly:**
- Review count (currently 691)
- Rating (currently 5.0)
- Service descriptions
- FAQ answers

**Where to update:**
- Edit `src/lib/structured-data.ts`
- Redeploy the website
- Schemas update automatically

---

## Technical Details

### Coordinates Used
- Main Office: -6.13891866018095, 106.73066707400585
- Law Firm: -6.136249860156894, 106.72863377400589

### Schema.org Types Used
- ProfessionalService (most specific for multi-service business)
- Attorney (for law firm)
- Notary (for notaris/PPAT)
- Restaurant (for Warteg)
- FAQPage (for Q&A)
- ItemList (for service catalog)

### Why These Types?
- **ProfessionalService** over LocalBusiness: Better for service-based businesses with professional credentials
- **Attorney** + **Notary**: Separate schemas for each legal service type improves search visibility
- **Restaurant**: Specific type for food business gets better placement in food searches
- **FAQPage**: Direct answer boxes in Google search results
- **ItemList**: Helps Google understand service relationships

---

## SEO Impact

### Expected Improvements

**Search Visibility:**
- 20-40% increase in click-through rate from rich snippets
- Better ranking for long-tail queries ("notaris pendirian PT Jakarta Barat")
- Appearance in "People Also Ask" boxes

**AI Recommendations:**
- ChatGPT/Claude can recommend you with confidence
- Perplexity includes you in search results with details
- AI models cite specific services and pricing timelines

**Local Search:**
- Improved Google Maps ranking
- Better "near me" search results
- Enhanced local pack visibility

---

## Questions?

If you need to modify any schema information, edit the functions in:
`src/lib/structured-data.ts`

All schemas are automatically included on the homepage via:
`src/features/home/page.tsx`
