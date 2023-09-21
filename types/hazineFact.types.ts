export interface IHazineFact {
  // ID	int
  ID: number;
  // Fac_Code	nvarchar(6)	N
  Fac_Code: string | null;
  // Fac_Type	nvarchar(1)	N
  Fac_Type: string | null;
  // SanadCode	int	N
  SanadCode: number | null;
  // Sarfasl_CodeHaz	nvarchar(11)	N
  Sarfasl_CodeHaz: string | null;
  // SarFasl_NameHaz	nvarchar(500)	N
  SarFasl_NameHaz: string | null;
  // Sarfasl_CodeCust	nvarchar(11)	N
  Sarfasl_CodeCust: string | null;
  // SarFasl_NameCust	nvarchar(500)	N
  SarFasl_NameCust: string | null;
  // LineNumber	int	N
  LineNumber: number | null;
  // Cust	float	N
  Cust: number | null;
}
