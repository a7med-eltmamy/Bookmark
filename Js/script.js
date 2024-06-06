var SiteName = document.getElementById('SiteName')
var SiteURL = document.getElementById('SiteURL')
var SiteBtn = document.getElementById('SiteBtn')
var siteList =[]

SiteBtn.onclick = addSiteName

function addSiteName(){

    var site ={
        sName:SiteName.value,
        SiteURL:SiteURL.value
    }
console.log(site)
siteList.push(site)
displaySite()
console.log(siteList)
}


function displaySite(){
    var cartona=``;
    for(var i = 0; i<siteList.length; i++){
        cartona+=`
        <tr>
        <th scope="row">${i}</th>
        <td> ${siteList[i].sName}</td>
        <td>
        <a href="${siteList[i].SiteURL}" target="_blank">
        <button type="button" class="btn btn-warning">visit</button>
        </a>
        </td>
        
        <td>
          <button  onclick='delte(${i})' type="button" class="btn btn-danger">delete</button>
        </td>
      </tr>
          `
    }
    document.getElementById('tbody').innerHTML = cartona  
}


function delte(index){
  siteList.splice(index,1)
  displaySite()
}