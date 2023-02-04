echo %0

SET FNAME=D:\mailCloud\prjother\b04py\b006enru\b02mdhtml.py
if NOT EXIST %FNAME% (
    SET FNAME=D:\mailCloud\cloud\prjother\b04py\b006enru\b02mdhtml.py
    ECHO Yes
)
ECHO %FNAME%
python %FNAME% all


