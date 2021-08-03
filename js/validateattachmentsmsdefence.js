function ValidateSize(file) {
	var FileSize = file.files[0].size / 1024 / 1024;

    if (FileSize > 51) {
        alert('Filesize must not exceed 51 MB.');
        $(file).val('');
    } 
    else {
        var fileExtension = ['pdf', 'docx', 'xlsx', 'pptx', 'msg' , 'zip', 'rar', '7z'];

        if ($.inArray($(image).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
            alert("Allowed filetypes: PDF, Word, Excel, PowerPoint, OutlookMail, ZIP, RAR and 7z.");
            $(image).val('');
        }
    }
}