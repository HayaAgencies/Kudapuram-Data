var appsscript = "https://script.google.com/macros/s/AKfycbzO-y9847EJ3qQuVWynoEziRq4QT170iOQ3yxbIYt65VXaRURCPkxjslCHEm7ry81QL/exec"
function Download(){
    var StartDate = $("#StartingDate").val()
    var EndDate =  $("#EndingDate").val()
    var table = "",row = "",column = ""
    $.getJSON(appsscript+"?page=DownloadData&startingdate="+StartDate+"&endingdate="+EndDate,
    function(data){
        $.each(data , function(key, value){
            column = ""
            $.each(value, function(key1, value1){
                column = column +'<td>'+value1+'</td>'
            })
            row = row + '<tr>'+column+'</tr>'
        })
        table = row
        console.log(table)
        $("#Mytablebody").append(row)
    })
}