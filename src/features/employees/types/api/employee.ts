export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  imageUrl: string;
  contactNumber: string;
  email: string;
  about: string;
  adress: string;
  manager_id: number | null;
  created_at: Date;
  updated_at: Date;
};
