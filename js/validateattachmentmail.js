function ValidateSize(file) {
	var FileSize = file.files[0].size / 1024 / 1024;

    if (FileSize > 5) {
        alert('Filesize must not exceed 5 MB.');
        $(file).val('');
    } 
    else {
        var fileExtension = ['pdf', 'docx', 'xlsx', 'pptx', 'msg' , 'zip', 'rar', '7z', 'jpg', 'png', 'gif', 'txt'];

        if ($.inArray($(image).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
            alert("Allowed filetypes: PDF, Word, Excel, PowerPoint, OutlookMail, ZIP, RAR, 7z, Images and text.");
            $(image).val('');
        }
    }
}