import readLine from "readline";
import sql from "mssql";
import XLSX from "xlsx";
import { IArticle } from "../types/article.types";

export const purgeArabic = (text: string) => {
  var fixList = {
    // ك: "ک",
    1603: 1705,
    // ى: "ی",
    1609: 1740,
    // ي: "ی",
    1610: 1740,
    // "١": "۱",
    1633: 1777,
    // "٢": "۲",
    1634: 1778,
    // "٣": "۳",
    1635: 1779,
    // "٤": "۴",
    1636: 1780,
    // "٥": "۵",
    1637: 1781,
    // "٦": "۶",
    1638: 1782,
    // "٧": "۷",
    1639: 1783,
    // "٨": "۸",
    1640: 1784,
    // "٩": "۹",
    1641: 1785,
    // "٠": "۰",
    1642: 1786,
  };

  let fv = "";
  for (var i = 0; i < text.length; i++) {
    const ascii = text[i].charCodeAt(0);
    const invalidCharacters = Object.keys(fixList).map((x) => parseInt(x));

    const index = invalidCharacters.findIndex((x) => x === ascii);
    if (index !== -1)
      //@ts-ignore
      fv += String.fromCharCode(fixList[invalidCharacters[index]]);
    else fv += text[i];
  }

  return fv;
};

let fileName = "MSHOP_EXPORT";
const sqlConfig = {
  user: "sa",
  password: "23212321",
  database: "Holoo1",
  server: "localhost",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    // dialectOptions: { options: { encrypt: false } },
    encrypt: false,
    // cryptoCredentialsDetails: {
    //   minVersion: "TLSv1",
    // },
  },
};

const connect = async () => {
  try {
    // make sure that any items are correctly URL encoded in the connection string
    //@ts-ignore
    await sql.connect(sqlConfig);
    const result = await sql.query<IArticle>`select  * from article`;

    const data = result.recordset.map((rec) => {
      return {
        A_Code: rec.A_Code.toString(),
        A_Name: purgeArabic(rec.A_Name + ""),
      };
    });

    const workSheet = XLSX.utils.json_to_sheet(data);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "Sheet 1");
    XLSX.writeFile(workBook, "./" + fileName + ".xlsx");
    console.log("file created");
  } catch (err: any) {
    // ... error checks
    console.log("err", err?.message);
  }
};
// connect();

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// user
// password
// database
// server

rl.question("Server: ", function (server: any) {
  sqlConfig.server = server;
  rl.question("DB Name: ", function (dbName: any) {
    sqlConfig.database = dbName;
    rl.question("DB Username: ", function (user: any) {
      sqlConfig.user = user;
      rl.question("DB Password: ", function (password: any) {
        sqlConfig.password = password;
        rl.question("FileName: ", function (fn: any) {
          fileName = fn;
          connect();
        });
      });
    });
  });
});

rl.on("close", function () {
  console.log("\nBYE BYE !!!");
  process.exit(0);
});
