# SPARCC Enterprise Color System Reference

## Overview
The SPARCC Enterprise platform uses a comprehensive ROYGBIV (Rainbow) spectrum color system that ensures visual consistency and intuitive navigation across all 10 domains.

## Spectrum Distribution

### 10 Domains - ROYGBIV Mapping

| Position | Color | Domain | Hex Primary | Gradient |
|----------|-------|--------|-------------|----------|
| 1 | **Red** | Corporate | `#dc2626` | `from-red-700 via-red-600 to-red-500` |
| 2 | **Orange** | Finance | `#ea580c` | `from-orange-700 via-orange-600 to-orange-500` |
| 3 | **Yellow** | Sales | `#ca8a04` | `from-yellow-600 via-yellow-500 to-amber-400` |
| 4 | **Green** | Marketing | `#16a34a` | `from-green-700 via-green-600 to-green-500` |
| 5 | **Cyan** | Product | `#0891b2` | `from-cyan-700 via-cyan-600 to-cyan-500` |
| 6 | **Blue** | Customer Success | `#2563eb` | `from-blue-700 via-blue-600 to-blue-500` |
| 7 | **Indigo** | HR | `#4f46e5` | `from-indigo-700 via-indigo-600 to-indigo-500` |
| 8 | **Deep Indigo** | IT | `#5b21b6` | `from-violet-800 via-violet-700 to-violet-600` |
| 9 | **Purple** | Operations | `#9333ea` | `from-purple-700 via-purple-600 to-purple-500` |
| 10 | **Violet** | Legal & Compliance | `#7c3aed` | `from-violet-700 via-violet-600 to-fuchsia-600` |

### System-Level Views

| View | Color | Gradient | Purpose |
|------|-------|----------|---------|
| **System Health** | Green | `from-green-600 via-green-500 to-emerald-500` | Cross-domain health monitoring |
| **Command Center** | Violet | `from-violet-600 via-violet-500 to-purple-500` | Centralized operations hub |
| **Enterprise Analytics** | Orange | `from-orange-600 via-orange-500 to-amber-500` | Cross-functional analytics |
| **Gap Analyzer** | Red | `from-red-600 via-red-500 to-rose-500` | Identify capability gaps |

## Implementation Files

### Core Color Module
- **File**: `/src/config/colorSystem.js`
- **Purpose**: Single source of truth for all colors
- **Exports**:
  - `spectrumColors` - Individual color definitions
  - `domainColors` - Domain-to-color mappings
  - `systemColors` - System view colors
  - `fullSpectrumGradient` - Complete ROYGBIV gradient
  - Helper functions: `getColorByDomain()`, `getSystemColor()`

### Domain Registry
- **File**: `/src/config/domainRegistry.js`
- **Integration**: Imports and uses `domainColors` for each domain's gradient
- **Pattern**: Each domain references its color via `domainColors.{domainId}.gradient`

### UI Components
- **File**: `/src/core/EnterprisePlatform.jsx`
- **Usage**:
  - SPARCC Enterprise title: Uses `fullSpectrumGradient`
  - Domain navigation bar: Uses `fullSpectrumGradient`
  - Domain buttons: Use individual domain gradients from registry
  - System view buttons: Use `systemColors`

## Visual Hierarchy

```
┌─────────────────────────────────────────────────────────────┐
│ SPARCC Enterprise (Full Spectrum Gradient)                 │
│ V2.0 - Multi-Domain                                         │
├─────────────────────────────────────────────────────────────┤
│ [System Health] [Command Center] [Analytics] [Gap Analyzer]│
├─────────────────────────────────────────────────────────────┤
│ Domain Navigation Bar (Full Spectrum Background)           │
│ [RED] [ORG] [YEL] [GRN] [CYN] [BLU] [IND] [DIN] [PRP] [VIO]│
├─────────────────────────────────────────────────────────────┤
│ Layer Navigation (Domain-Specific Gradient)                │
│ [Strategy] [Planning] [Execution] [Performance] [Insights] │
└─────────────────────────────────────────────────────────────┘
```

## Color Theory & Psychology

### Why ROYGBIV?
1. **Intuitive**: Follows natural rainbow spectrum
2. **Memorable**: Easy to remember domain positions
3. **Distinct**: Maximum visual differentiation between domains
4. **Accessible**: High contrast between adjacent colors
5. **Scalable**: Easy to add/remove domains while maintaining spectrum

### Domain-Color Rationale

- **Red (Corporate)**: Power, leadership, strategic importance
- **Orange (Finance)**: Vitality, energy, financial growth
- **Yellow (Sales)**: Optimism, success, conversion
- **Green (Marketing)**: Growth, creativity, brand health
- **Cyan (Product)**: Innovation, clarity, user focus
- **Blue (Customer Success)**: Trust, reliability, loyalty
- **Indigo (HR)**: Wisdom, depth, people focus
- **Deep Indigo (IT)**: Technical depth, infrastructure
- **Purple (Operations)**: Efficiency, process excellence
- **Violet (Legal)**: Authority, compliance, governance

## Usage Guidelines

### DO:
✅ Use colors from the color system module
✅ Reference domain colors via `domainColors.{domainId}`
✅ Use gradient classes for headers and feature areas
✅ Maintain color consistency across related components

### DON'T:
❌ Hard-code color values in components
❌ Create custom gradients outside the color system
❌ Mix domain colors inappropriately
❌ Use domain colors for non-domain content

## Maintenance

### Adding a New Domain
1. Add color definition to `spectrumColors` in `colorSystem.js`
2. Add mapping in `domainColors`
3. Add domain to `domainRegistry.js` with color reference
4. Update this documentation

### Modifying Colors
1. Only modify colors in `colorSystem.js`
2. Test across all views (light/dark mode)
3. Verify accessibility (contrast ratios)
4. Update documentation if color meanings change

## Testing Checklist

- [ ] All 10 domains display with correct colors
- [ ] Full spectrum gradient appears in title and domain nav
- [ ] System view buttons have correct colors
- [ ] Dark mode preserves color relationships
- [ ] No hard-coded color values in components
- [ ] Layer navigation uses domain gradients
- [ ] Module cards respect domain colors
- [ ] Active/hover states are visually distinct

---

**Version**: 2.0
**Last Updated**: 2025-11-03
**Maintained By**: SPARCC Enterprise Team
