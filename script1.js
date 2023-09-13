var InvoiceNo = ""
var Partyname =""
var appsscriptlink = "https://script.google.com/macros/s/AKfycbz30qxelfVykq0n7YQHF-909-WHBCQyfGlG0KTIsuTjnNurGpAnnG76xaJnCR8IRt15/exec"
$(document).ready(function(){
    add()
})
function add(){
    var table = "",column = "",row ="",col = 1
    $.getJSON(appsscriptlink+"?page=GetUnbilled",
    function(data){
        $.each(data, function(key, value){
            column = ""
            col = 1
            InvoiceNo = ""
            var Date =""
            $.each(value, function(key1, value1){
                
                if(InvoiceNo == "") InvoiceNo = value1

                if(col == 2)
                {
                    Date = value1.substring(0,10)
                    column = column +'<td>'+Date+'</td>'
                }
                else{
                    column = column +'<td>'+value1+'</td>'
                }
                col = col+1
            })
            button = '<td><button class="btn btn-primary" onclick="Proceed('+InvoiceNo+')">Proceed</button></td>'
            column = column + button
            row = row+'<tr>'+column+'</tr>'
        })
        $("#MYTBODY").append(row)
    })
}
function Proceed(InvoiceNo){
    sessionStorage.setItem("Invoicen", InvoiceNo)
    window.location.assign("index3.html")
}
