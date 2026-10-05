Option Explicit
On Error Resume Next

Dim appRef, desc
If WScript.Arguments.Count = 0 Then WScript.Quit

Set appRef = CreateObject("Photoshop.Application")
Set desc = CreateObject("Photoshop.ActionDescriptor")
desc.PutString appRef.StringIDToTypeID("target"), WScript.Arguments(0)
If WScript.Arguments.Count > 1 Then
    desc.PutString appRef.StringIDToTypeID("scriptArgs"), WScript.Arguments(1)
End If
appRef.ExecuteAction appRef.StringIDToTypeID("5e8d016e-b5d9-46e8-ab14-d2f9f24db20a"), desc, 3
