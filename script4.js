var TotalAmount = 0

var appsscript = "https://script.google.com/macros/s/AKfycbyahLdKFH-q46YI6bhh3_wjZ1zr1C-gNli3-4gvqhKsTgSe-3MR2TbGlGNjGnFoqADw/exec"

function Download(){
        var Dtable = document.getElementById('Mytablebody');

        //convert the table to workbook object
        var workbook    =  XLSX.utils.table_to_book(Dtable);

        //generate xlsx file from wokbook
        var excelData = XLSX.write(workbook,{bookType:'xlsx',type:'array'});

        //save the file
        saveAs(new Blob([excelData],{type:'application/octet-stream'}),'users.xlsx');

}

function GetReport(){

    var table = "" , row = "" , column = "" , columnCound = 0,TotalAmount = 0

    column = '<td>Invoie No</td><td>Date</td><td>Party</td><td>Amount</td>'

    row = '<tr>'+column+'</tr>'

    var StartDate = $("#StartingDate").val()

    var EndDate =  $("#EndingDate").val()

    $("#Load").modal('show')

    $.getJSON(appsscript+"?page=DownloadData&startingdate="+StartDate+"&endingdate="+EndDate,

    function(data){

        $.each(data , function(key, value){

            column = ""
            columnCound = 0
            
            $.each(value, function(key1, value1){
                
                

                if (columnCound == 1 ){
                    
                    var Date = value1.substring(0,10)
                    column = column +'<td>'+Date+'</td>'

                }
                else{

                    column = column +'<td>'+value1+'</td>'

                }
                
                if (columnCound == 3 ){

                    TotalAmount = TotalAmount + value1

                }

                columnCound = columnCound + 1
            
            })
            
            row = row + '<tr>'+column+'</tr>'
        
        })

        var ttCol = '<td></td><td></td><td>Total Amount</td><td>'+TotalAmount+'</td>'
        var Ttrow = '<tr>'+ttCol+'</tr>'

        row = row + Ttrow
        
        table = row
        
        console.log(table)
        
        $("#Mytablebody").append(row)

        $("#Load").modal('hide')
    
    })

}