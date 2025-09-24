import type { RecipeItem } from "@typeData/types";
import { recipeItemIcons } from "@assets/RecipeItemsIcons";

export const recipeItems: RecipeItem[] = [
  // Primary ingredients
  {
    id: 1,
    type: 'primary',
    name: "Charcoal Root",
    description: "A scorched root, often ground into ash.",
    icon: recipeItemIcons[1],
  },
  {
    id: 2,
    type: 'primary',
    name: "Moonlight Water",
    description: "Water gathered under a full moon, infused with silver light.",
    icon: recipeItemIcons[2],
  },
  {
    id: 3,
    type: 'primary',
    name: "Herb Bundle",
    description: "Medicinal herbs tied in a small bundle.",
    icon: recipeItemIcons[3],
  },
  {
    id: 4,
    type: 'primary',
    name: "Witch's Cauldron",
    description: "The heart of brewing, reacts with roots and tonics.",
    icon: recipeItemIcons[4],
  },

  // Level 1 – basic crafted
  {
    id: 5,
    type: 'crafted',
    name: "Ashen Powder",
    description: "Powder milled from several charcoal roots",
    ingredients: [1, 1, 1, null, null, null, null, null, null], // 3× Charcoal Root
    icon: recipeItemIcons[5],
  },
  {
    id: 6,
    type: 'crafted',
    name: "Herbal Extract",
    description: "Concentrated essence of a lot of medicinal plants.",
    ingredients: [3, 3, 3, 3, 3, 3, 3, 3, 3], // 9× Herb Bundle
    icon: recipeItemIcons[6],
  },
  {
    id: 7,
    type: 'crafted',
    name: "Moon Tonic",
    description: "An infusion of herbs steeped in moonlight water.",
    ingredients: [3, 3, null, 2, 2, null, null, null, null], // 2× Herb + 2× Water
    icon: recipeItemIcons[7],
  },

  // Level 2 – intermediate
  {
    id: 8,
    type: 'crafted',
    name: "Combustive Mixture",
    description: "A volatile brew of ash and moonlight water, brewed in the cauldron.",
    ingredients: [5, 5, 5, 2, 2, 2, 4, null, null], // 3× Ashen Powder + 3× Water + Cauldron
    icon: recipeItemIcons[8],
  },
  {
    id: 9,
    type: 'crafted',
    name: "Healing Ointment",
    description: "A soothing balm for wounds, drawn from herbal extracts and moon tonics.",
    ingredients: [null, 7, null, 6, null, 6, null, 7, null], // 2× Herbal Extract + 2× Moon Tonic
    icon: recipeItemIcons[9],
  },
  {
    id: 10,
    type: 'crafted',
    name: "Eldritch Cauldron Essence",
    description: "Dark oil distilled from cauldrons, infused with ash and moon tonic",
    ingredients: [4, null, null, 4, 5, 7, 4, null, null], // 3× Cauldron + Ashen Powder + Moon Tonic
    icon: recipeItemIcons[10],
  },

  // Level 3 – advanced
  {
    id: 11,
    type: 'crafted',
    name: "Potion of Vitality",
    description: "Life force drawn from Water, Herbs, Tonic, and Ointment",
    ingredients: [2, 2, 2, 7, 9, 7, 3, 3, 3], // 3× Water + 2× Moon Tonic + Healing Ointment + 3× Herb
    icon: recipeItemIcons[11],
  },
  {
    id: 12,
    type: 'crafted',
    name: "Potion of Explosion",
    description: "Unstable brew of Combustive Mixtures and Cauldron Essence.",
    ingredients: [8, 8, 10, null, null, null, null, null, null], // 2× Combustive Mixture + Cauldron Essence
    icon: recipeItemIcons[12],
  },
  {
    id: 13,
    type: 'crafted',
    name: "Crystal of Clarity",
    description: "A crystal forged from repeated fusions of Moon Tonic and Cauldron Essence.",
    ingredients: [7, 10, 7, 10, 7, 10, 7, 10, 7], // 5× Moon Tonic + 4× Cauldron Essence
    icon: recipeItemIcons[13],
  },

  // Level 4 – rare
  {
    id: 14,
    type: 'crafted',
    name: "Elixir of Longevity",
    description: "Life-extending draught made from three Vitality Potions",
    ingredients: [11, null, null, null, 11, null, null, null, 11], // 3× Potion of Vitality
    icon: recipeItemIcons[14],
  },
  {
    id: 15,
    type: 'crafted',
    name: "Elixir of Destruction",
    description: "Corrosive essence born of Mixture and Explosion.",
    ingredients: [null, null, null, null, 8, null, null, 12, null], // Combustive Mixture + Potion of Explosion
    icon: recipeItemIcons[15],
  },

  // Level 5 – ultimate
  {
    id: 16,
    type: 'crafted',
    name: "Immortality Potion",
    description: "Forbidden draught that unites life, death, and clarity.",
    ingredients: [null, null, null, 14, 15, 13, null, null, null], // Longevity + Destruction + Clarity
    icon: recipeItemIcons[16],
  },
];