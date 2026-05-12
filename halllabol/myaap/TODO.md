# Search Box Implementation Plan

- [x] Analyze existing code (Api.jsx, App.jsx, etc.)
- [x] Fix `sarch` state: initialize as empty string instead of array
- [x] Populate `orignaldat` state when API data loads
- [x] Implement `hendlesarch` function with title/description/category filtering
- [x] Fix search input: `type="text"`, controlled `value`, add `onChange`
- [x] Remove stray backticks and clean JSX
- [x] Test search behavior (filter + reset on empty query)

# use Hook + Suspense Loading Implementation Plan

- [x] Create module-level fetch promise in Api.jsx
- [x] Split Api into Api (Suspense wrapper) + ApiContent (use hook consumer)
- [x] Add loading spinner fallback UI inside Suspense
- [x] Add CSS for loading spinner in App.css
- [x] Test that loading appears while API data is resolving

