export interface Role {
  id: string;
  name: string;
  code: string;
}

export interface Organization {
  id: string;
  name: string;
  parent_id?: string | null;
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  display_name: string;
  organization_id: string;
  email?: string | null;
  phone?: string | null;
  active: boolean;
  roles: Role[];
  organizations?: Organization[];
  created_at: string;
  updated_at: string;
}
