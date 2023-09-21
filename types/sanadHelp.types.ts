export interface ISanad {
  // index	int
  index: number;
  // Col_Code	char(10)	N
  Col_Code: string | null;
  // Moien_Code	char(10)	N
  Moien_Code: string | null;
  // Tafzili_Code	char(10)	N
  Tafzili_Code: string | null;
  // Sarfasl_Code	varchar(15)	N
  Sarfasl_Code: string | null;
  // Sarfasl_Name	nvarchar(60)	N
  Sarfasl_Name: string | null;
  // Bed	float	N
  Bed: number | null;
  // Bes	float	N
  Bes: number | null;
  // Comment_Line	nvarchar(60)	N
  Comment_Line: string | null;
  // Bed2	float	N
  Bed2: number | null;
  // Bes2	float	N
  Bes2: number | null;
  // Type	int	N
  Type: number | null;
}
