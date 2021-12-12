function click(){
    console.log("hello");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function (){
        if(this.readyState===4 && this.status===200){
            var response = JSON.parse(this.responseText);
            console.log(response);
            var output="";
            var output1 = "";
            for(var i=0;i<=response.length;i++){
                output +="<li>"+response[i].city+"</li>";
            }
            document.getElementById("clicked").innerHTML=output;
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/users",true);
    xhttp.send();
}
// code
<script>
    const xhr = new XMLHttpRequest();
    let userDeatils;

    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) { 
            
            userDeatils = JSON.parse(xhr.responseText);
            
            let tableContent = "<tr><th>NAME</th><th>USERNAME</th><th>CompanyName</th></tr>";

            for (let i =0; i<userDeatils.length;i++) {
                tableContent += "<tr><td>"+userDeatils[i].name+"</td><td>"+userDeatils[i].username;
                </script>