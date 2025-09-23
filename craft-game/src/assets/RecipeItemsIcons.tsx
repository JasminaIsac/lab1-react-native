import cauldron from '@assets/icons/cauldron.png';
import moonWater from '@assets/icons/moonWater.png';
import herbs from '@assets/icons/leaves.png';
import charcoal from '@assets/icons/charcoal.png';
import ash from '@assets/icons/ash.png';
import mortar from '@assets/icons/mortar.png';
import moonTonic from '@assets/icons/moonTonic.png';
import combustive from '@assets/icons/combustive.png';
import healingOintment from '@assets/icons/healingOintment.png';
import cauldronEssence from '@assets/icons/cauldronEssence.png';
import vitality from '@assets/icons/vitality.png';
import bomb from '@assets/icons/bomb.png';
import longevity from '@assets/icons/longevity.png';
import crystal from '@assets/icons/crystal.png';
import destruction from '@assets/icons/destruction.png';
import immortality from '@assets/icons/immortality.png';

export const recipeItemIcons: Record<number, string> = {
  1: charcoal,
  2: moonWater,
  3: herbs,
  4: cauldron,
  5: ash,
  6: mortar,
  7: moonTonic,
  8: combustive,
  9: healingOintment,
  10: cauldronEssence,
  11: vitality,
  12: bomb,
  13: crystal,
  14: longevity,
  15: destruction,
  16: immortality
}

// Ingrediente brute
// export const recipeItemIcons: Record<string, ReactNode> = {
//   1: (
//     <svg width="32" height="32" viewBox="0 0 24 24">
//       <path d="M12 2C10 7 6 10 6 14a6 6 0 0 0 12 0c0-4-4-7-4-12z" fill="orange" />
//     </svg>
//   ),
//   2: (
//     <svg width="32" height="32" viewBox="0 0 24 24">
//       <path d="M12 2C10 8 6 12 6 16a6 6 0 0 0 12 0c0-4-4-8-4-14z" fill="blue" />
//     </svg>
//   ),
//   3: (
//     <svg width="32" height="32" viewBox="0 0 24 24">
//       <circle cx="12" cy="12" r="10" fill="green" />
//     </svg>
//   ),
//   4: (
//     <svg width="32" height="32" viewBox="0 0 24 24">
//       <path d="M4 12h16M4 16h12M4 8h20" stroke="lightblue" strokeWidth="2" />
//     </svg>
//   ),
//   5: (
//     <svg width="32" height="32" viewBox="0 0 24 24">
//       <circle cx="12" cy="12" r="3" fill="orange" />
//       <path d="M12 4 L12 0 M12 24 L12 20 M4 12 L0 12 M24 12 L20 12" stroke="orange" strokeWidth="1"/>
//     </svg>
//   ),
//   6: (
//     <svg width="32" height="32" viewBox="0 0 24 24">
//       <circle cx="12" cy="12" r="6" fill="blue" opacity="0.6" />
//       <circle cx="12" cy="12" r="3" fill="lightblue" />
//     </svg>
//   ),
//   7: (
//     <svg width="32" height="32" viewBox="0 0 24 24">
//       <path d="M12 2 C14 8, 20 12, 12 22 C4 12, 10 8, 12 2 Z" fill="green" />
//     </svg>
//   ),
//   8: (
//     <svg width="32" height="32" viewBox="0 0 24 24">
//       <circle cx="12" cy="12" r="6" fill="lightgrey" opacity="0.5" />
//       <path d="M10 6 C12 4, 14 8, 12 10" stroke="grey" strokeWidth="1" />
//     </svg>
//   ),
//   9: (
//     <svg width="32" height="32" viewBox="0 0 24 24">
//       <rect x="6" y="6" width="12" height="12" fill="grey" />
//       <path d="M8 8 L16 16 M16 8 L8 16" stroke="white" strokeWidth="1"/>
//     </svg>
//   ),
//   10: (
//     <svg width="32" height="32" viewBox="0 0 24 24">
//       <polygon points="12,2 15,8 12,14 9,8" fill="orange" />
//       <polygon points="12,6 14,10 12,14 10,10" fill="yellow" />
//     </svg>
//   ),
//   11: (
//     <svg width="32" height="32" viewBox="0 0 24 24">
//       <path d="M6 6 L18 18 M6 18 L18 6" stroke="blue" strokeWidth="2"/>
//       <circle cx="12" cy="12" r="4" fill="lightblue" opacity="0.3"/>
//     </svg>
//   ),
//   12: (
//     <svg width="32" height="32" viewBox="0 0 24 24">
//       <circle cx="12" cy="12" r="8" fill="saddlebrown" />
//       <circle cx="12" cy="12" r="4" fill="darkgreen" opacity="0.4"/>
//     </svg>
//   ),
//   13: (
//     <svg width="32" height="32" viewBox="0 0 24 24">
//       <circle cx="12" cy="12" r="10" fill="red" />
//       <circle cx="12" cy="12" r="5" fill="orange" opacity="0.6"/>
//     </svg>
//   ),
//   14: (
//     <svg width="32" height="32" viewBox="0 0 24 24">
//       <polygon points="12,2 14,10 12,18 10,10" fill="lightblue"/>
//       <polygon points="12,6 13,10 12,14 11,10" fill="white"/>
//     </svg>
//   ),
//   15: (
//     <svg width="32" height="32" viewBox="0 0 24 24">
//       <circle cx="12" cy="12" r="6" fill="lightblue" opacity="0.3"/>
//       <path d="M6 12 H18 M6 14 H18 M6 10 H18" stroke="white" strokeWidth="1"/>
//     </svg>
//   ),
//   16: (
//     <svg width="32" height="32" viewBox="0 0 24 24">
//       <path d="M12 21 C12 21, 2 13, 6 8 C10 3, 14 3, 18 8 C22 13, 12 21, 12 21 Z" fill="green"/>
//     </svg>
//   ),
//   17: (
//     <svg width="32" height="32" viewBox="0 0 24 24">
//       <circle cx="12" cy="12" r="8" fill="red"/>
//       <path d="M12 4 L14 10 L12 16 L10 10 Z" fill="orange"/>
//     </svg>
//   ),
//   18: (
//     <svg width="32" height="32" viewBox="0 0 24 24">
//       <polygon points="12,2 16,8 12,14 8,8" fill="purple"/>
//       <circle cx="12" cy="12" r="2" fill="yellow"/>
//     </svg>
//   ),
//   19: (
//     <svg width="32" height="32" viewBox="0 0 24 24">
//       <circle cx="12" cy="12" r="10" fill="grey" />
//       <path d="M4 12h16M12 4v16" stroke="white" strokeWidth="2"/>
//     </svg>
//   ),
// };