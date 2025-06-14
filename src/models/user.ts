export interface Role {
  id: string;
  name: string;
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  display_name: string;
  email: string | null;
  phone: string | null;
  active: boolean;
  roles: Role[];
  created_at: Date;
  updated_at: Date;
}
