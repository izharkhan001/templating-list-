var cl=console.log;

let skills =[ "html", "css", "js", "nodejs", "angular", "react"];


var result =  '<ul class="list-group">';

for ( var i=0 ; i < skills.length ; i++){ 
 
    result += 
       
    <li class="list-grouo-item">I Love ${skills[i]}</li>

}
 result += '</ul>';
                   

 cl(result);
 var skillslist = document.getElementById("skillslist");

 skillslist.innerHTML = result;

 var stdcontainer = document.getElementById("stdcontainer");

 var result2 = '';
 for (let i = 0 ; i < stdsArr.length ; i++ ){ 
    
    result2 +=   <tr> 
                     <td>1</td>
                    <td>qwer</td> 
                    <td>asdfc</td>
                    <td>dsfd</td>
                    <td>sdrf</td>
                   </tr> 
    
    
 }

 stdcontainer.innerHTML=result2 ;













