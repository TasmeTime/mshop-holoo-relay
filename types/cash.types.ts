export interface ICash {
  // Id	int
  Id: number;
  // Parent_Id	int	N
  Parent_Id: number | null;
  // S_Type	bit	N
  S_Type: boolean | null;
  // S_Name	varchar(60)	N
  S_Name: string | null;
  // Sarfasl_Code	varchar(11)	N
  Sarfasl_Code: string | null;
  // Sarfasl_Code2	varchar(11)	N
  Sarfasl_Code2: string | null;
}
