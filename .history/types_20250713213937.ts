export interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  year: string;
  imageUrl: string;
  email: string;
  linkedin?: string;
}

export interface PreviousTeamMember {
  name: string;
  role: string;
  teamYear: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  type: 'upcoming' | 'past';
  youtubeLink?: string;
}

export interface Student {
  id: number;
  name:string;
  entryNumber: string;
  branch: string;
  batch: number;
  email: string;
  phone?: string;
  interests?: string[];
}

export interface Professor {
  name: string;
  department: string;
}

export interface Delegate {
  name: string;
  entryNumber: string;
  position: string;
}
