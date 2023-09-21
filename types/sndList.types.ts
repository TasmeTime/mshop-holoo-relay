export interface ISndList {
  // Sanad_Code	int
  Sanad_Code: number;
  // Index	int
  Index: number;
  // Col_Code	varchar(3)	N
  Col_Code: string | null;
  // Moien_Code	varchar(4)	N
  Moien_Code: string | null;
  // Tafzili_Code	varchar(4)	N
  Tafzili_Code: string | null;
  // Bed	float	N
  Bed: number | null;
  // Bes	float	N
  Bes: number | null;
  // Show_Daftar	bit	N
  Show_Daftar: boolean | null;
  // Joze	bit	N
  Joze: boolean | null;
  // Type_Line	varchar(1)	N
  Type_Line: string | null;
  // Comment_Line	nvarchar(500)	N
  Comment_Line: string | null;
  // Date_Line	datetime	N
  Date_Line: Date | null;
  // Number_Line	float	N
  Number_Line: number | null;
  // MHaz_Code	int	N
  MHaz_Code: number | null;
  // Actions	tinyint	N
  Actions: number | null;
  // IsCMS	bit	N
  IsCMS: boolean | null;
  // OldSCode	int
  OldSCode: number;
  // F_Update	bit	N
  F_Update: boolean | null;
  // Bed_Arz	float
  Bed_Arz: number;
  // Bes_Arz	float
  Bes_Arz: number;
  // ArzId	int
  ArzId: number;
  // Money_Price	float
  Money_Price: number;
  // Money_change	float
  Money_change: number;
  // Notes	nvarchar(1000)	N
  Notes: string | null;
}
