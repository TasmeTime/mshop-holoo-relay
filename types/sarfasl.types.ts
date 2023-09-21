export interface ISarfasl {
  // Col_Code	varchar(3)
  Col_Code: string;
  // Moien_Code	varchar(4)
  Moien_Code: string;
  // Tafzili_Code	varchar(4)
  Tafzili_Code: string;
  // Sarfasl_Code	varchar(11)	N
  Sarfasl_Code: string | null;
  // Sarfasl_Name	varchar(100)	N
  Sarfasl_Name: string | null;
  // Mandeh	float	N
  Mandeh: number | null;
  // Group	smallint	N
  Group: number | null;
  // Mahiat	smallint	N
  Mahiat: number | null;
  // Can_Delete	bit	N
  Can_Delete: boolean | null;
  // Common	varchar(5)	N
  Common: string | null;
  // Delete	bit	N
  Delete: boolean | null;
  // MHaz_Code	int	N
  MHaz_Code: number | null;
  // AutoUse	bit
  AutoUse: boolean;
  // ID	int
  ID: number;
  // Parent	int	N
  Parent: number | null;
  // Type	int	N
  Type: number | null;
  // SParent	int	N
  SParent: number | null;
  // ArzId	int
  ArzId: number;
  // Money_Price	float
  Money_Price: number;
  // Selected	bit
  Selected: boolean;
}
