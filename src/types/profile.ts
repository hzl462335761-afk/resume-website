export type ContactField = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea';
  required: boolean;
  placeholder: string;
};

export type Project = {
  name: string;
  description: string;
  role: string;
  period: string;
  impact: string;
  details: string[];
  links: { label: string; url: string }[];
};
