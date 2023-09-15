echo %0
call C:\ProgramData\Anaconda3\Scripts\activate.bat
call C:/anaconda3/Scripts/activate.bat
SET FPATH=O:\prjother\b04py\b006enru\

python %FPATH%b03schedule.py b2650schedule.md i265001time.png 2 9
python %FPATH%b02mdhtml.py all
b2650schedule.html
pause
