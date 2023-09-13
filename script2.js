var inv = ""
var appsscriptlinkofjs2 = "https://script.google.com/macros/s/AKfycbz30qxelfVykq0n7YQHF-909-WHBCQyfGlG0KTIsuTjnNurGpAnnG76xaJnCR8IRt15/exec"

$(document).ready(function (){
    Tit()
    FindInv()
    $("#exampleModalToggle").modal('show')
})

function Tit()
{
    inv = sessionStorage.getItem("Invoicen")
    document.title =inv 
}

function FindInv()
{

    var table = "",column = "",row = "", Rows = 1

    $.getJSON(appsscriptlinkofjs2+"?page=FindInvoice&Invno="+inv,
    function(data){

        $.each(data, function(key, value)
        {

            var col = 1
            column = ""

            $.each(value, function(key1, value1)
            {

                if(Rows > 1)
                {

                    if(col < 4)
                    {

                        column = column +'<td class = "bg-dark"></td>'
                    }
                    else
                    {
                        column = column +'<td>'+value1+'</td>'
                    }
                }
                else
                {
                  if(col >3){
                    column = column +'<td class = "bg-dark"></td>'
                  }
                  else if (col == 3){
                    var date = value1.substring(0,10)
                    console.log(date)
                    column = column +'<td>'+date+'</td>'
                  }
                  else{
                    column = column +'<td>'+value1+'</td>'
                  }
                }
                col = col + 1
            })
            
            row = row+'<tr>'+column+'</tr>'
            Rows = Rows + 1
        })
        $("#Tbody").append(row)

        $("#exampleModalToggle").modal('hide')
    }

)}

function SV()
{
    $("#exampleModalToggle").modal('show')
    $.getJSON(appsscriptlinkofjs2+"?page=Save&Invno="+inv,
    function(data)
    {
        if(data == "Submited")
        {
            $("#exampleModalToggle").modal('hide')
            $("#Submitted").modal('show')
        }
    })
    inv = ""
}

function Cg()
{
    window.location.assign("index2.html")
}