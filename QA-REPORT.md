# Website review — 25 October 2026

## Coverage

30 public routes: homepage, services overview, all 6 service details, portfolio overview, all 12 project details, company, careers, contact, blog overview, all 3 articles, privacy and terms. Chromium checks at 1440px, 768px and 360px (90 route/viewport combinations).

All checked public routes returned HTTP 200, had one H1, loaded their images, and had no horizontal document overflow, empty/hash-only links or uncaught browser JavaScript errors. These checks do not certify every visual detail or browser/device combination.

## Changes from this review

- Fixed scroll reveals that could leave large sections invisible: intersection detection now works even when a section is taller than the viewport.
- Improved service cards with linked visuals, stronger actions and hover treatment; added a service-selection guidance section.
- Improved careers listings and added a three-step introduction process. Listings now invite expressions of interest instead of claiming unverified live vacancies.
- Preserved homepage enquiry fields on the contact page, including service slug mapping. Contact now clearly opens an email draft; it does not claim a server submission.
- Replaced the nonfunctional newsletter signup with a functioning journal link; clarified the homepage form and FAQ actions.
- Prevented overview-level CMS overrides from overwriting detailed service, article and project pages.
- Added recoverable admin error UI and controlled CMS API failure responses. Failed schema initialization can retry rather than leaving a permanently rejected cached promise.
- Added media upload submit and clipboard controls; restricted new upload filename extensions to allowed raster MIME types and removed new SVG uploads.
- Added robots directives excluding admin and API paths and reduced-motion treatment for public pages.

## Interaction checks

Mobile menu open/close, shared scroll-to-top, contact query prefill and service mapping passed. Hero autoplay changed slides; all six portfolio filters rendered six cards; FAQ expansion and testimonial navigation responded. Actual scrolling confirmed that the long services section becomes visible. Final production compilation and TypeScript validation passed; the 90-check public route sweep was repeated on the final build with zero detected issues in the listed automated checks.

## Outstanding dependencies and limitations

- Local WAMP MySQL and MariaDB services were stopped during testing. Admin/login/setup report database unavailability and CMS returns a controlled 503. Authentication, logout, content persistence, media persistence and real database recovery are NOT VERIFIED end to end. No accounts or test records were created.
- Contact remains an email-app draft flow, not a server-delivered email or stored lead. Delivery and receipt are NOT VERIFIED. No messages were sent.
- Contact telephone is still the existing placeholder +91 99999 99999. Business phone, social-profile ownership, testimonials, case-study performance figures and company claims need owner confirmation before publication.
- Public header/footer settings remain hardcoded; the admin settings screen does not yet provide a complete global-data binding. Content editing uses DOM selectors on overview pages, not a complete structured CMS for every nested article/service/project.
- First-admin setup is a first-account flow, not an invitation system. Restrict setup access during deployment; full authentication/security/load testing was not performed.
- Production domain configuration is not verified. Next.js warns about an unset metadataBase for social-image URLs. Configure the confirmed production origin before publishing.
- New media uploads use local public/uploads storage; persistence and permissions on Hostinger need deployment verification.
- Checked with Chromium; Safari, Firefox, real-device behaviour and assistive-technology testing are not certified.

No Git push or remote deployment was performed in this review.
