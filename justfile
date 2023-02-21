# use PowerShell instead of sh:
set shell := ["powershell.exe", "-c"]

deploy:
   $env:GIT_USER = "AleksandrGontcharov"
   yarn deploy