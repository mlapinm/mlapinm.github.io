ECHO %0
SET ARG=%1


IF "%ARG%" == "" (
  GOTO into
)

d:\mailCloud\prjother\b04py\b006enru\b02mdhtml.py %ARG%


ECHO %ARG%

GOTO end
:into

::ECHO 2222

d:\mailCloud\prjother\b04py\b006enru\b02mdhtml.py b2632rem.md

:end
