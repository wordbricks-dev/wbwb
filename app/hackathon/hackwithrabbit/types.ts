export enum TrackType {
  MAIN = 'Main Track'
}

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  type: 'keynote' | 'workshop' | 'hacking' | 'social';
}

export interface GeneratedIdea {
  title: string;
  description: string;
  technologies: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  impact: string;
}

export interface Sponsor {
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver';
}