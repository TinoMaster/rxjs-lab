import {
  faCode,
  faWandMagicSparkles,
  IconDefinition,
  faPuzzlePiece,
} from '@fortawesome/free-solid-svg-icons';

interface NavigationItem {
  label: string;
  route: string;
  icon?: IconDefinition;
  subItems?: NavigationItem[];
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: 'Basic Observables',
    route: 'basic-observables',
    icon: faCode,
  },
  {
    label: 'Basic Operators',
    route: 'basic-operators',
    icon: faWandMagicSparkles,
  },
  {
    label: 'Operators',
    route: 'operators',
    icon: faPuzzlePiece,
    subItems: [
      {
        label: 'Creation',
        route: 'creation',
        icon: faWandMagicSparkles,
        subItems: [
          {
            label: 'Create',
            route: 'create',
            icon: faWandMagicSparkles,
          },
          {
            label: 'Of',
            route: 'of',
            icon: faWandMagicSparkles,
          },
        ],
      },
    ],
  },
];
