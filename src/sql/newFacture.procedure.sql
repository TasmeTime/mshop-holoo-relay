CREATE PROCEDURE NotifyNewFacture
@FAC_CODE INT;
AS

--Variables
DECLARE @token INT;
DECLARE @res INT;
DECLARE @url NVARCHAR(MAX);
SET @url='http://localhost:23021/newFacture?facturecode=' + @FAC_CODE;

--CREATE THE OBJECT
EXEC @res = sp_OACreate 'MSXML2.XMLHTTP', @token OUT;
IF @res <> 0 RAISERROR('Unable to open HTTP connection', 10, 1);

--Start calling the api
EXEC @res = sp_OAMethod @token, 'open', NULL, 'GET', @url, 'false';
EXEC @res = sp_OAMethod @token, 'send';