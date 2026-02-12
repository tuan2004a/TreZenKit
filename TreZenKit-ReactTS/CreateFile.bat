@echo off
REM ===============================================
REM Script: CreateFile.bat
REM Muc dich: Tao nhanh cau truc 1 plugin trong src\plugins
REM Cau truc tao ra:
REM   /src/plugins/<PluginName>/
REM       interface.ts
REM       style.css
REM       Readme.md
REM       index.ts
REM       index.tsx
REM       /shared/index.ts
REM       /variants/index.ts
REM Cach dung:
REM   CreateFile.bat <PluginName>
REM Vi du:
REM   CreateFile.bat Input
REM ===============================================

setlocal ENABLEDELAYEDEXPANSION

REM ----- Cau hinh thu muc goc cho plugins -----
set "BASE_DIR=src\plugins"

REM ----- Kiem tra tham so -----
IF "%~1"=="" (
    echo Usage: %~nx0 ^<PluginName^>
    echo   Vi du: %~nx0 Input
    goto :eof
)

REM Tham so truyen vao co the la:
REM   - Ten ngan:   label
REM   - Hoac duong dan: src\plugins\label
set "PLUGIN_NAME=%~1"
set "TARGET_DIR=%PLUGIN_NAME%"

REM Neu tham so KHONG chua \ hoac / thi hieu la ten plugin, prefix bang BASE_DIR
echo %TARGET_DIR% | findstr /R "[\\/]" >nul
IF ERRORLEVEL 1 (
    set "TARGET_DIR=%BASE_DIR%\%PLUGIN_NAME%"
)

set "SHARED_DIR=%TARGET_DIR%\shared"
set "VARIANTS_DIR=%TARGET_DIR%\variants"

echo.
echo === Tao plugin "%PLUGIN_NAME%" trong "%BASE_DIR%" ===

REM ----- Tao thu muc chinh -----
REM Luu y: Luon kiem tra ton tai truoc khi tao de tranh loi
IF NOT EXIST "%TARGET_DIR%" (
    mkdir "%TARGET_DIR%"
    echo Da tao folder: "%TARGET_DIR%"
) ELSE (
    echo Folder da ton tai: "%TARGET_DIR%"
)

REM ----- Tao thu muc shared -----
REM Luu y: Tao subfolder truoc khi tao file ben trong de tranh loi path khong ton tai
IF NOT EXIST "%SHARED_DIR%" (
    mkdir "%SHARED_DIR%"
    echo Da tao folder: "%SHARED_DIR%"
) ELSE (
    echo Folder da ton tai: "%SHARED_DIR%"
)

REM ----- Tao shared/index.ts -----
REM Luu y: Su dung block () de ghi multi-line vao file, tranh loi dau ngoac {} bi nham lan voi block batch
IF NOT EXIST "%SHARED_DIR%\index.ts" (
    (
        echo // Export cac utils/constant dung chung cho %PLUGIN_NAME%
    ) > "%SHARED_DIR%\index.ts"
    echo Da tao file: "%SHARED_DIR%\index.ts"
) ELSE (
    echo File da ton tai: "%SHARED_DIR%\index.ts"
)

REM ----- Tao thu muc variants -----
IF NOT EXIST "%VARIANTS_DIR%" (
    mkdir "%VARIANTS_DIR%"
    echo Da tao folder: "%VARIANTS_DIR%"
) ELSE (
    echo Folder da ton tai: "%VARIANTS_DIR%"
)

REM ----- Tao variants/index.ts -----
IF NOT EXIST "%VARIANTS_DIR%\index.ts" (
    (
        echo // Export cac variants cho %PLUGIN_NAME%
        echo // vi du:
        echo // export ^{ Primary, Secondary ^} from "./button";
    ) > "%VARIANTS_DIR%\index.ts"
    echo Da tao file: "%VARIANTS_DIR%\index.ts"
) ELSE (
    echo File da ton tai: "%VARIANTS_DIR%\index.ts"
)

REM ----- Tao interface.ts -----
IF NOT EXIST "%TARGET_DIR%\interface.ts" (
    (
        echo export interface %PLUGIN_NAME%Props ^{ 
        echo ^	// TODO: khai bao props cho %PLUGIN_NAME%
        echo ^}
    ) > "%TARGET_DIR%\interface.ts"
    echo Da tao file: "%TARGET_DIR%\interface.ts"
) ELSE (
    echo File da ton tai: "%TARGET_DIR%\interface.ts"
)

REM ----- Tao style.css -----
IF NOT EXIST "%TARGET_DIR%\style.css" (
    (
        echo /* Style cho plugin %PLUGIN_NAME% */
    ) > "%TARGET_DIR%\style.css"
    echo Da tao file: "%TARGET_DIR%\style.css"
) ELSE (
    echo File da ton tai: "%TARGET_DIR%\style.css"
)

REM ----- Tao Readme.md -----
IF NOT EXIST "%TARGET_DIR%\Readme.md" (
    (
        echo # %PLUGIN_NAME%
        echo.
        echo Mo ta ngan ve plugin %PLUGIN_NAME%.
    ) > "%TARGET_DIR%\Readme.md"
    echo Da tao file: "%TARGET_DIR%\Readme.md"
) ELSE (
    echo File da ton tai: "%TARGET_DIR%\Readme.md"
)

REM ----- Tao index.ts -----
REM Luu y: Thoat cac ky tu dac biet nhu { } bang ^ de tranh loi parser batch
IF NOT EXIST "%TARGET_DIR%\index.ts" (
    (
        echo export type ^{ %PLUGIN_NAME%Props ^} from "./interface";
        echo export ^{ default as %PLUGIN_NAME% ^} from "./index.tsx";
        echo.
        echo // Export shared utils
        echo export * from "./shared";
        echo.
        echo // Export variants
        echo export * from "./variants";
    ) > "%TARGET_DIR%\index.ts"
    echo Da tao file: "%TARGET_DIR%\index.ts"
) ELSE (
    echo File da ton tai: "%TARGET_DIR%\index.ts"
)

REM ----- Tao index.tsx -----
REM Luu y: Thoat ( va { trong ham bang ^ neu can, nhung o day su dung block de an toan
IF NOT EXIST "%TARGET_DIR%\index.tsx" (
    (
        echo import type ^{ %PLUGIN_NAME%Props ^} from "./interface";
        echo.
        echo function %PLUGIN_NAME%(props: %PLUGIN_NAME%Props) ^{ 
        echo ^	// TODO: implement %PLUGIN_NAME%
        echo ^	return null;
        echo ^}
        echo.
        echo %PLUGIN_NAME%.displayName = "%PLUGIN_NAME%";
        echo.
        echo export default %PLUGIN_NAME%;
    ) > "%TARGET_DIR%\index.tsx"
    echo Da tao file: "%TARGET_DIR%\index.tsx"
) ELSE (
    echo File da ton tai: "%TARGET_DIR%\index.tsx"
)

echo.
echo Done.
endlocal