echo %0
call C:\ProgramData\Anaconda3\Scripts\activate.bat
call C:/anaconda3/Scripts/activate.bat
SET FPATH=O:\prjother\b04py\b006enru\

ECHO %FPATH%b02mdhtml.py
@REM 
python %FPATH%b03schedule.py b2650schedule.md i265001time.png 2 10
python %FPATH%b02mdhtml.py all
b2650schedule.html
pause
