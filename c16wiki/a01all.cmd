echo %0
call C:\ProgramData\Anaconda3\Scripts\activate.bat
SET FPATH=D:\mailCloud\prjother\b04py\b006enru\
if NOT EXIST %FPATH% (
    SET FPATH=D:\mailCloud\cloud\prjother\b04py\b006enru\
    ECHO Yes
)

ECHO %FPATH%b02mdhtml.py
@REM 
python %FPATH%b03schedule.py b2650schedule.md i265001time.png
python %FPATH%b02mdhtml.py all
b2650schedule.html
