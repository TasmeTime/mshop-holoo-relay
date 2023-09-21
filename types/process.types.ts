export interface IProcess {
  // C_Code	nvarchar(5)	N
  C_Code: string | null;
  // Comment	nvarchar(500)	N
  Comment: string | null;
  // DateProc	nvarchar(10)	N
  DateProc: string | null;
  // KindProc	char(10)	N
  KindProc: string | null;
  // NameProc	char(10)	N
  NameProc: string | null;
  // Number	char(12)	N
  Number: string | null;
  // ProcId	int	N
  ProcId: number | null;
  // TimeProc	nvarchar(5)	N
  TimeProc: string | null;
  // User_Code	int	N
  User_Code: number | null;
  // Blob	image	N
  Blob: string | null;
  // ID	int
  ID: number;
}
